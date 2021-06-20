<script>
    export let pageIndex;
    export let content;

</script>

<div class="header" />
<div class="page-content" />
<div class="footer">
    <div class="page-number">
        {pageIndex}
    </div>
</div>

<style>
    .header,
    .footer {
        height: 2.5cm;
        text-align: center;
        vertical-align: middle;
    }
    .header,
    .footer,
    .page-content {
        font-size: 10pt;
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
        margin-left: 2.5cm;
        margin-right: 2.5cm;
        margin-bottom: 2.5cm;
        line-height: 1.5;
    }

</style>
