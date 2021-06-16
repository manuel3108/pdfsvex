<script>
    import { DynamicComponent } from '@pdfsvex/pdfsvex';
    import {
        SVELTE_REPL_COMPONENT_ID,
        ATTRIBUTE_NAME_COMPONENTS,
    } from './Constants';

    export let components;

    const attributes = {};
    attributes[ATTRIBUTE_NAME_COMPONENTS] = JSON.stringify(components);

</script>

<div>
    <DynamicComponent componentId={SVELTE_REPL_COMPONENT_ID} {attributes} />
</div>

<style>
    div {
        height: 600px;
    }

</style>
