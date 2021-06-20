<script>
    import Chapter from '../Chapter.svelte';

    export let key;
    export let name;
    export let includeInTableOfContents = true;
    export let numbered = true;

</script>

<Chapter {key} {name} {numbered} {includeInTableOfContents}>
    <svelte:fragment slot="title" let:chapter>
        <h1
            id={chapter.key}
            class:smaller={chapter.depth == 2}
            class:smallest={chapter.depth == 3}
        >
            {#if chapter.numbered}
                <span class="number">{chapter.number}</span>
            {/if}
            <span class="title">{chapter.name}</span>
        </h1>
    </svelte:fragment>

    <svelte:fragment slot="content">
        <slot>
            <span>You need to supply content</span>
        </slot>
    </svelte:fragment>
</Chapter>

<style>
    .number {
        padding-right: 20px;
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
