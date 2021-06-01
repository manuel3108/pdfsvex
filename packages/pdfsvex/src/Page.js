import { ATTRIBUTE_NAME_DATA_CREATED_FROM_UID } from './Constants';

export class Page {
    constructor(options, index) {
        this.options = options;
        this.index = index;
        this.domAnchor = this.generate();
    }

    generate() {
        const page = document.createElement('div');
        page.classList.add('sheet');
        page.setAttribute('data-page-number', this.index);

        this.layoutComponent = new this.options.layout({
            target: page,
            props: {
                pageIndex: this.index,
                content: undefined,
            },
        });

        return page;
    }

    get dom() {
        return this.domAnchor;
    }
    get contentDom() {
        return this.domAnchor.querySelector('.page-content');
    }

    hasOverflow() {
        return (
            this.domAnchor.scrollHeight > this.domAnchor.clientHeight
            // this.domAnchor.scrollWidth > this.domAnchor.clientWidth
        );
    }

    save() {
        this.layoutComponent.$set({ content: this.domAnchor });
    }

    getNodeIfExists(dataUid) {
        return this.contentDom.querySelector(
            `[${ATTRIBUTE_NAME_DATA_CREATED_FROM_UID}="${dataUid}"]`
        );
    }
}
