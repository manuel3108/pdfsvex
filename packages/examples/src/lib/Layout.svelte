<script>
	export let pageIndex;
	export let content;
</script>

<div class="header">
	<div class="page-number">
		{pageIndex}
	</div>
</div>
<div class="page-content" />
<div class="footer">
	<div class="page-number">
		{pageIndex}
	</div>
</div>

<style>
	.header,
	.footer {
		height: 1in;
		text-align: center;
		vertical-align: middle;
	}

	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.page-number {
		padding-top: 0.4in;
		margin: auto;
	}

	.page-content {
		margin-left: 1in;
		margin-right: 1in;
		margin-bottom: 1in;
	}
</style>
