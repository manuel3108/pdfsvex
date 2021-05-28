import { Page } from './Page';
import { uid } from 'uid';

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
        if (
            nodeToCopy.nodeType !== nodeToCopy.TEXT_NODE &&
            nodeToCopy.nodeType !== nodeToCopy.COMMENT_NODE
        ) {
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
        if (
            nodeToCopy.nodeType !== nodeToCopy.TEXT_NODE &&
            nodeToCopy.nodeType !== nodeToCopy.COMMENT_NODE
        ) {
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
                nodeToCopy.nodeType === nodeToCopy.TEXT_NODE &&
                appendToNode.parentNode &&
                appendToNode.children.length == 0
            ) {
                const parent = appendToNode.parentElement;
                parent.removeChild(appendToNode);
                appendToNode = parent;
            }

            if (nodeToCopy.nodeType === nodeToCopy.TEXT_NODE) {
                const words = nodeToCopy.textContent.split(' ');

                // check if the parent already exists on this page
                let parentNodeCurrentPage = this.getNodeIfExists(
                    nodeToCopy.parentElement.getAttribute('data-uid')
                );

                if (!parentNodeCurrentPage) {
                    // if not create it
                    parentNodeCurrentPage = this.createNode(
                        nodeToCopy.parentElement
                    );

                    // and append it to the page
                    appendToNode.appendChild(parentNodeCurrentPage);
                }

                const textNodeCurrentPage = this.createNode(nodeToCopy);
                parentNodeCurrentPage.appendChild(textNodeCurrentPage);

                textNodeCurrentPage.textContent = '';
                let lastSuccessfullWord = -1;

                for (let i = 0; i < words.length; i++) {
                    const word = words[i];

                    textNodeCurrentPage.textContent += word + ' ';

                    if (this.currentPage.hasOverflow()) {
                        const lastWordIndex =
                            textNodeCurrentPage.textContent.lastIndexOf(word);
                        textNodeCurrentPage.textContent =
                            textNodeCurrentPage.textContent.substring(
                                0,
                                lastWordIndex
                            );
                        break;
                    } else {
                        lastSuccessfullWord = i;
                    }
                }

                node.textContent = words
                    .slice(lastSuccessfullWord + 1, words.length)
                    .join(' ');
            }

            this.currentPage = this.createAndAddPage();
            appendToNode = this.currentPage.contentDom;

            this.wayToRoot.forEach((wtr) => {
                const wayToRootNode = this.createNode(wtr);

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
        if (nodeToCopy.nodeType === nodeToCopy.TEXT_NODE) {
            // text
            node = document.createTextNode(nodeToCopy.textContent);
        } else if (nodeToCopy.nodeType === nodeToCopy.COMMENT_NODE) {
            // comment
            node = document.createComment(nodeToCopy.data);
        } else {
            node = document.createElement(nodeToCopy.tagName);
            // copy all attributes such as classnames or style informations
            if (nodeToCopy.attributes) {
                const attributes = Array.prototype.slice.call(
                    nodeToCopy.attributes
                );
                let attr;
                while ((attr = attributes.pop())) {
                    node.setAttribute(attr.nodeName, attr.nodeValue);
                }
            }
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

    getNodeIfExists(dataUid) {
        return this.currentPage.contentDom.querySelector(
            `[data-uid="${dataUid}"]`
        );
    }

    getComponentInfoFromOptions(componentId) {
        return this.options.dynamicComponents.find((c) => c.id === componentId);
    }
}
