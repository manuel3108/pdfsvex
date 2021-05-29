import BaseNode from './BaseNode';

export default class CommentNode {
    /**
     * Checks if a node is a comment node
     * @param {HTMLElement} node node to determine the type of
     * @returns {boolean} true if the node is of specified type
     */
    static is(node) {
        return node.nodeType === Node.COMMENT_NODE;
    }

    /**
     * Creates a new comment node based on another node
     * @param {HTMLElement} node node to recreate
     * @returns {HTMLElement} created node with the copied content
     */
    static createFrom(node) {
        return document.createComment(node.data);
    }
}
