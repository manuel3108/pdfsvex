<script>
    import { PageNumber } from '@pdfsvex/dynamic-page-number';
    import { chapters as chaptersFromStore } from './store';

    export let title = 'Table of Contents';
    export let chapters;
    export let depth = 0;
    export let indentWidthInPx = 15;
    export let startSizePt = 14;
    export let decrementSize = 1;

    let chaptersToShow;

    $: {
        if (!chapters) {
            chapters = $chaptersFromStore;
        }
        chaptersToShow = chapters.filter((c) => c.includeInTableOfContents);
    }

</script>

{#if title && depth == 0}
    <h1>{title}</h1>
{/if}
<div>
    {#each chaptersToShow as chapter}
        <div
            class:depth-0={depth == 0}
            style="padding-left: {indentWidthInPx * depth}px;"
        >
            <a
                href="#{chapter.key}"
                class:bold={depth == 0}
                class="page"
                style="font-size: {startSizePt}pt"
            >
                {#if chapter.numbered}
                    <span class="chapter-number">{chapter.number}</span>
                {/if}
                <span class="title">{chapter.name}</span>
                <span class="dots" />
                <span class="page-number">
                    <PageNumber pageById={chapter.key} />
                </span>
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

    .chapter-number {
        padding-right: 10px;
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

</style>
