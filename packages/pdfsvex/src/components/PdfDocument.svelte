<script>
    import { Pager } from '../Pager';
    import { onMount } from 'svelte';

    export let options;
    export let style = 'A4';
    export let landscape = false;
    export let present = false;

    let content;
    let generated;
    let pager;

    onMount(() => {
        pager = new Pager(content, generated, options);
    });

    export function pageNow() {
        pager.pageNow();

        if (present) {
            // scale on page to the screen height
            const windowHeight = window.innerHeight;
            const pageHeight = generated.querySelector('.sheet').clientHeight;
            const zoom = windowHeight / pageHeight;
            generated.style.transform = 'scale(' + zoom + ', ' + zoom + ')';
        }
    }
</script>

<div bind:this={content} class="content">
    <slot>This is a slot component, you need to provide the content</slot>
</div>
<div bind:this={generated} class="generated {style}" class:landscape>
    Loading...
</div>

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
    :global(.generated.A3 .sheet) {
        width: 297mm;
        height: 419mm;
    }
    :global(.generated.A3.landscape .sheet) {
        width: 420mm;
        height: 296mm;
    }
    :global(.generated.A4 .sheet) {
        width: 210mm;
        height: 296mm;
    }
    :global(.generated.A4.landscape .sheet) {
        width: 297mm;
        height: 209mm;
    }
    :global(.generated.A5 .sheet) {
        width: 148mm;
        height: 209mm;
    }
    :global(.generated.A5.landscape .sheet) {
        width: 210mm;
        height: 147mm;
    }
    :global(.generated.letter .sheet) {
        width: 216mm;
        height: 279mm;
    }
    :global(.generated.letter.landscape .sheet) {
        width: 280mm;
        height: 215mm;
    }
    :global(.generated.legal .sheet) {
        width: 216mm;
        height: 356mm;
    }
    :global(.generated.legal.landscape .sheet) {
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
        :global(.generated.A3.landscape) {
            width: 420mm;
        }
        :global(.generated.A3),
        :global(.generated.A4.landscape) {
            width: 297mm;
        }
        :global(.generated.A4),
        :global(.generated.A5.landscape) {
            width: 210mm;
        }
        :global(.generated.A5) {
            width: 148mm;
        }
        :global(.generated.letter),
        :global(.generated.legal) {
            width: 216mm;
        }
        :global(.generated.letter.landscape) {
            width: 280mm;
        }
        :global(.generated.legal.landscape) {
            width: 357mm;
        }
    }
</style>
