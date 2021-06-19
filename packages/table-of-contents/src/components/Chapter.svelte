<script>
    import { chapters } from '../store';
    import { getContext, setContext } from 'svelte';

    export let name;
    export let includeInTableOfContents = true;
    export let key;
    export let depth = 1;
    export let numbered = true;

    key = 'chapter-' + key;

    let chapter = {
        name,
        key,
        includeInTableOfContents,
        children: [],
        depth,
        numbered,
    };

    if (getContext('parent')) {
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
    } else {
        // we are the parent
        setContext('parent', {
            getParent: () => chapter,
        });

        if (numbered) {
            const present = $chapters.filter((c) => c.key === chapter.key)[0];
            if (present) {
                chapter.number = present.number;
            } else {
                chapter.number = getNumberedChapters($chapters).length + 1;
            }
        } else {
            chapter.number = '';
        }

        if ($chapters.filter((c) => c.key === chapter.key).length === 0) {
            $chapters.push(chapter);
            $chapters = $chapters;
        }
    }

    function getNumberedChapters(chapters) {
        return chapters.filter((c) => c.numbered);
    }

</script>

<slot name="title" {chapter}>
    <span>You need to supply content or use the default implementation</span>
</slot>

<slot name="content">
    <span>You need to supply content</span>
</slot>
