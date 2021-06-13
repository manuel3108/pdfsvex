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

    @page {
        margin: 0;
    }

    :global(body) {
        margin: 0;
    }
    :global(.sheet) {
        margin: 0;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        page-break-after: always;
    }

    /** Paper sizes **/
    :global(body.A3 .sheet) {
        width: 297mm;
        height: 419mm;
    }
    :global(body.A3.landscape .sheet) {
        width: 420mm;
        height: 296mm;
    }
    :global(body.A4 .sheet) {
        width: 210mm;
        height: 296mm;
    }
    :global(body.A4.landscape .sheet) {
        width: 297mm;
        height: 209mm;
    }
    :global(body.A5 .sheet) {
        width: 148mm;
        height: 209mm;
    }
    :global(body.A5.landscape .sheet) {
        width: 210mm;
        height: 147mm;
    }
    :global(body.letter .sheet) {
        width: 216mm;
        height: 279mm;
    }
    :global(body.letter.landscape .sheet) {
        width: 280mm;
        height: 215mm;
    }
    :global(body.legal .sheet) {
        width: 216mm;
        height: 356mm;
    }
    :global(body.legal.landscape .sheet) {
        width: 357mm;
        height: 215mm;
    }

    /** For screen preview **/
    @media screen {
        :global(body) {
            background: #e0e0e0;
        }
        :global(.sheet) {
            background: white;
            box-shadow: 0 0.5mm 2mm rgba(0, 0, 0, 0.3);
            margin: 5mm auto;
        }
    }

    /** Fix for Chrome issue #273306 **/
    @media print {
        :global(body.A3.landscape) {
            width: 420mm;
        }
        :global(body.A3),
        :global(body.A4.landscape) {
            width: 297mm;
        }
        :global(body.A4),
        :global(body.A5.landscape) {
            width: 210mm;
        }
        :global(body.A5) {
            width: 148mm;
        }
        :global(body.letter),
        :global(body.legal) {
            width: 216mm;
        }
        :global(body.letter.landscape) {
            width: 280mm;
        }
        :global(body.legal.landscape) {
            width: 357mm;
        }
    }

</style>
