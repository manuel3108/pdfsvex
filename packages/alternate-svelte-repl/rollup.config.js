import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
    .replace(/^\w/, (m) => m.toUpperCase())
    .replace(/-\w/g, (m) => m[1].toUpperCase());

export default [
    {
        input: 'src/index.js',
        output: [
            { file: pkg.module, format: 'es' },
            { file: pkg.main, format: 'umd', name },
        ],
        plugins: [svelte(), resolve()],
    },
    {
        input: 'src/worker.js',
        output: {
            sourcemap: true,
            format: 'esm',
            name: 'app',
            file: 'dist/worker.js',
        },
        plugins: [
            resolve({
                browser: true,
                dedupe: ['svelte'],
            }),
        ],
        inlineDynamicImports: true,
        watch: {
            clearScreen: false,
        },
    },
];
