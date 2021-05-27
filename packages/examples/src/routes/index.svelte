<script>
    import PdfDocument from '@pdfsvex/pdfsvex';
    import Layout from '$lib/Layout.svelte';

    const options = {
        layout: Layout,
    };

</script>

<PdfDocument {options}>
    <h1>Welcome to SvelteKit</h1>
    <p>
        Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
    </p>
</PdfDocument>
