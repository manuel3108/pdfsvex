<script>
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
        iframe.contentWindow.postMessage(data, '*');
    }

</script>

<iframe title="Rendered REPL" bind:this={iframe} {srcdoc} />

<style>
    iframe {
        height: 100%;
        width: 100%;
        border: 0;
    }

</style>
