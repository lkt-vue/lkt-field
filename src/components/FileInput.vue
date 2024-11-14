<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { httpCall, HTTPResponse } from 'lkt-http-client';
    import { LktObject } from 'lkt-ts-interfaces';

    const emit = defineEmits([
        'update:modelValue',
        'update:fileName',
        'change',
        'uploading',
        'upload-success',
        'upload-error',
    ]);

    const props = withDefaults(defineProps<{
        modelValue: string
        name: string
        id: string
        accept: string
        placeholder?: string
        fileName?: string
        resource?: string
        resourceData?: LktObject
        uploading?: boolean,
        focusing?: boolean,
        disabled?: boolean,
        readonly?: boolean,
        tabindex: number,
        isImage?: boolean
    }>(), {
        modelValue: '',
        resourceData: () => [],
        placeholder: '',
        fileName: '',
        resource: '',
        uploading: false,
        focusing: false,
        disabled: false,
        readonly: false,
        isImage: false,
    });

    const inputElement = ref(null);

    const value = ref(props.modelValue),
        visibleFileName = ref(props.fileName);

    const isUploading = ref(props.uploading);

    const onChange = ($event: any) => {
        let input = $event.target;
        // @ts-ignore
        if (input.files && input.files[0]) {
            visibleFileName.value = input.files[0].name;
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent) => {
                // @ts-ignore
                value.value = event.target.result;
                if (props.resource) {
                    isUploading.value = true;
                    emit('uploading');
                    let params = JSON.parse(JSON.stringify(props.resourceData));
                    // @ts-ignore
                    params.files = input.files[0];

                    httpCall(props.resource, params).then((r: HTTPResponse) => {
                        // @todo check with uploaded file
                        // @ts-ignore
                        value.value = r.data;
                        isUploading.value = false;
                        emit('upload-success', r);
                    }).catch(r => {
                        isUploading.value = false;
                        emit('upload-error', r);
                    });
                }
            };
            // @ts-ignore
            reader.readAsDataURL(input.files[0]);
        }
        emit('change', $event);
    };

    watch(value, (v) => emit('update:modelValue', v));
    watch(visibleFileName, (v) => emit('update:fileName', v));
</script>

<template>
    <input
        ref="inputElement"
        type="file"
        :name="name"
        :id="id"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :accept="accept"
        @change="onChange"
    >
    <lkt-button
        class="lkt-field--toggle-button"
        :click-ref="inputElement"
        :text="!isImage ? visibleFileName : ''"
        :disabled="disabled"
    >
        <lkt-image
            v-if="isImage"
            :src="value"
            class="lkt-field--image-cover"
        />
        <lkt-image
            v-if="isImage"
            :src="value"
            class="lkt-field--image-main"
        />
    </lkt-button>
</template>