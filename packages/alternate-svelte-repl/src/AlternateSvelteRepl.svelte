<script>
    import { onMount } from 'svelte';
    import Codemirror from './Codemirror.svelte';
    import Preview from './Preview.svelte';
    import TopBar from './TopBar.svelte';
    import { setupWorker } from './worker';
    import { view as viewStore } from './stores';

    export let components = [
        {
            id: 0,
            name: 'App',
            type: 'svelte',
            source: 'asd',
        },
    ];
    export let view = 'full';
    export let height;

    $: {
        codeToDisplay = components[0].source;
    }

    let preview;
    let worker;
    let codeToDisplay = '';
    let componentIndex = 0;

    onMount(() => {
        $viewStore = view;

        codeToDisplay = components[0].source;
        componentIndex = 0;

        var dataObj = '(' + setupWorker + ')();'; // here is the trick to convert the above fucntion to string
        var blob = new Blob([dataObj.replace('"use strict";', '')]); // firefox adds "use strict"; to any function which might block worker execution so knock it off

        var blobURL = (window.URL ? URL : webkitURL).createObjectURL(blob, {
            type: 'application/javascript; charset=utf-8',
        });

        worker = new Worker(blobURL); // spawn new worker

        worker.onmessage = function (e) {
            if (preview && preview.postMessage) {
                preview.postMessage(e.data);
            }
        };
        worker.postMessage(components); // Send data to our worker.
    });

    function updateCode({ detail: { code } }) {
        components[componentIndex].source = code;
        worker.postMessage(components);
    }

    function tabChanged({ detail: { newIndex, oldIndex } }) {
        componentIndex = newIndex;
        codeToDisplay = components[newIndex].source;
    }

</script>

<div class="svelte-repl" style="height: {height};">
    <div>
        <TopBar
            {components}
            currentComponentIndex={componentIndex}
            on:tabChanged={tabChanged}
        />
    </div>
    <div class="editor-preview-container">
        {#if $viewStore === 'full' || $viewStore === 'editor'}
            <div class="editor" class:full-width={$viewStore === 'editor'}>
                <Codemirror content={codeToDisplay} on:change={updateCode} />
            </div>
        {/if}
        {#if $viewStore === 'full' || $viewStore === 'preview'}
            <div class="preview" class:full-width={$viewStore === 'preview'}>
                <Preview bind:this={preview} />
            </div>
        {/if}
    </div>
</div>

<style>
    .editor-preview-container {
        display: flex;
        align-items: stretch;
        width: 100%;
        height: 100%;
    }

    .editor-preview-container div {
        align-items: center;
        display: flex;
        width: 50%;
    }

    .full-width {
        width: 100% !important;
    }

</style>
