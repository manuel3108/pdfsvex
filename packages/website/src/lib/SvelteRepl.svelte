<script>
    export let src;
    export let title;

    import { getParameters } from 'codesandbox/lib/api/define';

    const parameters = getParameters({
        files: {
            'index.js': {
                content: "console.log('hello')",
            },
            'package.json': {
                content: { dependencies: {} },
            },
        },
    });

    const url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;

    function createSandbox() {}

</script>

<!-- <button on:click={createSandbox}>create</button> -->

<form
    action="https://codesandbox.io/api/v1/sandboxes/define"
    method="POST"
    target="_blank"
>
    <input type="hidden" name="parameters" value={parameters} />
    <input type="submit" value="Open in sandbox" />
</form>
