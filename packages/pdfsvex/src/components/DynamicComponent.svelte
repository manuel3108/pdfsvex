<script>
    import {
        CLASS_NAME_DYNAMIC_COMPONENT,
        ATTRIBUTE_NAME_DYNAMIC_COMPONENT_ID,
    } from '../Constants';

    export let componentId;
    export let attributes = {};

    attributes[ATTRIBUTE_NAME_DYNAMIC_COMPONENT_ID] = componentId;

</script>

<span class={CLASS_NAME_DYNAMIC_COMPONENT} {...attributes} />
