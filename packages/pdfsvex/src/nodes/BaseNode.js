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
        }
        return createdNode;
    }

    /**
     *
     * @param {HTMLElement[]} wayToRoot
     * @param {HTMLElement} appendToNode
     * @param {HTMLElement} node
     * @returns {HTMLElement} appendToNode
     */
    // static appendToNewPage(wayToRoot, appendToNode, node) {
    //     wayToRoot.forEach((wtr) => {
    //         const wayToRootNode = BaseNode.createFrom(wtr);

    //         // add to new parent
    //         appendToNode.appendChild(wayToRootNode);

    //         // make the current parent
    //         appendToNode = wayToRootNode;
    //     });

    //     // add the actual node
    //     appendToNode.appendChild(node);

    //     return appendToNode;
    // }
}
