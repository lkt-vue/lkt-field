<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { stripTags } from 'lkt-string-tools';
    import * as lang from 'suneditor/src/lang';
    import plugins from 'suneditor/src/plugins';
    import { editorOptions } from '../constants/editor-constants';
    import suneditor from 'suneditor';
    import SunEditor from 'suneditor/src/lib/core';

    const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

    const props = withDefaults(defineProps<{
        modelValue: string,
        name: string,
        id: string,
        lang: string,
        editable: boolean,
        focusing: boolean,
        disabled: boolean,
        readonly: boolean,
        tabindex: number,
    }>(), {
        modelValue: '',
    });

    const input = ref(null);
    const value = ref(props.modelValue);

    let editor: SunEditor|null = null;

    let editorTimeout:ReturnType<typeof setTimeout>|undefined = undefined;

    const hasFocus = ref(props.focusing);

    const onFocus = (event?: FocusEvent) => {
            hasFocus.value = true;
            emit('focus', event);
        },
        onBlur = (event?: Event) => {
            hasFocus.value = false;
            emit('blur', event);
        },
        updateValueFromEditor = (content: string) => {
            if (editorTimeout) clearTimeout(editorTimeout);

            editorTimeout = setTimeout(() => {
                let strippedContent = stripTags(content);
                if (strippedContent === '') value.value = '';
                else value.value = content;
            }, 100);
        },
        initEditor = () => {

            let options = {
                //@ts-ignore
                lang: lang[props.lang] ? lang[props.lang] : lang.en,
                plugins: {
                    ...plugins,
                },
                ...editorOptions,
            };

            editor = suneditor.create(props.id, options);

            editor.onChange = (content: string) => {
                updateValueFromEditor(content);

                //@ts-ignore
                if (props.disabled) editor?.disabled();
                //@ts-ignore
                else editor?.enabled();
            };

            editor.onKeyUp = (event, core) => {
                updateValueFromEditor(core.getContents(false));
            };

            editor.onBlur = () => {
                onBlur();
            };

            editor.onClick = () => {
                onFocus();
            };
        };

    watch(() => props.modelValue, v => value.value = v);
    watch(value, v => emit('update:modelValue', v));

    onMounted(() => {
        initEditor();
    });

    defineExpose({
        doSetValue: (contents: string) => {
            if (editor) {
                editor.setContents(contents);
            }
        },
    });
</script>

<template>
    <div
        v-html="value"
        ref="input"
        :id="id"
        :tabindex="tabindex"
    />
</template>