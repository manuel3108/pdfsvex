import { Page } from './Page';
import { uid } from 'uid';
import TextNode from './nodes/TextNode';
import CommentNode from './nodes/CommentNode';
import BaseNode from './nodes/BaseNode';
import TextSplitter from './TextSplitter';
import {
    ATTRIBUTE_NAME_DATA_CREATED_FROM_UID,
    ATTRIBUTE_NAME_DYNAMIC_COMPONENT_ID,
    CLASS_NAME_DYNAMIC_COMPONENT,
} from './Constants';

export class Pager {
    /**
     * Creates a new pager
     * @param {HTMLElement} content content that should be paged
     * @param {HTMLElement} generated node to append the generated content to
     * @param {*} options options
     */
    constructor(content, generated, options) {
        this.generated = generated;
        this.options = options;

        // deep clone the contents, so that we can reuse it later
        this.content = content.cloneNode(true);

        // clear the content
        content.innerHTML = '';
    }

    pageNow() {
        this.wayToRoot = [];
        this.pages = [];

        this.generated.innerHTML = '';

        this.currentPage = this.createAndAddPage();
        const appendToNode = this.currentPage.contentDom;

        this.walk(appendToNode, this.content, true);

        this.finalize();
    }

    /**
     * Travels the dom and initiates all accurate actions for each of the nodes
     * Can be seen as the brain of this program
     * @param {HTMLElement} appendToNode node to append new children's to
     * @param {HTMLElement} nodeToCopy the node that should be recreated
     * @param {boolean} root determines if we are the root node
     * @returns {HTMLElement} the node the parent should append its remaining nodes to
     */
    walk(appendToNode, nodeToCopy, root = false) {
        if (!TextNode.is(nodeToCopy) && !CommentNode.is(nodeToCopy)) {
            // if this is a real html node
            // add a unique id to each of the original html nodes
            nodeToCopy.setAttribute(
                ATTRIBUTE_NAME_DATA_CREATED_FROM_UID,
                uid()
            );
        }

        let node = undefined;
        if (root) {
            // if we are the root, just append to this node
            node = appendToNode;
        } else {
            // if we are a child of the root node
            // create the child with all appropriate attributes
            node = this.createNode(nodeToCopy);
            // and append it to the dom
            appendToNode.appendChild(node);
        }

        let avoidBreakInside = false;
        let pageBreakAfter = false;
        // check if we need to pay attention on some css attributes
        if (!TextNode.is(nodeToCopy) && !CommentNode.is(nodeToCopy)) {
            avoidBreakInside = BaseNode.hasPageBreakInsideAvoid(node);
            pageBreakAfter = BaseNode.hasPageBreakInsideAvoid(node);
        }

        // check if the page is currently overflowing
        let hasOverflow = this.currentPage.hasOverflow();

        let skipChildren = false;
        if (avoidBreakInside) {
            // if the current element should not be breaked inside
            // iterate over all of its children and create the appropriate nodes recursively
            nodeToCopy.childNodes.forEach((child) => {
                this.createNodesRecursive(node, child);
            });

            // since we just handled all of the children, and will add them to the next page
            // we don't need to re-add them later on
            skipChildren = true;

            // redetermin if the current page has overflown
            hasOverflow = this.currentPage.hasOverflow();
        }

        if (
            hasOverflow ||
            pageBreakAfter ||
            (hasOverflow && avoidBreakInside)
        ) {
            // if the page is overflowing,
            // or we need to do a page break
            // or we should avoid breaking inside of this element
            // proceed

            // as the page has overflown or should be added to the next page
            // remove the node from the current page
            appendToNode.removeChild(node);

            if (
                TextNode.is(nodeToCopy) &&
                appendToNode.parentNode &&
                appendToNode.children.length == 0
            ) {
                // if we are a text-node and we were just removed
                // from the current page as the page has overflown,
                // it might happen that our parent is in example a p-tag
                // with no children.

                // if this is the case, also remove the parent
                const parent = appendToNode.parentElement;
                parent.removeChild(appendToNode);

                // and reassign the node future children should append to
                appendToNode = parent;
            }

            if (TextNode.is(nodeToCopy)) {
                // if we are a text node, it might be possible to break the text
                // into two parts. One part for the current page, and one for the next one.
                // Thats why we try to split the text node into two parts here
                TextSplitter.splitToPages(
                    nodeToCopy,
                    node,
                    this.currentPage,
                    appendToNode
                );
            }

            // if we arrived here, we know we will need another page
            // so create it
            const nextPage = this.createAndAddPage();
            // and save that all future html elements should be added to the new page
            appendToNode = nextPage.contentDom;
            this.currentPage = nextPage;

            // so now lets assume that the last node we worked on was some highly nested node
            // and we decided to create a new page. So appending the new node to the root of the
            // new page, might completely break the layout. Thats why we need to recreate the exact same
            // structure as we had before creating a new page.
            // Thats why we save each parent we traverse into the `wayToRoot` which describes the way from the
            // page root down to last node we worked on
            this.wayToRoot.forEach((wtr) => {
                // create the node
                const wayToRootNode = BaseNode.createFrom(wtr);
                // add node to new parent
                appendToNode.appendChild(wayToRootNode);
                // make the current the node every child should append to
                appendToNode = wayToRootNode;
            });

            // append the actual node to the new page
            appendToNode.appendChild(node);
        }

        // always save the way to the page-root into the `wayToRoot` for later reuse
        if (!root) this.wayToRoot.push(nodeToCopy);

        if (!skipChildren) {
            // iterate all child nodes and recursively call this function
            appendToNode = node;
            nodeToCopy.childNodes.forEach((child) => {
                appendToNode = this.walk(appendToNode, child);
            });
        }

        // remove the last element from `wayToRoot` as we have successfully processed it now
        if (!root) this.wayToRoot.pop();

        // as we are now going one node up in the dom-tree, return the parent of the current node
        return appendToNode.parentElement;
    }

