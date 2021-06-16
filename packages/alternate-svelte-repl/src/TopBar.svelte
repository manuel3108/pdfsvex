<script>
    import { createEventDispatcher, onMount } from 'svelte';
    import { view } from './stores';

    export let components = [];
    export let currentComponentIndex = -1;

    onMount(() => {
        currentComponentIndex = components.findIndex((c) => c.active);
    });

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

{#each components as component, i}
    <button
        class:color={i === currentComponentIndex}
        on:click={() => onClick(i)}
    >
        {component.name}.{component.type}
    </button>
{/each}

<button on:click={() => ($view = 'full')}>full</button>
<button on:click={() => ($view = 'preview')}>preview</button>
<button on:click={() => ($view = 'editor')}>editor</button>

<style>
    .color {
        background-color: red;
    }

</style>
