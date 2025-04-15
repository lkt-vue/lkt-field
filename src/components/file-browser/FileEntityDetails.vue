<script setup lang="ts">
    import { FieldConfig, FieldType, FileBrowserConfig, FileEntity, FileEntityType } from 'lkt-vue-kernel';
    import { ref } from 'vue';

    const props = withDefaults(defineProps<{
        editMode: boolean
        modelValue: FileEntity
        fileBrowserConfig?: FileBrowserConfig
    }>(), {
        editMode: false
    })

    const entity = ref(props.modelValue);
</script>

<template>
    <div class="lkt-file-entity-details">
        <template
            v-if="entity.type === FileEntityType.Image"
        >
            <div class="lkt-grid-1">
                <lkt-field
                    v-model="entity.src"
                    v-bind="<FieldConfig>{
                        type: FieldType.Image,
                        label: 'File',
                        readMode: !editMode,
                    }"
                />
                <lkt-field
                    v-model="entity.name"
                    v-bind="<FieldConfig>{
                        type: FieldType.Text,
                        label: 'Name',
                        readMode: !editMode
                    }"
                />
            </div>
        </template>
    </div>
</template>