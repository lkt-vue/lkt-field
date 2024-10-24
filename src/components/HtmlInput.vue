<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { stripTags } from 'lkt-string-tools';
    import * as lang from 'suneditor/src/lang';
    import plugins from 'suneditor/src/plugins';
    import { editorOptions } from '@/constants/editor-constants';
    import suneditor from 'suneditor';

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
        modelValue: false,
    });

    const input = ref(null);
    const value = ref(props.modelValue),
        editor = ref(null),
        editorTimeout = ref(undefined);

    const hasFocus = ref(props.focusing);

    const onFocus = (event: FocusEvent) => {
            hasFocus.value = true;
            emit('focus', event);
        },
        onBlur = (event: Event) => {
            hasFocus.value = false;
            emit('blur', event);
        },
        updateValueFromEditor = (content) => {
            if (editorTimeout.value) clearTimeout(editorTimeout.value);

            editorTimeout.value = setTimeout(() => {
                let strippedContent = stripTags(content);
                if (strippedContent === '') value.value = '';
                else value.value = content;
            }, 100);
        },
        initEditor = () => {

            let options = {
                lang: lang[props.lang] ? lang[props.lang] : lang.en,
                plugins: {
                    ...plugins,
                },
                ...editorOptions,
            };

            editor.value = suneditor.create(props.id, options);

            editor.value.onChange = (content) => {
                updateValueFromEditor(content);

                if (props.disabled) editor.value.disabled();
                else editor.value.enabled();
            };

            editor.value.onKeyUp = (event, core) => {
                updateValueFromEditor(core.getContents());
            };

            editor.value.onBlur = () => {
                onBlur();
            };

            editor.value.onClick = () => {
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
            if (editor.value) {
                editor.value.setContents(contents);
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