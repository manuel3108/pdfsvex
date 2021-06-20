<script>
    import { ChapterDefault } from '@pdfsvex/table-of-contents';

    export let name;
    export let text;

</script>

<ChapterDefault key={name} name="Component: {name}">
    <p>
        {text}
    </p>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Optional</th>
                <th>Default</th>
            </tr>
        </thead>
        <tbody>
            <slot />
        </tbody>
    </table>
</ChapterDefault>
