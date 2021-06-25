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
    import { TableOfContentsDefault, ChapterDefault, ChapterReferenceDefault } from '@pdfsvex/table-of-contents@latest';
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
    <TableOfContentsDefault />

    <ChapterDefault key="introduction" name="Introduction" />
    <ChapterDefault key="motivation" name="Motivation" />
    <ChapterDefault key="getting-started" name="Getting started" />
    <ChapterDefault key="packages" name="Packages">
        <ChapterDefault key="packages-pdfsvex" name="@pdfsvex/pdfsvex">
            <ChapterReferenceDefault key="motivation" />
        </ChapterDefault>
        <ChapterDefault
            key="packages-table-of-contents"
            name="@pdfsvex/table-of-contents"
        >
        </ChapterDefault>
    </ChapterDefault>
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
