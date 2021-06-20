<script>
    import SvelteRepl from '$lib/SvelteRepl.svelte';

    const components = [
        {
            id: 0,
            name: 'App',
            type: 'svelte',
            active: true,
            source: `<script>
    import Layout from './Layout.svelte';
    import { PdfDocument } from '@pdfsvex/pdfsvex';
    import { onMount } from 'svelte';

    let pdf;
    const options = {
        layout: Layout,
    };

    onMount(() => {
        pdf.pageNow();
    });

<\/script>

<PdfDocument bind:this={pdf} {options} style="A5">
    <h1>Welcome a pdfsvex</h1>
    <p>
        Visit <a href="https://pdfsvex.serret.dev">pdfsvex.serret.dev</a> to read the documentation!
    </p>
</PdfDocument>`,
        },
        {
            id: 1,
            name: 'Layout',
            active: false,
            type: 'svelte',
            source: `<div class="page-content">
</div>`,
        },
    ];

</script>

<SvelteRepl {components} />
