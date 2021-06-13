<script>
    export let packageName;

</script>

<div class="container">
    <a href="https://www.npmjs.com/package/{packageName}">
        <img alt="Version" src="https://img.shields.io/npm/v/{packageName}" />
    </a>
    <a href="https://www.npmjs.com/package/{packageName}">
        <img
            alt="Downloads"
            src="https://img.shields.io/npm/dw/{packageName}"
        />
    </a>
    <a href="https://pdfsvex.serret.dev" target="_blank">
        <img
            alt="Documentation"
            src="https://img.shields.io/badge/documentation-yes-brightgreen.svg"
        />
    </a>
    <a href="https://pdfsvex.serret.dev" target="_blank">
        <img alt="License" src="https://img.shields.io/npm/l/{packageName}" />
    </a>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        margin: 5px;
    }

</style>
