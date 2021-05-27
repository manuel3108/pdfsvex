<script>
    import { chapters as chaptersFromStore } from './store';

    export let title;
    export let pages;
    export let allContent;
    export let chapters;
    export let depth = 1;
    export let indentWidthInPx = 20;
    export let startSizePt = 14;
    export let decrementSize = 1;

    if (!chapters) {
        chapters = $chaptersFromStore;
    }

    $: chaptersToShow = chapters.filter((c) => c.includeInTableOfContents);

    function findPageNumber(chapterId) {
        // console.log(allContent.querySelector('#' + chapterId));
        const pageNumber = document
            .getElementById(chapterId)
            .closest('.sheet')
            .getAttribute('data-page-number');
        return pageNumber;
    }

</script>

{#if title}
    <h1>{title}</h1>
{/if}
<div>
    {#each chaptersToShow as chapter}
        <div class:depth-0={depth == 0}>
            <a
                href="#{chapter.key}"
                class:bold={depth == 0}
                class="page"
                style="padding-left: {indentWidthInPx * depth}px;
                    font-size: {startSizePt}pt"
            >
                <span class="chapter-number">{chapter.number}</span>
                <span class="title">{chapter.name}</span>
                <span class="dots" />
                <span class="page-number" data-id="#{chapter.key}"
                    >{findPageNumber(chapter.key)}</span
                >
            </a>

            {#if chapter.children.length > 0}
                <svelte:self
                    chapters={chapter.children}
                    depth={depth + 1}
                    startSizePt={startSizePt - decrementSize}
                    decrementSize
                />
            {/if}
        </div>
    {/each}
</div>

<style>
    a {
        color: black;
    }

    .bold {
        font-weight: bold;
    }

    .depth-0 {
        margin-bottom: 15px;
    }

    .title {
        padding-left: 10px;
    }

    .page {
        display: flex;
        width: 100%;
        margin-bottom: 5px;
    }

    .page .chapter-number,
    .page .title,
    .page .dots {
        flex: 1 0 auto;
    }

    .page .dots {
        flex: 0 1 auto;
        overflow: hidden;
    }

    .page .dots::before {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: clip;
        content: '. . . . . . . . . . . . . . . . . . . . '
            '. . . . . . . . . . . . . . . . . . . . '
            '. . . . . . . . . . . . . . . . . . . . '
            '. . . . . . . . . . . . . . . . . . . . ';
    }

    .page-number::after {
        float: right;
        content: target-counter(attr(data-id), page);
    }

</style>
