<script>
    export let name;
    export let description;
    export let optional = false;
    export let defaultValue = undefined;

</script>

<tr>
    <td>
        <span class="param-name">
            {name}
        </span>
    </td>
    <td class="param-description">{description}</td>
    <td class="param-optional">
        {#if optional}
            ✅
        {/if}
    </td>
    <td>
        {#if defaultValue}
            {defaultValue}
        {/if}
    </td>
</tr>

<style>
    .param-optional {
        text-align: center;
    }

    .param-name {
        background-color: #aaa;
        padding: 5px;
        border-radius: 5px;
    }

    .param-description {
        padding-left: 20px;
    }

</style>
