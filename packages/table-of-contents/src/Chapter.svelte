<script>
    import { chapters } from './store';
    import { getContext, setContext } from 'svelte';

    export let name;
    export let includeInTableOfContents = true;
    export let key;
    export let depth = 1;

    key = 'chapter-' + key;

    let chapter = {
        name,
        key,
        includeInTableOfContents,
        children: [],
        depth,
    };

    if (getContext('parent') && includeInTableOfContents) {
        // we are a child, add us to the parent
        const { getParent } = getContext('parent');
        const parent = getParent();

        chapter.depth = parent.depth + 1;
        chapter.number = parent.number + '.' + (parent.children.length + 1);

        parent.children.push(chapter);

        setContext('parent', {
            getParent: () => chapter,
        });

        $chapters = $chapters;
    } else if (includeInTableOfContents) {
        // we are the parent
        setContext('parent', {
            getParent: () => chapter,
        });

        chapter.number = $chapters.length + 1;

        $chapters.push(chapter);
        $chapters = $chapters;
    }

</script>

{#if includeInTableOfContents}
    <h1
        id={key}
        class:smaller={chapter.depth == 2}
        class:smallest={chapter.depth == 3}
    >
        <span>{chapter.number}</span>
        <span class="title">{name}</span>
    </h1>
{:else}
    <h1
        id={key}
        class:smaller={chapter.depth == 2}
        class:smallest={chapter.depth == 3}
    >
        {name}
    </h1>
{/if}

<div class="chapter-content">
    <slot>fallback</slot>
</div>

<style>
    .title {
        padding-left: 20px;
    }

    .smaller {
        font-size: 26px;
        font-weight: normal;
    }

    .smallest {
        font-size: 22px;
        font-weight: normal;
    }

</style>
