<script>
    import LoadingSpinner from './LoadingSpinner.svelte';

    export let isLoading = true;

    const srcdoc = `<!doctype html>
<html>
	<head>
		<script type="module">

			let c;

			function update(source) {
				const blob = new Blob([source], { type: 'text/javascript' });
				const url = URL.createObjectURL(blob);

				import(url).then(({ default: App }) => {
					if (c) c.$destroy();

					document.body.innerHTML = '';
					c = new App({ target: document.body })
				})
			}

			window.addEventListener('message', event => {
				update(event.data)
			}, false)
		<\/script>
	</head>
	<body></body>
</html>`;
    let iframe;

    export function postMessage(data) {
        if (iframe.contentWindow) {
            iframe.contentWindow.postMessage(data, '*');
        }
    }
</script>

<div class="wrapper">
    {#if isLoading}
        <div class="loading-wrapper">
            <div class="loading-background" />
            <div class="loader">
                <LoadingSpinner color="#aaa" />
            </div>
        </div>
    {/if}
    <iframe title="Rendered REPL" bind:this={iframe} {srcdoc} />
</div>

<style>
    .wrapper,
    iframe {
        height: 100%;
        width: 100%;
        border: 0;
        position: relative;
    }

    .loading-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(19, 19, 19, 0.5);
    }

    .loading-wrapper {
        position: absolute;
        z-index: 10000;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
    }

    .loader {
        margin: 0 auto;
    }
</style>
