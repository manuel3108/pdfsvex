import { Page } from './Page';
import { uid } from 'uid';
import TextNode from './nodes/TextNode';
import CommentNode from './nodes/CommentNode';
import BaseNode from './nodes/BaseNode';
import TextSplitter from './TextSplitter';

export class PagerNew {
    constructor(content, generated, options) {
        this.generated = generated;
        this.options = options;

        this.wayToRoot = [];
        this.pages = [];

        generated.innerHTML = '';

        this.currentPage = this.createAndAddPage();
        const appendToNode = this.currentPage.contentDom;

        this.walk(appendToNode, content, true);
        content.innerHTML = '';

        this.finalize();
    }

    createNodesRecursive(appendTo, node) {
        const newAppendTo = this.createNode(node);
        appendTo.appendChild(newAppendTo);

        node.childNodes.forEach((child) => {
            this.createNodesRecursive(newAppendTo, child);
        });
    }

    walk(appendToNode, nodeToCopy, root = false) {
        if (!TextNode.is(nodeToCopy) && !CommentNode.is(nodeToCopy)) {
            nodeToCopy.setAttribute('data-uid', uid());
        }
        let node = undefined;
        if (root) {
            // if we are the root, just append to this node
            node = appendToNode;
        } else {
            // if we are a child of the root node
            // create the child with all according attributes
            node = this.createNode(nodeToCopy);
            appendToNode.appendChild(node);
        }
        let avoidBreakInside = false;
        let pageBreakAfter = false;
        if (!TextNode.is(nodeToCopy) && !CommentNode.is(nodeToCopy)) {
            const computedStyles = window.getComputedStyle(node);
            avoidBreakInside =
                computedStyles.getPropertyValue('page-break-inside') ===
                'avoid';
            pageBreakAfter =
                computedStyles.getPropertyValue('page-break-after') ===
                'always';
        }
        let hasOverflow = this.currentPage.hasOverflow();
        let skipChildren = false;
        if (avoidBreakInside) {
            nodeToCopy.childNodes.forEach((child) => {
                this.createNodesRecursive(node, child);
            });
            skipChildren = true;
            hasOverflow = this.currentPage.hasOverflow();
        }
        if (
            hasOverflow ||
            pageBreakAfter ||
            (hasOverflow && avoidBreakInside)
        ) {
            appendToNode.removeChild(node);
            if (
                TextNode.is(nodeToCopy) &&
                appendToNode.parentNode &&
                appendToNode.children.length == 0
            ) {
                const parent = appendToNode.parentElement;
                parent.removeChild(appendToNode);
                appendToNode = parent;
            }
            if (TextNode.is(nodeToCopy)) {
                TextSplitter.splitToPages(
                    nodeToCopy,
                    node,
                    this.currentPage,
                    appendToNode
                );
            }
            this.currentPage = this.createAndAddPage();
            appendToNode = this.currentPage.contentDom;

            this.wayToRoot.forEach((wtr) => {
                const wayToRootNode = BaseNode.createFrom(wtr);
                // add to new parent
                appendToNode.appendChild(wayToRootNode);
                // make the current parent
                appendToNode = wayToRootNode;
            });
            // add the actual node
            appendToNode.appendChild(node);
        }
        // go one deeper
        if (!root) this.wayToRoot.push(nodeToCopy);
        // iterate childs
        if (!skipChildren) {
            appendToNode = node;
            nodeToCopy.childNodes.forEach((child) => {
                appendToNode = this.walk(appendToNode, child);
            });
        }
        // remove one
        if (!root) this.wayToRoot.pop();
        return appendToNode.parentElement;
    }

    createAndAddPage() {
        if (this.currentPage) {
            this.currentPage.save();
        }

        const page = new Page(this.options, this.pages.length + 1);
        this.pages.push(page);

        this.generated.appendChild(page.dom);
        return page;
    }

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

    finalize() {
        this.pages.forEach((page) => {
            const dynamicComponentWrappers =
                page.contentDom.querySelectorAll('.dynamic-component');
            dynamicComponentWrappers.forEach((componentWrapper) => {
                const componentId = componentWrapper.getAttribute('data-id');
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
