<script>
    import { Pager } from '../Pager';
    import { onMount } from 'svelte';
    import 'paper-css/paper.css';

    export let options;
    export let style = 'A4';
    export let landscape = false;

    let content;
    let generated;
    let pager;

    onMount(() => {
        document.body.classList.add(style);
        if (landscape) {
            document.body.classList.add('landscape');
        }

        pager = new Pager(content, generated, options);
    });

    export function pageNow() {
        pager.pageNow();
    }

</script>

<div bind:this={content} class="content">
    <slot>This is a slot component, you need to provide the content</slot>
</div>
<div bind:this={generated} class="generated">Loading...</div>

<style>
    .content {
        display: none;
    }

    @media screen {
        .generated {
            margin: auto;
        }

        :global(.sheet) {
            margin: 0.2in auto;
        }
    }

</style>
