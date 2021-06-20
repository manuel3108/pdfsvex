<script>
    import ComponentDescription from '$lib/common/ComponentDescription.svelte';
    import ComponentDescriptionItem from '$lib/common/ComponentDescriptionItem.svelte';
    import ComponentList from '$lib/common/ComponentList.svelte';
    import ComponentListItem from '$lib/common/ComponentListItem.svelte';
    import PackageShields from '$lib/PackageShields.svelte';
    import CodeTableOfContents from './code/CodeTableOfContents.svelte';

</script>

<PackageShields packageName="@pdfsvex/table-of-contents" />

<p>Easily create table of contents.</p>

<CodeTableOfContents />

<ComponentList>
    <ComponentListItem
        name="Chapter"
        description="Bare logic for adding chapters"
        isSlot={true}
    />
    <ComponentListItem
        name="ChapterReference"
        description="Bare logic referencing a chapter"
        isSlot={true}
    />
    <ComponentListItem
        name="TableOfContents"
        description="Bare logic for displaying a table of contents"
        isSlot={true}
    />
    <ComponentListItem
        name="ChapterDefault"
        description="Implementation of Chapter, contains elements and styling"
        html={true}
        css={true}
    />
    <ComponentListItem
        name="ChapterReferenceDefault"
        description="Implementation of ChapterReference, contains elements and styling"
        html={true}
        css={true}
    />
    <ComponentListItem
        name="TableOfContentsDefault"
        description="Implementation of TableOfContents, contains elements and styling"
        html={true}
        css={true}
    />
</ComponentList>

<ComponentDescription
    name="Chapter"
    text="Implements logic for creating custom styled chapter components."
>
    <ComponentDescriptionItem
        name="name"
        description="The name or desceiption of the chapter"
    />
    <ComponentDescriptionItem
        name="key"
        description="Defines the unique key of the chapter. This key is used as an internal identifier. Aditionally this  property could be used to create html ids"
    />
    <ComponentDescriptionItem
        name="includeInTableOfContents"
        description="Defines if the chapter should be visible in the table of contents"
        optional={true}
        defaultValue="true"
    />
    <ComponentDescriptionItem
        name="numbered"
        description="Defines if the chapter should be numbered, and if the number should be increased"
        optional={true}
        defaultValue="true"
    />
</ComponentDescription>

<ComponentDescription
    name="ChapterReference"
    text="Implements logic for referencing another chapter"
>
    <ComponentDescriptionItem
        name="key"
        description="The unique key of the chapter created during the initialization of the chapter"
    />
</ComponentDescription>

<ComponentDescription
    name="TableOfContents"
    text="Implements logic for creating a table of contents"
>
    <ComponentDescriptionItem
        name="chapters"
        description="(internal) A filtered list of chapters to display in table of contents"
        optional={true}
        defaultValue={'undefined'}
    />
</ComponentDescription>

<ComponentDescription
    name="ChapterDefault"
    text="Implements logic, html and styling for creating a table of contents"
>
    <ComponentDescriptionItem
        name="name"
        description="The name or desceiption of the chapter"
    />
    <ComponentDescriptionItem
        name="key"
        description="Defines the unique key of the chapter. This key is used as an internal identifier. Aditionally this  property could be used to create html ids"
    />
    <ComponentDescriptionItem
        name="includeInTableOfContents"
        description="Defines if the chapter should be visible in the table of contents"
        optional={true}
        defaultValue="true"
    />
    <ComponentDescriptionItem
        name="numbered"
        description="Defines if the chapter should be numbered, and if the number should be increased"
        optional={true}
        defaultValue="true"
    />
</ComponentDescription>

<ComponentDescription
    name="ChapterReferenceDefault"
    text="Implements logic, html and styling for referencing another chapter"
>
    <ComponentDescriptionItem
        name="key"
        description="The unique key of the chapter created during the initialization of the chapter"
    />
</ComponentDescription>

<ComponentDescription
    name="TableOfContentsDefaults"
    text="Implements logic, html and styling for creating a table of contents"
>
    <ComponentDescriptionItem
        name="title"
        description="Heading displayed above the table of contents"
        optional={true}
        defaultValue={'Table of Contents'}
    />
    <ComponentDescriptionItem
        name="indentWidthInPx"
        description="Number of pixels to intend each child elments"
        optional={true}
        defaultValue={15}
    />
    <ComponentDescriptionItem
        name="startSizePt"
        description={'Start size of the font in pt. Reduced by "decrementSize" for each child.'}
        optional={true}
        defaultValue={14}
    />
    <ComponentDescriptionItem
        name="decrementSize"
        description={'Number "startSizePt" will be reduced by for each child'}
        optional={true}
        defaultValue={1}
    />
    <ComponentDescriptionItem
        name="depth"
        description="(internal) the current depth count"
        optional={true}
        defaultValue={'0'}
    />
    <ComponentDescriptionItem
        name="chapters"
        description="(internal) A filtered list of chapters to display in table of contents"
        optional={true}
        defaultValue={'undefined'}
    />
</ComponentDescription>
