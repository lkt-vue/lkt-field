<script setup lang="ts">
    import {
        FieldConfig,
        FieldType,
        FileBrowserConfig, FileEntity,
        FileEntityConfig,
        FileEntityType,
        ItemCrudConfig,
        ItemCrudMode,
        ItemCrudView,
    } from 'lkt-vue-kernel';
    import { ref } from 'vue';
    import { cloneObject } from 'lkt-object-tools';

    const props = withDefaults(defineProps<{
        modelValue: FileEntity
        fileBrowserConfig?: FileBrowserConfig
    }>(), {

    })

    const entity = ref(cloneObject(props.modelValue));
</script>

<template>
    <div class="lkt-file-entity-details">
        <lkt-item-crud
            v-model="entity"
            v-bind="<ItemCrudConfig>{
                view: ItemCrudView.Inline,
                mode: entity.id ? ItemCrudMode.Update : ItemCrudMode.Create,
                editing: false,
                perms: ['switch-edit-mode', 'update'],
                createButton: {
                    ...fileBrowserConfig?.entityCreateButton,
                    resourceData: entity,
                    events: {
                        click: () => {
                            for(let k in entity) {
                                //@ts-ignore
                                modelValue[k] = entity[k];
                            }
                        }
                    }
                },
                updateButton: {
                    ...fileBrowserConfig?.entityUpdateButton,
                    resourceData: entity,
                    events: {
                        click: () => {
                            for(let k in entity) {
                                //@ts-ignore
                                modelValue[k] = entity[k];
                            }
                        }
                    }
                },
            }"
        >
            <template
                v-if="entity.type === FileEntityType.Image"
                #item="{item, editMode}"
            >
                <div class="lkt-grid-1">
                    <lkt-field
                        v-model="item.src"
                        v-bind="<FieldConfig>{
                            type: FieldType.Image,
                            label: 'File1',
                            readMode: !editMode,
                        }"
                    />
                    <lkt-field
                        v-model="item.name"
                        v-bind="<FieldConfig>{
                            type: FieldType.Text,
                            label: 'Name',
                            readMode: !editMode
                        }"
                    />
                </div>
            </template>
        </lkt-item-crud>
    </div>
</template>