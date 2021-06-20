import {
    ATTRIBUTE_NAME_DYNAMIC_COMPONENT_ID,
    CLASS_NAME_DYNAMIC_COMPONENT,
} from './Constants';
import { Page } from './Page';

export default class DynamicComponents {
    /**
     * Instantiates all dynamic components
     * @param {object} options
     * @param {Page[]} pages
     * @param {HTMLElement} generated
     */
    static create(options, pages, generated) {
        // iterate all pages
        pages.forEach((page) => {
            // get all dynamic components by the specified class name
            const dynamicComponentWrappers = page.contentDom.querySelectorAll(
                '.' + CLASS_NAME_DYNAMIC_COMPONENT
            );
            // iterate over all found dynamic components
            dynamicComponentWrappers.forEach((componentWrapper) => {
                // get the id of the dynamic component
                const componentId = componentWrapper.getAttribute(
                    ATTRIBUTE_NAME_DYNAMIC_COMPONENT_ID
                );

                // and search it in the config
                const componentInfo =
                    DynamicComponents.getComponentInfoFromOptions(
                        options,
                        componentId
                    );

                if (componentInfo != undefined) {
                    // if the components exists in the config, then create it wit all according props
                    new componentInfo.component({
                        target: componentWrapper,
                        props: {
                            ...componentInfo.props,
                            pages: pages,
                            allContent: generated,
                            element: componentWrapper,
                        },
                    });
                }
            });
        });
    }

    /**
     * Searches a component in the options of pdfsvex
     * @param {object} options
     * @param {string} componentId
     * @returns the component config
     */
    static getComponentInfoFromOptions(options, componentId) {
        if (options.dynamicComponents) {
            return options.dynamicComponents.find((c) => c.id === componentId);
        }
        return undefined;
    }
}
