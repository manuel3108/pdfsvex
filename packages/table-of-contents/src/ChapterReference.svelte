<script>
    import { chapters } from './store';

    export let key;

    key = 'chapter-' + key;

    let chapter;
    let allChapters = [];

    $: {
        if ($chapters) {
            getChapters($chapters);

            // find the chapter with the key in the array
            chapter = allChapters.find((c) => c.key === key);
        }
    }

    // get all chapters recursivly to include child chapters
    function getChapters(_chapters) {
        allChapters.push(..._chapters);
        _chapters.forEach((c) => {
            if (c.children.length > 0) {
                getChapters(c.children);
            }
        });
    }

</script>

{#if chapter}
    <a href="#{chapter.key}">{chapter.name}</a>
{:else}
    <span>chapter "{key}" not found</span>
{/if}

<style>
    span {
        color: red;
    }

</style>
