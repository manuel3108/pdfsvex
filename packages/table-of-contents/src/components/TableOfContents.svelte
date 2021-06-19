<script>
    import { PageNumber } from '@pdfsvex/dynamic-page-number';
    import { chapters as chaptersFromStore } from '../store';

    export let chapters;

    let chaptersToShow;

    $: {
        if (!chapters) {
            chapters = $chaptersFromStore;
        }
        chaptersToShow = chapters.filter((c) => c.includeInTableOfContents);
    }

</script>

<slot chapters={chaptersToShow}>
    <span>You need to supply content or use the default implementation</span>
</slot>
