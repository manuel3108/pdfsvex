<script>
    import ComponentDescription from '$lib/common/ComponentDescription.svelte';
    import ComponentDescriptionItem from '$lib/common/ComponentDescriptionItem.svelte';
    import ComponentList from '$lib/common/ComponentList.svelte';
    import ComponentListItem from '$lib/common/ComponentListItem.svelte';
    import PackageShields from '$lib/PackageShields.svelte';
    import MinimalCode from './code/MinimalCode.svelte';

</script>

<PackageShields packageName="@pdfsvex/pdfsvex" />

<p>Easily create table of contents.</p>

<MinimalCode />

<ComponentList>
    <ComponentListItem
        name="PdfDocument"
        description="The main pdf generation wrapper"
        isSlot={true}
        html={true}
        css={true}
    />
    <ComponentListItem
        name="DynamicComponent"
        description="Dynamic components that need to be created after the pagination"
        isSlot={true}
        html={true}
        css={true}
    />
</ComponentList>

<ComponentDescription name="PdfDocument" text="Main PDF Document Wrapper">
    <ComponentDescriptionItem
        name="options"
        description="The main options object"
    />
    <ComponentDescriptionItem
        name="style"
        description="The document size. One of A3, A4, A5, letter, legal"
        optional={true}
        defaultValue="A4"
    />
    <ComponentDescriptionItem
        name="landscape"
        description="If the documents should be rendered in landscape"
        optional={true}
        defaultValue="false"
    />
    <ComponentDescriptionItem
        name="numbered"
        description="Defines if the chapter should be numbered, and if the number should be increased"
        optional={true}
        defaultValue="true"
    />
</ComponentDescription>

<ComponentDescription
    name="DynamicComponent"
    text="Dynamic components that need to be created after the pagination"
>
    <ComponentDescriptionItem
        name="componentId"
        description="The unique id of this component"
    />
    <ComponentDescriptionItem
        name="attributes"
        description="The properties that should be passed to the dynamic component"
        optional={true}
        defaultValue={'{}'}
    />
</ComponentDescription>
