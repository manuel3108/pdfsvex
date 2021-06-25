export function setupWorker() {
    var self = this;

    // you could use unpkg like the official repl, i thought i'd try out jsdelivr
    const CDN_URL = 'https://cdn.jsdelivr.net/npm';
    importScripts(`${CDN_URL}/svelte/compiler.js`);
    importScripts(CDN_URL + '/rollup/dist/rollup.browser.js');

    const cache = {};

    const component_lookup = new Map();

    async function fetch_package(url) {
        if (cache[url] !== undefined) {
            return cache[url];
        }

        const text = (await fetch(url)).text();
        cache[url] = text;
        return text;
    }

    function generate_lookup(components) {
        components.forEach((component) => {
            component_lookup.set(
                `./${component.name}.${component.type}`,
                component
            );
        });
    }

    self.addEventListener('message', async (event) => {
        generate_lookup(event.data);
        const bundle = await rollup.rollup({
            input: './App.svelte',
            plugins: [
                {
                    name: 'repl-plugin',
                    async resolveId(importee, importer) {
                        // handle imports from 'svelte'
                        // import x from 'svelte'
                        if (importee === 'svelte')
                            return `${CDN_URL}/svelte/index.mjs`;
                        // import x from 'svelte/somewhere'
                        if (importee.startsWith('svelte/')) {
                            return `${CDN_URL}/svelte/${importee.slice(
                                7
                            )}/index.mjs`;
                        }
                        // import x from './file.js' (via a 'svelte' or 'svelte/x' package)
                        if (
                            importer &&
                            importer.startsWith(`${CDN_URL}/svelte`)
                        ) {
                            const resolved = new URL(importee, importer).href;
                            if (resolved.endsWith('.mjs')) return resolved;
                            return `${resolved}/index.mjs`;
                        }
                        // local repl components
                        if (component_lookup.has(importee)) return importee;
                        // relative imports from a remote package
                        if (importee.startsWith('.')) {
                            let url = new URL(importee, importer);
                            // allow imports that do not end with a file extension and process them as js files
                            if (!url.pathname.includes('.')) {
                                url = new URL(importee + '.js', importer);
                            }
                            return url.href;
                        }
                        // bare named module imports (importing an npm package)
                        // get the package.json and load it into memory
                        const pkg_url = `${CDN_URL}/${importee}/package.json`;
                        const pkg = JSON.parse(await fetch_package(pkg_url));
                        // get an entry point from the pkg.json - first try svelte, then modules, then main
                        if (pkg.svelte || pkg.module || pkg.main) {
                            // use the aobove url minus `/package.json` to resolve the URL
                            const url = pkg_url.replace(/\/package\.json$/, '');
                            return new URL(
                                pkg.svelte || pkg.module || pkg.main,
                                `${url}/`
                            ).href;
                        }
                        // we probably missed stuff, pass it along as is
                        return importee;
                    },
                    async load(id) {
                        // local repl components are stored in memory
                        // this is our virtual filesystem
                        if (component_lookup.has(id))
                            return component_lookup.get(id).source;
                        // everything else comes from a cdn
                        return await fetch_package(id);
                    },
                    transform(code, id) {
                        // our only transform is to compile svelte components
                        //@ts-ignore
                        if (/.*\.svelte/.test(id))
                            return svelte.compile(code).js.code;
                    },
                },
            ],
        });
        // a touch longwinded but output contains an array of chunks
        // we are not code-splitting, so we only have a single chunk
        const output = (await bundle.generate({ format: 'esm' })).output[0]
            .code;
        self.postMessage(output);
    });
}
