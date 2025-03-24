<script setup lang="ts">
    import { ref } from 'vue';
    import {
        ensureFieldConfig,
        FieldConfig,
        FieldElementConfig,
        FieldType,
        ItemCrudConfig,
        ItemCrudMode,
        ItemCrudView,
        LktSettings,
    } from 'lkt-vue-kernel';
    import { closeModal } from 'lkt-modal';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        config: FieldElementConfig
        onUpdate: Function
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
    });

    const editableConfig = ref(props.config);
    const onClickUpdate = () => {
        props.onUpdate(editableConfig.value);
        closeModal(props.modalName, props.modalKey);
    };

    const customClassField: FieldConfig | undefined = Object.keys(LktSettings.defaultFieldLktIconElementCustomClassField).length > 0
        ? ensureFieldConfig(LktSettings.defaultFieldLktIconElementCustomClassField, LktSettings.defaultFieldElementCustomClassField)
        : undefined;
</script>

<template>
    <lkt-item-crud
        v-model="editableConfig"
        v-bind="<ItemCrudConfig>{
            mode: ItemCrudMode.Update,
            view: ItemCrudView.Modal,
            editing: true,
            perms: ['update'],
            title: 'LktIcon Config',
            modalConfig: {
                modalName,
                modalKey,
                zIndex,
                title: 'LktIcon Config'
            },
            updateButton: false
        }"
    >
        <template #item="{item}">
            <div class="lkt-grid-1">
                <lkt-field
                    v-if="customClassField"
                    v-bind="<FieldConfig>{
                        type: FieldType.Select,
                        ...customClassField,
                        canClear: true
                    }"
                    v-model="item.props.class"
                />
                <lkt-field
                    v-bind="<FieldConfig>{
                        type: FieldType.Switch,
                        label: 'Has icon',
                    }"
                    v-model="item.config.hasIcon"
                />
                <lkt-field
                    v-bind="<FieldConfig>{
                        type: FieldType.Text,
                        label: 'Icon',
                    }"
                    v-model="item.props.icon"
                    :disabled="!item.config.hasIcon"
                />
            </div>
        </template>
    </lkt-item-crud>
</template>