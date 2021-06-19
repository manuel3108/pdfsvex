<script>
    import ChapterReference from '../ChapterReference.svelte';

    export let key;

</script>

<ChapterReference {key} let:chapter>
    {#if chapter}
        <a href="#{chapter.key}">{chapter.name}</a>
    {:else}
        <span>chapter "{key}" not found</span>
    {/if}
</ChapterReference>

<style>
    span {
        color: red;
    }

</style>
