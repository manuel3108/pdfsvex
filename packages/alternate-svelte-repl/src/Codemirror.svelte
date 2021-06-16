<script>
    import { createEventDispatcher } from 'svelte';
    import CodeMirror from 'codemirror';
    import 'codemirror/lib/codemirror.css';

    import 'codemirror/mode/javascript/javascript.js';
    // import 'codemirror/mode/shell/shell.js';
    import 'codemirror/mode/handlebars/handlebars.js';
    import 'codemirror/mode/htmlmixed/htmlmixed.js';
    import 'codemirror/mode/xml/xml.js';
    import 'codemirror/mode/css/css.js';
    import 'codemirror/mode/markdown/markdown.js';
    import 'codemirror/addon/edit/closebrackets.js';
    import 'codemirror/addon/edit/closetag.js';
    import 'codemirror/addon/edit/continuelist.js';
    import 'codemirror/addon/comment/comment.js';
    import 'codemirror/addon/fold/foldcode.js';
    import 'codemirror/addon/fold/foldgutter.js';
    import 'codemirror/addon/fold/brace-fold.js';
    import 'codemirror/addon/fold/xml-fold.js';
    import 'codemirror/addon/fold/indent-fold.js';
    import 'codemirror/addon/fold/markdown-fold.js';
    import 'codemirror/addon/fold/comment-fold.js';
    import 'codemirror/theme/monokai.css';

    export let content = 'asd';
    let language = 'svelte';
    let editor;
    let editorElement;
    let firstUpdate = true;
    let theme = 'monokai'; // make sure to load the according sss file

    const dispatch = createEventDispatcher();

    $: {
        if (editor !== undefined && content != null) {
            editor.setValue(content);
            firstUpdate = false;
        }
    }
    const modes = {
        javascript: {
            name: 'javascript',
        },
        svelte: {
            name: 'handlebars',
            base: 'text/html',
        },
    };

    $: {
        if (editorElement) {
            createEditor();
        }
    }

    function createEditor() {
        if (editor) {
            // editor.destroy();
        }

        const opts = {
            lineNumbers: true,
            lineWrapping: true,
            indentWithTabs: true,
            indentUnit: 2,
            tabSize: 2,
            value: '',
            mode: modes[language],
            readOnly: false,
            autoCloseBrackets: true,
            autoCloseTags: true,
            extraKeys: {
                Enter: 'newlineAndIndentContinueMarkdownList',
                'Ctrl-/': 'toggleComment',
                'Cmd-/': 'toggleComment',
                'Ctrl-B': function (cm) {
                    cm.foldCode(cm.getCursor());
                },
                'Cmd-B': function (cm) {
                    cm.foldCode(cm.getCursor());
                },
            },
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
            theme,
        };
        editor = CodeMirror(editorElement, opts);
        editor.on('change', (editor) => {
            dispatch('change', {
                code: editor.getValue(),
            });
        });

        if (content) {
            editor.setValue(content);
        }
    }

</script>

<div class="codeeditor" bind:this={editorElement} />

<style>
    .codeeditor {
        height: 100%;
        width: 100%;
    }

    :global(.CodeMirror) {
        height: 100% !important;
    }

</style>
