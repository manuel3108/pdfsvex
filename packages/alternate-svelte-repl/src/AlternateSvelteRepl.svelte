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
            default: true,
        },
    ];
    export let view = 'full';
    export let height;

    let preview;
    let worker;
    let codeToDisplay = '';
    let componentIndex = 0;
    let firstComponentUpdate = true;
    let isLoading = true;

    $: {
        if (firstComponentUpdate) {
            codeToDisplay = components[0].source;

            if (!components[0].default) {
                firstComponentUpdate = false;
            }
        }
    }

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

        setTimeout(() => {
            worker.onmessage = function (e) {
                if (preview && preview.postMessage) {
                    preview.postMessage(e.data);
                    isLoading = false;
                }
            };
            worker.postMessage(components); // Send data to our worker.
        }, 1000);
    });

    function updateCode({ detail: { code } }) {
        components[componentIndex].source = code;
        worker.postMessage(components);
        isLoading = true;
    }

    function tabChanged({ detail: { newIndex, oldIndex } }) {
        componentIndex = newIndex;
        codeToDisplay = components[newIndex].source;
    }
</script>

<div class="svelte-repl" style="height: {height};">
    <div class="topbar">
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
        <div
            class="preview"
            class:full-width={$viewStore === 'preview'}
            style={$viewStore === 'full' || $viewStore === 'preview'
                ? 'display: block;'
                : 'display: none'}
        >
            <Preview bind:this={preview} {isLoading} />
        </div>
    </div>
</div>

<style>
    .topbar {
        height: 25px;
    }

    .editor-preview-container {
        display: flex;
        align-items: stretch;
        width: 100%;
        height: calc(100% - 25px);
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
