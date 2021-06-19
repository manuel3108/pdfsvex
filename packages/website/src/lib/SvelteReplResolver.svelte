<script>
    import AlternateSvelteRepl from '@pdfsvex/alternate-svelte-repl';
    import { onMount } from 'svelte';
    import { ATTRIBUTE_NAME_COMPONENTS } from './Constants';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/theme/monokai.css';

    export let element;
    export let pages;
    export let allContent;

    let components;

    onMount(() => {
        components = JSON.parse(
            element.getAttribute(ATTRIBUTE_NAME_COMPONENTS)
        );
    });

</script>

<AlternateSvelteRepl {components} />
