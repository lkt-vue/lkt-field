<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import FileInput from '@/components/FileInput.vue';
    import { ButtonConfig, FieldType, FileBrowserConfig, HttpCallConfig, LktObject, TableConfig } from 'lkt-vue-kernel';
    import { InternalInputComponent } from '@/enum/InternalInputComponent.ts';

    const emit = defineEmits(['update:modelValue', 'change', 'uploading', 'upload-success', 'upload-error', 'picked-files']);

    const props = withDefaults(defineProps<{
        modelValue: string[]
        name: string
        id: string
        fileUploadHttp: HttpCallConfig
        accept: string
        placeholder?: string
        fileName?: string
        uploading?: boolean
        focusing?: boolean
        disabled?: boolean
        readonly?: boolean
        tabindex: number
        isImage?: boolean
        fileBrowserConfig?: FileBrowserConfig
        callToActionButton?: ButtonConfig
        min: number|false
        max: number|false
        tableConfig: TableConfig
    }>(), {
        modelValue: () => [],
        editMode: false,
    });

    const items = ref(props.modelValue);

    const computedPerms = computed(() => {
        if (typeof props.max === 'boolean' || items.value.length < props.max) return ['inline-create'];
        return [];
    })

    const onChange = ($event: any) => emit('change', $event),
        onUploading = ($event: any) => emit('uploading', $event),
        onUploadSuccess = ($event: any) => emit('upload-success', $event),
        onUploadError = ($event: any) => emit('upload-error', $event),
        onPickedFiles = ($event: any) => emit('picked-files', $event);

    watch(() => props.modelValue, (v) => items.value = v, {deep: true});
    watch(items, (v) => emit('update:modelValue', v), {deep: true});

</script>

<template>
    <lkt-table
        type="item"
        v-model="items"
        v-bind="<TableConfig>{
            ...tableConfig,
            editMode: true,
            perms: computedPerms,
            newValueGenerator: () => '',
            requiredItemsForTopCreate: 999999,
        }"
    >
        <template #item="{item, index, isLoading, canCreate, canRead, canUpdate, canDrop, doDrop}">
            <file-input
                v-model="items[index]"
                :id="id"
                :tabindex="tabindex"
                :resource="fileUploadHttp?.resource"
                :resource-data="fileUploadHttp?.data"
                :name="name"
                :placeholder="placeholder"
                :accept="accept"
                :focusing="focusing"
                :disabled="disabled"
                :readonly="readonly"
                :is-image="isImage"
                :file-browser-config="fileBrowserConfig"
                :call-to-action-button="callToActionButton"
                @change="onChange"
                @uploading="onUploading"
                @upload-success="onUploadSuccess"
                @upload-error="onUploadError"
                @picked-files="onPickedFiles"
            />
        </template>
    </lkt-table>
</template>