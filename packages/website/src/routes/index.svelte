<script>
    import Layout from '$lib/Layout.svelte';
    import Logo from '$lib/Logo.svelte';
    import PackageShields from '$lib/PackageShields.svelte';
    import SvelteRepl from '$lib/SvelteRepl.svelte';
    import { PdfDocument, DynamicComponent } from '@pdfsvex/pdfsvex';
    import { TableOfContents, Chapter } from '@pdfsvex/table-of-contents';
    import {
        PageNumberResolver,
        PAGE_NUMBER_COMPONENT_ID,
    } from '@pdfsvex/dynamic-page-number';
    import { onMount } from 'svelte';
    import AlternateSvelteRepl from '@pdfsvex/alternate-svelte-repl';
    import { SVELTE_REPL_COMPONENT_ID } from '$lib/Constants';
    import SvelteReplResolver from '$lib/SvelteReplResolver.svelte';

    let pdf;
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

    const options = {
        layout: Layout,
        dynamicComponents: [
            {
                id: PAGE_NUMBER_COMPONENT_ID,
                component: PageNumberResolver,
            },
            {
                id: SVELTE_REPL_COMPONENT_ID,
                component: SvelteReplResolver,
            },
        ],
    };

    onMount(() => {
        pdf.pageNow();
    });

</script>

<PdfDocument bind:this={pdf} {options} landscape={false}>
    <SvelteRepl {components} />

    <div style="page-break-after: always;" />
    <Logo />
    <h1>PDF generation, made easy</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>

    <PackageShields packageName="@pdfsvex/pdfsvex" />

    <TableOfContents />

    <Chapter key="introduction" name="Introduction" />
    <Chapter key="motivation" name="Motivation" />
    <Chapter key="getting-started" name="Getting started" />
    <Chapter key="packages" name="Packages">
        <Chapter key="packages-pdfsvex" name="@pdfsvex/pdfsvex" />
        <Chapter
            key="packages-table-of-contents"
            name="@pdfsvex/table-of-contents"
        />
        <Chapter
            key="packages-table-of-contents2"
            name="@pdfsvex/table-of-contents"
        />
    </Chapter>
</PdfDocument>

<style>
</style>
