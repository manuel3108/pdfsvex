<script>
    export let color = '#FF3E00';
    export let unit = 'px';
    export let duration = '1.2s';
    export let size = '60';
    let durationNum = 1.2; //seconds
</script>

<div
    class="wrapper"
    style="--size: {size}{unit}; --color: {color}; --duration: {duration}"
>
    {#each [...Array(5).keys()].map((i) => i + 1) as version}
        <div
            class="rect"
            style="animation-delay: {(version - 1) * (+durationNum / 12)}s"
        />
    {/each}
</div>

<style>
    .wrapper {
        height: var(--size);
        width: var(--size);
        display: inline-block;
        text-align: center;
        font-size: 10px;
    }
    .rect {
        height: 100%;
        width: 10%;
        display: inline-block;
        margin-right: 4px;
        background-color: var(--color);
        animation: stretch var(--duration) ease-in-out infinite;
    }
    @keyframes stretch {
        0%,
        40%,
        100% {
            transform: scaleY(0.4);
        }
        20% {
            transform: scaleY(1);
        }
    }
</style>
