<script>
    import { PdfDocument, DynamicComponent } from '@pdfsvex/pdfsvex';
    import { TableOfContents, Chapter } from '@pdfsvex/table-of-contents';
    import {
        PageNumberResolver,
        PAGE_NUMBER_COMPONENT_ID,
    } from '@pdfsvex/dynamic-page-number';
    import Layout from '$lib/Layout.svelte';
    import * as generator from 'decimal-to-roman-converter';
    import PageBreak from '$lib/PageBreak.svelte';
    import { onMount } from 'svelte';

    let pdf;

    const options = {
        layout: Layout,
        dynamicComponents: [
            {
                id: PAGE_NUMBER_COMPONENT_ID,
                component: PageNumberResolver,
                props: {
                    pageTransformer: (page) => generator(page),
                },
            },
        ],
    };

    onMount(() => {
        pdf.pageNow();
    });

</script>

<body on: />

<PdfDocument bind:this={pdf} {options}>
    <TableOfContents />

    <h1>Welcome to SvelteKit</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
        documentation Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
    </p>

    <PageBreak />

    <Chapter key="asd" name="hello">
        some text content

        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>

        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>

        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>

        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>

        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>

        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>

        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>

        <Chapter key="asd2" name="hello2">more content</Chapter>
        <Chapter key="asd2" name="hello2">more content</Chapter>
        <Chapter key="asd2" name="hello2">more content</Chapter>
    </Chapter>
    <Chapter numbered={false} key="asd23" name="hello2">more content</Chapter>
    <Chapter numbered={false} key="asd24" name="hello2">more content</Chapter>
    <Chapter key="asd2" name="hello2">more content</Chapter>
    <Chapter key="asd2" name="hello2">more content</Chapter>

    <div style="page-break-inside: avoid;">
        <img
            style="width: 100%"
            src="http://manuel-serret.bplaced.de/Gleisbelegung/img/1.jpg"
            alt=""
        />
        <img
            style="width: 100%"
            src="http://manuel-serret.bplaced.de/Gleisbelegung/img/1.jpg"
            alt=""
        />
    </div>
</PdfDocument>
