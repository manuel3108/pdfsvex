import { ATTRIBUTE_NAME_ID, ATTRIBUTE_NAME_SAVED_ID } from '../Constants';

export default class BaseNode {
    /**
     * Checks if a node is a node
     * @param {HTMLElement} node node to determine the type of
     * @returns {boolean} true if the node is of specified type
     */
    static is(node) {
        return true;
    }

    /**
     * Creates a new node based on another node
     * @param {HTMLElement} node node to recreate
     * @returns {HTMLElement} created node with the copied content
     */
    static createFrom(node) {
        const createdNode = document.createElement(node.tagName);
        // copy all attributes to the new created node
        // these attributes can contain classnames or style informations
        if (node.attributes) {
            const attributes = Array.prototype.slice.call(node.attributes);
            let attribute;
            while ((attribute = attributes.pop())) {
                createdNode.setAttribute(
                    attribute.nodeName,
                    attribute.nodeValue
                );
            }

            if (createdNode.hasAttribute(ATTRIBUTE_NAME_SAVED_ID)) {
                BaseNode.restoreId(createdNode);
            }
        }
        return createdNode;
    }

    /**
     * Restores the id from a saved id in order to avoid duplicated ids in the document tree
     * @param {HTMLElement} node to restore the id from
     */
    static restoreId(node) {
        const idValue = node.getAttribute(ATTRIBUTE_NAME_SAVED_ID);
        node.removeAttribute(ATTRIBUTE_NAME_SAVED_ID);
        node.setAttribute(ATTRIBUTE_NAME_ID, idValue);
    }

    /**
     * checks if the node has the page-break-inside property set to avoid
     * @param {HTMLElement} node node to check
     * @returns {boolean} result of the check
     */
    static hasPageBreakInsideAvoid(node) {
        const computedStyles = window.getComputedStyle(node);
        return computedStyles.getPropertyValue('page-break-inside') === 'avoid';
    }

    /**
     * checks if the node has the page-break-after property set to always
     * @param {HTMLElement} node node to check
     * @returns {boolean} result of the check
     */
    static hasPageBreakAfterAlways(node) {
        const computedStyles = window.getComputedStyle(node);
        return computedStyles.getPropertyValue('page-break-after') === 'always';
    }
}
