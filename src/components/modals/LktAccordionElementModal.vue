<script setup lang="ts">
    import { ref } from 'vue';
    import LktField from '../../lib-components/LktField.vue';
    import {
        AccordionToggleMode,
        AccordionType, ensureFieldConfig,
        FieldConfig,
        FieldType,
        ItemCrudConfig,
        ItemCrudMode,
        ItemCrudView,
        LktObject, LktSettings,
        OptionConfig,
    } from 'lkt-vue-kernel';
    import { closeModal } from 'lkt-modal';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        config: LktObject
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
    }

    const customClassField: FieldConfig|undefined = Object.keys(LktSettings.defaultFieldLktAccordionElementCustomClassField).length > 0
        ? ensureFieldConfig(LktSettings.defaultFieldLktAccordionElementCustomClassField, LktSettings.defaultFieldElementCustomClassField)
        : undefined;

    const typeOptions = <Array<OptionConfig>>[
        {
            value: AccordionType.Auto,
            label: 'Auto',
        },
        {
            value: AccordionType.Always,
            label: 'Always',
        },
        {
            value: AccordionType.Lazy,
            label: 'Lazy',
        },
        {
            value: AccordionType.Ever,
            label: 'Ever',
        },
    ];

    const toggleModeOptions = <Array<OptionConfig>>[
        {
            value: AccordionToggleMode.Transform,
            label: 'Transform',
        },
        {
            value: AccordionToggleMode.Display,
            label: 'Display',
        },
        {
            value: AccordionToggleMode.Height,
            label: 'Height',
        },
    ];
</script>

<template>
    <lkt-item-crud
        v-model="editableConfig"
        v-bind="<ItemCrudConfig>{
            mode: ItemCrudMode.Update,
            view: ItemCrudView.Modal,
            editing: true,
            perms: ['update'],
            title: 'LktAccordion Config',
            modalConfig: {
                modalName,
                modalKey,
                zIndex,
                title: 'LktAccordion Config'
            },
            updateButton: false
        }"
    >
        <template #item="{item}">
            <div class="lkt-grid-1">
                <lkt-field
                    v-bind="<FieldConfig>{
                        type: FieldType.Select,
                        label: 'Type',
                        options: typeOptions,
                    }"
                    v-model="item.props.type"
                />
                <lkt-field
                    v-bind="<FieldConfig>{
                        type: FieldType.Select,
                        label: 'Toggle Mode',
                        options: toggleModeOptions,
                    }"
                    v-model="item.props.toggleMode"
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
                <lkt-field
                    v-if="customClassField"
                    v-bind="<FieldConfig>{
                        type: FieldType.Select,
                        ...customClassField,
                        canClear: true
                    }"
                    v-model="item.props.class"
                />
            </div>
        </template>
    </lkt-item-crud>
</template>