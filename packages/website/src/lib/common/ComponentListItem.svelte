<script>
    export let name;
    export let description;
    export let isSlot = false;
    export let html = false;
    export let css = false;

</script>

<tr>
    <td class="asd">{name}</td>
    <td class="center">
        {#if isSlot}
            ✅
        {/if}
    </td>
    <td class="center">
        {#if html}
            ✅
        {/if}
    </td>
    <td class="center">
        {#if css}
            ✅
        {/if}
    </td>
    <td>{description}</td>
</tr>

<style>
    .center {
        text-align: center;
    }

    .asd {
        width: 30%;
    }

</style>