    /**
     * Create a new page and append it to the dom
     * (optionally, save the last page)
     * @returns {Page} the next page
     */
    createAndAddPage() {
        if (this.currentPage) {
            this.currentPage.save();
        }

        const page = new Page(this.options, this.pages.length + 1);
        this.pages.push(page);

        this.generated.appendChild(page.dom);
        return page;
    }

    /**
     * Creates a new html node
     * @param {HTMLElement} nodeToCopy a node that should be recreated
     * @returns {HTMLElement} the newly created node
     */
    createNode(nodeToCopy) {
        let node = undefined;
        if (TextNode.is(nodeToCopy)) {
            // text
            node = TextNode.createFrom(nodeToCopy);
        } else if (CommentNode.is(nodeToCopy)) {
            // comment
            node = CommentNode.createFrom(nodeToCopy);
        } else {
            // all other nodes
            node = BaseNode.createFrom(nodeToCopy);
        }

        return node;
    }

    /**
     * Recursively creates the new node
     * @param {HTMLElement} appendTo the node the children should be appended to
     * @param {HTMLElement} node the node to append
     */
    createNodesRecursive(appendTo, node) {
        const newAppendTo = this.createNode(node);
        appendTo.appendChild(newAppendTo);

        node.childNodes.forEach((child) => {
            this.createNodesRecursive(newAppendTo, child);
        });
    }

    finalize() {
        this.pages.forEach((page) => {
            const dynamicComponentWrappers = page.contentDom.querySelectorAll(
                '.' + CLASS_NAME_DYNAMIC_COMPONENT
            );
            dynamicComponentWrappers.forEach((componentWrapper) => {
                const componentId = componentWrapper.getAttribute(
                    ATTRIBUTE_NAME_DYNAMIC_COMPONENT_ID
                );
                const componentInfo =
                    this.getComponentInfoFromOptions(componentId);

                new componentInfo.component({
                    target: componentWrapper,
                    props: {
                        ...componentInfo.props,
                        pages: this.pages,
                        allContent: this.generated,
                    },
                });
            });
        });
    }

    getComponentInfoFromOptions(componentId) {
        return this.options.dynamicComponents.find((c) => c.id === componentId);
    }
}
