<script>
    import AlternateSvelteRepl from '@pdfsvex/alternate-svelte-repl';
    import { onMount } from 'svelte';
    import { ATTRIBUTE_NAME_COMPONENTS } from './Constants';
    import 'codemirror/lib/codemirror.css';
    import 'codemirror/theme/monokai.css';
    import clickOutside from 'svelte-outside-click';

    export let element;
    export let pages;
    export let allContent;

    let components;
    let showBig = false;

    onMount(() => {
        components = JSON.parse(
            element.getAttribute(ATTRIBUTE_NAME_COMPONENTS)
        );
    });

    function makeBigger() {
        showBig = true;
    }

    function closeModal() {
        showBig = false;
    }
</script>

<div class="wrapper">
    <AlternateSvelteRepl {components} height="600px" />
    <div class="flyover" style="">
        <img on:click={makeBigger} src="/fullscreen.png" alt="fullscreen" />
    </div>
</div>

{#if showBig}
    <div class="modal is-active">
        <div class="modal-background" on:click={closeModal} />
        <div class="modal-content">
            <AlternateSvelteRepl {components} height="100%" />
        </div>
    </div>
{/if}

<style>
    .wrapper {
        position: relative;
    }

    .flyover {
        position: absolute;
        right: 6px;
        bottom: 0;
    }
    img {
        cursor: pointer;
    }

    img:hover {
        background-color: grey;
    }

    .modal {
        align-items: center;
        display: none;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        position: fixed;
        z-index: 40;
    }

    .modal.is-active {
        display: flex;
    }

    .modal,
    .modal-background {
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
    }

    .modal-background {
        background-color: rgba(58, 58, 58, 0.86);
    }

    .modal-content {
        z-index: 50;
        width: 80%;
        height: 80%;
    }
</style>
