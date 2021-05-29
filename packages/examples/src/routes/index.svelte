<script>
    import { PdfDocument, DynamicComponent } from '@pdfsvex/pdfsvex';
    import { TableOfContents, Chapter } from '@pdfsvex/table-of-contents';
    import {
        PageNumber,
        PageNumberResolver,
        PAGE_NUMBER_COMPONENT_ID,
    } from '@pdfsvex/dynamic-page-number';
    import Layout from '$lib/Layout.svelte';

    const options = {
        layout: Layout,
        dynamicComponents: [
            // {
            //     id: 'table-of-contents',
            //     component: TableOfContents,
            //     props: {
            //         title: 'Inhaltsverzeichnis',
            //     },
            // },

            {
                id: PAGE_NUMBER_COMPONENT_ID,
                component: PageNumberResolver,
                props: {},
            },
        ],
    };

</script>

<PdfDocument {options}>
    <PageNumber pageById="chapter-asd2" />
    <h1>Welcome to SvelteKit</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
        documentation Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a>
        to read the documentation Visit
        <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>

    <DynamicComponent id="table-of-contents" />

    <Chapter key="asd" name="hello">
        some text content

        <Chapter key="asd2" name="hello2">more content</Chapter>
    </Chapter>

    <DynamicComponent id="table-of-contents" />

    <!-- <img
        style="width: 100%"
        src="http://manuel-serret.bplaced.de/Gleisbelegung/img/1.jpg"
        alt=""
    />
    <img
        style="width: 100%"
        src="http://manuel-serret.bplaced.de/Gleisbelegung/img/1.jpg"
        alt=""
    /> -->
</PdfDocument>
