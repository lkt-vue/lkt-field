<script setup lang="ts">
    import { ref } from 'vue';
    import {
        AccordionConfig,
        AccordionType,
        FieldConfig,
        FieldElementConfig,
        FieldType,
        ItemCrudConfig,
        ItemCrudMode,
        ItemCrudView,
        OptionConfig,
    } from 'lkt-vue-kernel';
    import LktField from '@/lib-components/LktField.vue';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        element: FieldElementConfig
        onUpdate: Function
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
    });

    const editableConfig = ref(props.element);

    const typeOptions:OptionConfig[] = [
        {
            value: 'grid',
            label: 'Grid',
        },
        {
            value: 'flex',
            label: 'Flex',
        }
    ];

    const amountOfItemsOptions:OptionConfig[] = [
        {
            value: 'lkt-grid-1',
            label: 'Default: 1',
        },
        {
            value: 'lkt-grid-2',
            label: 'Default: 2',
        },
        {
            value: 'lkt-grid-3',
            label: 'Default: 3',
        },
        {
            value: 'lkt-grid-4',
            label: 'Default: 4',
        },
        {
            value: 'lkt-grid-5',
            label: 'Default: 5',
        },
        {
            value: 'lkt-grid-1--from-768',
            label: 'From 768px: 1',
        },
        {
            value: 'lkt-grid-2--from-768',
            label: 'From 768px: 2',
        },
        {
            value: 'lkt-grid-3--from-768',
            label: 'From 768px: 3',
        },
        {
            value: 'lkt-grid-4--from-768',
            label: 'From 768px: 4',
        },
        {
            value: 'lkt-grid-5--from-768',
            label: 'From 768px: 5',
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
            title: 'LktBox Config',
            modalConfig: {
                modalName,
                modalKey,
                zIndex,
                title: 'LktBox Config'
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
                    v-model="item.layout.type"
                />
            </div>

            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Auto,
                    title: 'Responsive configuration'
                }"
            >
                <div class="lkt-grid-3">
                    <lkt-field
                        v-bind="<FieldConfig>{
                            type: FieldType.Select,
                            label: 'Items per row (based on device width)',
                            options: amountOfItemsOptions,
                            multiple: true,
                        }"
                        v-model="item.layout.amountOfItems"
                    />
                </div>
            </lkt-accordion>
        </template>
    </lkt-item-crud>
</template>