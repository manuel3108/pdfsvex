<script>
    import { chapters } from '../store';

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

<slot {chapter}>
    <span>You need to supply content or use the default implementation</span>
</slot>
