<script>
    import {
        CLASS_NAME_PAGE,
        ATTRIBUTE_NAME_PAGE_NUMBER,
    } from '@pdfsvex/pdfsvex';
    import { DATA_ATTRIBUTE_PAGE_BY_ID } from './Constants';

    export let element;
    export let pages;
    export let allContent;
    export let pageTransformer = undefined; // make it optional

    const idToSearch = element.getAttribute(DATA_ATTRIBUTE_PAGE_BY_ID);
    const searchedElement = document.getElementById(idToSearch);
    const pageElement = searchedElement.closest(`.${CLASS_NAME_PAGE}`);
    let pageNumber = pageElement.getAttribute(ATTRIBUTE_NAME_PAGE_NUMBER);
    pageNumber = parseInt(pageNumber);

    if (pageTransformer) {
        pageNumber = pageTransformer(pageNumber);
    }

</script>

{pageNumber}
