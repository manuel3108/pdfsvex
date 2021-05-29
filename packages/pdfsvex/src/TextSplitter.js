import { ATTRIBUTE_NAME_DATA_CREATED_FROM_UID } from './Constants';
import BaseNode from './nodes/BaseNode';
import { Page } from './Page';

export default class TextSplitter {
    /**
     * Splits a text node into two pages. We try to fit as much content as possible
     * into the current page, and only create a new page if the current page has overflown.
     * @param {HTMLElement} nodeToCopy the node that should be recreated
     * @param {HTMLElement} node the node created from `nodeToCopy`, that will be appended to the next page
     * @param {Page} currentPage the page we are currently creating
     * @param {HTMLElement} appendToNode the node that all children should append to
     */
    static splitToPages(nodeToCopy, node, currentPage, appendToNode) {
        // split the contents of the words at whitespace
        const words = nodeToCopy.textContent.split(' ');

        // get or create the parent
        const parentNodeCurrentPage = TextSplitter.determineParent(
            currentPage,
            appendToNode,
            nodeToCopy
        );

        // create the text node for the current page
        const textNodeCurrentPage = BaseNode.createFrom(nodeToCopy);
        // append it to its parent
        parentNodeCurrentPage.appendChild(textNodeCurrentPage);
        // and make sure to clear its content
        textNodeCurrentPage.textContent = '';

        // now add as much words as possible to the current page
        const remainingWords = TextSplitter.addWordsUntilOverflow(
            words,
            textNodeCurrentPage,
            currentPage
        );

        // and add the remaining words to the next page
        node.textContent = remainingWords;
    }

    /**
     * Gets or creates the parent of the node
     * @param {Page} currentPage the page we are currently creating
     * @param {HTMLElement} appendToNode the node that all children should append to
     * @param {HTMLElement} nodeToCopy the node that should be recreated
     */
    static determineParent(currentPage, appendToNode, nodeToCopy) {
        // as we are starting to do some dom manipulation here, it might happen that
        // the expected parent is higher in the dom then we are.

        // so get the uid of the original parent
        const parentUid = nodeToCopy.parentElement.getAttribute(
            ATTRIBUTE_NAME_DATA_CREATED_FROM_UID
        );
        // and search it in the current page
        let parentNodeCurrentPage = currentPage.getNodeIfExists(parentUid);

        if (!parentNodeCurrentPage) {
            // if the node does not exist, create it
            parentNodeCurrentPage = BaseNode.createFrom(
                nodeToCopy.parentElement
            );
            // and append it to the page
            appendToNode.appendChild(parentNodeCurrentPage);
        }

        return parentNodeCurrentPage;
    }

    /**
     * Adds words to the current page, as long as it does not overflow
     * @param {string[]} words an array of words that were present in the text-node
     * @param {HTMLElement} textNodeCurrentPage the text-node of the current page, where we can append some text to
     * @param {Page} currentPage the current page we are currently working on
     * @returns {string} an string of words that needs to be appended to the next page, as the current one would overflow
     */
    static addWordsUntilOverflow(words, textNodeCurrentPage, currentPage) {
        let lastSuccessfullWord = -1;

        // iterate over each word
        for (let i = 0; i < words.length; i++) {
            const word = words[i];

            // and append it to the node
            textNodeCurrentPage.textContent += word + ' ';

            if (currentPage.hasOverflow()) {
                // if the page did overflow, this word is too much
                // so find the last occurrence of the current word in the node
                const lastWordIndex =
                    textNodeCurrentPage.textContent.lastIndexOf(word);
                // and remove it
                textNodeCurrentPage.textContent =
                    textNodeCurrentPage.textContent.substring(0, lastWordIndex);
                break;
            } else {
                // if we successfully added to page, save the index of this word for later reuse
                lastSuccessfullWord = i;
            }
        }

        // now return the remaining words that could not be appended to the current page, and join them with a whitespace
        return words.slice(lastSuccessfullWord + 1, words.length).join(' ');
    }
}
