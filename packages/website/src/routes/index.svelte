<script>
    import Layout from '$lib/Layout.svelte';
    import Logo from '$lib/Logo.svelte';
    import PackageShields from '$lib/PackageShields.svelte';
    import { PdfDocument } from '@pdfsvex/pdfsvex';
    import { registerHotModuleReloader } from '@pdfsvex/svelte-hmr-support';
    import {
        TableOfContentsDefault,
        ChapterDefault,
        ChapterReferenceDefault,
    } from '@pdfsvex/table-of-contents';
    import {
        PageNumberResolver,
        PAGE_NUMBER_COMPONENT_ID,
    } from '@pdfsvex/dynamic-page-number';
    import { onMount } from 'svelte';
    import { SVELTE_REPL_COMPONENT_ID } from '$lib/Constants';
    import SvelteReplResolver from '$lib/SvelteReplResolver.svelte';
    import Main from '$lib/pdfsvex/PdfsvexMain.svelte';
    import TableOfContentsMain from '$lib/table-of-contents/TableOfContentsMain.svelte';
    import '../global.css';

    let pdf;

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
        registerHotModuleReloader(pdf);
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

    <TableOfContentsDefault />

    <ChapterDefault key="introduction" name="Introduction" />
    <ChapterDefault key="motivation" name="Motivation" />
    <ChapterDefault key="getting-started" name="Getting started" />
    <ChapterDefault key="packages" name="Packages">
        <ChapterDefault key="packages-pdfsvex" name="@pdfsvex/pdfsvex">
            <ChapterReferenceDefault key="motivation" />
            <Main />
        </ChapterDefault>
        <ChapterDefault
            key="packages-table-of-contents"
            name="@pdfsvex/table-of-contents"
        >
            <TableOfContentsMain />
        </ChapterDefault>
    </ChapterDefault>
</PdfDocument>

<style>
</style>
