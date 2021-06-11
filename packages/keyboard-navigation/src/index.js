import { CLASS_NAME_PAGE } from '@pdfsvex/pdfsvex';

/**
 * Handles all keyboard events to navigate to the previous and next page with the arrow keys on the keyboard
 * @param {KeyboardEvent} event fired event
 */
export function handleKeyboardNavigation(event) {
    // find all pages
    const pages = document.querySelectorAll(`.${CLASS_NAME_PAGE}`);

    let previousPage;
    let nextPage;

    // iterate over all found pages
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        // check if the page is currently visible in the browser
        if (isElementVisible(page)) {
            // if so determine the previous and the next page (if available)
            if (pages.length > i + 1) {
                nextPage = pages[i + 1];
            }

            if (i - 1 >= 0) {
                previousPage = pages[i - 1];
            }

            // and end the loop, as we found everything we need
            break;
        }
    }

    if (event.key == 'ArrowLeft') {
        // goto previous page
        if (previousPage) {
            previousPage.scrollIntoView();
        }
    } else if (event.key == 'ArrowRight') {
        // goto next page
        if (nextPage) {
            nextPage.scrollIntoView();
        }
    }
}

/**
 * Checks if a element is inside the viewport of the browser
 * @param {HTMLElement} element html element to be checked
 * @returns {boolean}
 */
function isElementVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();
    const clientHeight =
        window.innerHeight || document.documentElement.clientHeight;

    return (top > 0 || bottom > 0) && top < clientHeight;
}
