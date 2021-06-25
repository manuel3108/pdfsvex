<script>
    import { createEventDispatcher, onMount } from 'svelte';

    export let content = 'asd';
    let language = 'svelte';
    let editor;
    let editorElement;
    let firstUpdate = true;
    let theme = 'monokai'; // make sure to load the according sss file
    let CodeMirror;
    let isMounted = false;
    let hadFirstCodeChange = false;

    const dispatch = createEventDispatcher();

    onMount(async () => {
        CodeMirror = (await import('codemirror')).default;

        await import('codemirror/mode/javascript/javascript.js');
        await import('codemirror/mode/handlebars/handlebars.js');
        await import('codemirror/mode/htmlmixed/htmlmixed.js');
        await import('codemirror/mode/xml/xml.js');
        await import('codemirror/mode/css/css.js');
        await import('codemirror/mode/markdown/markdown.js');
        await import('codemirror/addon/edit/closebrackets.js');
        await import('codemirror/addon/edit/closetag.js');
        await import('codemirror/addon/edit/continuelist.js');
        await import('codemirror/addon/comment/comment.js');
        await import('codemirror/addon/fold/foldcode.js');
        await import('codemirror/addon/fold/foldgutter.js');
        await import('codemirror/addon/fold/brace-fold.js');
        await import('codemirror/addon/fold/xml-fold.js');
        await import('codemirror/addon/fold/indent-fold.js');
        await import('codemirror/addon/fold/markdown-fold.js');
        await import('codemirror/addon/fold/comment-fold.js');

        isMounted = true;
    });

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
        if (editorElement && isMounted) {
            createEditor();
        }
    }

    function createEditor() {
        if (editor) {
            // editor.destroy();
        }

        const opts = {
            lineNumbers: true,
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
            if (hadFirstCodeChange) {
                dispatch('change', {
                    code: editor.getValue(),
                });
            } else {
                hadFirstCodeChange = true;
            }
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
