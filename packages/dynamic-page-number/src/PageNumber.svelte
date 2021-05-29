<script>
    import { DynamicComponent } from '@pdfsvex/pdfsvex';
    import {
        COMPONENT_IDENTIFIER,
        DATA_ATTRIBUTE_PAGE_BY_ID,
    } from './Constants';

    export let pageById;

    const attributes = {};
    attributes[DATA_ATTRIBUTE_PAGE_BY_ID] = pageById;

</script>

<DynamicComponent componentId={COMPONENT_IDENTIFIER} {attributes} />
