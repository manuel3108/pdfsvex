<script>
    import Layout from '$lib/Layout.svelte';
    import Logo from '$lib/Logo.svelte';
    import PackageShields from '$lib/PackageShields.svelte';
    import SvelteRepl from '$lib/SvelteRepl.svelte';
    import { PdfDocument } from '@pdfsvex/pdfsvex';
    import { TableOfContents, Chapter } from '@pdfsvex/table-of-contents';
    import {
        PageNumberResolver,
        PAGE_NUMBER_COMPONENT_ID,
    } from '@pdfsvex/dynamic-page-number';
    import { onMount } from 'svelte';

    let pdf;
    const options = {
        layout: Layout,
        dynamicComponents: [
            {
                id: PAGE_NUMBER_COMPONENT_ID,
                component: PageNumberResolver,
            },
        ],
    };

    onMount(() => {
        pdf.pageNow();
    });

</script>

<PdfDocument bind:this={pdf} {options} landscape={false}>
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
    </Chapter>

    <div style="page-break-after: always;" />

    <SvelteRepl
        src="https://svelte.dev/repl/acf4f1f894ba4787a959a5e65f790484?version=3.38.2"
        title="Getting started"
    />
</PdfDocument>

<style>
    h1 {
        text-align: center;
    }

</style>
