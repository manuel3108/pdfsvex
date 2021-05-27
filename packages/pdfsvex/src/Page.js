export class Page {
	constructor(options, index) {
		this.options = options;
		this.index = index;
		this.domAnchor = this.generate();
	}

	generate() {
		const page = document.createElement('div');
		page.classList.add('sheet');

		this.layoutComponent = new this.options.layout({
			target: page,
			props: {
				pageIndex: this.index,
				content: undefined
			}
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
}
