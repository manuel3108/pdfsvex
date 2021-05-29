import BaseNode from './BaseNode';

export default class TextNode {
    /**
     * Checks if a node is a text node
     * @param {HTMLElement} node node to determine the type of
     * @returns {boolean} true if the node is of specified type
     */
    static is(node) {
        return node.nodeType === Node.TEXT_NODE;
    }

    /**
     * Creates a new text node based on another node
     * @param {HTMLElement} node node to recreate
     * @returns {HTMLElement} created node with the copied content
     */
    static createFrom(node) {
        return document.createTextNode(node.textContent);
    }
}
