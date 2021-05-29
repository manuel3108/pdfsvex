<script>
    import {
        CLASS_NAME_PAGE,
        ATTRIBUTE_NAME_PAGE_NUMBER,
    } from '@pdfsvex/pdfsvex';
    import { DATA_ATTRIBUTE_PAGE_BY_ID } from './Constants';

    export let element;
    export let pages;
    export let allContent;

    const idToSearch = element.getAttribute(DATA_ATTRIBUTE_PAGE_BY_ID);
    const searchedElement = document.getElementById(idToSearch);
    const pageElement = searchedElement.closest(`.${CLASS_NAME_PAGE}`);
    const pageNumber = pageElement.getAttribute(ATTRIBUTE_NAME_PAGE_NUMBER);

</script>

{pageNumber}
