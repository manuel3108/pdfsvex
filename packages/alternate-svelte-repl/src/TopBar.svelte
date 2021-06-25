<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { view } from './stores';

    export let components = [];
    export let currentComponentIndex = -1;

    const dispatch = createEventDispatcher();

    function onClick(index) {
        const tempId = currentComponentIndex;
        currentComponentIndex = index;

        dispatch('tabChanged', {
            oldIndex: tempId,
            newIndex: index,
        });
    }
</script>

<div class="container">
    <div class="column">
        {#each components as component, i}
            <div
                class="button"
                class:active={i === currentComponentIndex}
                on:click={() => onClick(i)}
            >
                <span>{component.name}.{component.type}</span>
            </div>
        {/each}
    </div>

    <div class="column">
        <div
            class="button"
            class:active={$view === 'full'}
            on:click={() => ($view = 'full')}
        >
            <span>full</span>
        </div>
        <div
            class="button"
            class:active={$view === 'preview'}
            on:click={() => ($view = 'preview')}
        >
            <span>preview</span>
        </div>
        <div
            class="button"
            class:active={$view === 'editor'}
            on:click={() => ($view = 'editor')}
        >
            <span>editor</span>
        </div>
    </div>
</div>

<style>
    .column {
        display: inline-flex;
    }

    .button {
        cursor: pointer;
        background-color: #aaa;
        height: 100%;
    }

    .button span {
        vertical-align: middle;
    }

    .container {
        background-color: #bbb;
        height: 100%;
        display: flex;
        justify-content: space-between;
        border-collapse: collapse;
    }

    .column .button {
        padding-left: 5px;
        padding-right: 5px;
        border-left: 1px solid #333;
    }

    .column .button:last-child {
        border-right: 1px solid #333;
    }

    .button.active {
        background-color: #888;
    }
</style>
