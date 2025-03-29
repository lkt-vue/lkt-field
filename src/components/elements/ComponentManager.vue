<script lang="ts" setup>
    import { defineEmits, defineProps, nextTick, ref, watch } from 'vue';
    import { FieldElementConfig, TableConfig, TablePermission, TableType } from 'lkt-vue-kernel';
    import ElementComponent from '@/components/elements/ElementComponent.vue';

    const props = defineProps({
        modelValue: {
            type: Array as () => FieldElementConfig[],
            required: true
        },
        layoutSelector: {
            type: String,
        },
        lang: {
            type: String,
        },
        isChild: {
            type: Boolean,
            default: false
        },
        isPreview: {
            type: Boolean,
            default: false
        }
    })

    const items = ref(props.modelValue);
    const appendingItems = ref(false);
    const tableRef = ref(null);

    const emit = defineEmits([
        'add-text',
        'add-element',
        'elements-reordered',
        'update:modelValue',
    ])

    watch(items, (v) => {
        emit('update:modelValue', v);
    })
</script>

<template>
    <div>
        <lkt-table
            ref="tableRef"
            class="lkt-elements-table"
            v-model="items"
            v-bind="<TableConfig>{
                type: isPreview ? TableType.Table : TableType.Item,
                slotItemVar: 'element',
                editMode: true,
                hideTableHeader: true,
                perms: isChild ? [TablePermission.Update, TablePermission.Sort] : [TablePermission.Create, TablePermission.Update, TablePermission.Sort],
                itemsContainerClass: (!isChild) ? 'lkt-grid-1' : layoutSelector,
                requiredItemsForBottomCreate: 10,
                drag: {
                    enabled: isPreview,
                    isDisabled: false,
                    canRender: true,
                    isValid: true,
                },
                createButton: isChild ? false : {
                    text: 'Add element',
                    icon: 'lkt-icn-more',
                    modal: 'lkt-field-add-element-config',
                    modalData: {
                        items: items,
                        index: items.length,
                        onAppend: () => {
                            appendingItems = true;
                            nextTick(() => {
                                appendingItems = false;
                            })
                        }
                    }
                },
            }"
        >
            <template #item="{element, index}">
                <element-component :element="element" :index="index" :lang="lang" :is-preview="isPreview"/>
            </template>
        </lkt-table>
    </div>
</template>

<style>
    .component-menu {
        background-color: white;
        border: 1px solid #ccc;
        position: absolute;
        z-index: 10;
        width: 200px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .component-menu ul {
        list-style-type: none;
        padding: 10px;
    }

    .component-menu li {
        cursor: pointer;
        padding: 5px;
    }

    .component-menu li:hover {
        background-color: #f0f0f0;
    }

    .lkt-element {
        display: flex;
        align-items: center;
        gap: 15px;
        position: relative;
    }

    .lkt-element-content {
        width: 100%;
    }

    .lkt-element-actions {
        margin-left: auto;
        align-self: flex-start;
        opacity: 0;
        position: absolute;
        right: 0;
        top: -15px;
    }

    .lkt-element.is-text .lkt-element-actions {
        top: -60px;
    }

    .lkt-element:hover > .lkt-element-actions {
        opacity: 1;
    }

    .lkt-element-actions .lkt-button {
        --lkt-btn-min-width: auto;
        --lkt-btn-padding: 0 5px;
        --lkt-btn-text-align: left;
        justify-content: flex-start;
    }

    .lkt-element-editable-text {
        min-width: 50px;
        white-space: pre-wrap;
        display: block;
        outline: none;
        word-break: break-all;
    }

    .lkt-element-tooltip-menu {
        display: flex;
        flex-direction: column;
        gap: 15px;
        min-width: 200px;
    }

    .lkt-element-actions .lkt-tooltip {
        --lkt-tooltip-min-width: 250px;
    }

    .lkt-elements-table .lkt-table {
        --lkt-table-border-collapse: separate;
        --lkt-table-border-spacing: 0 10px;
    }

    .layout-mode tbody tr {
        display: flex;
        flex-direction: row;
    }
    .layout-mode td:not([data-role="drag-indicator"]) {
        width: 100%;
    }

    .lkt-field-element-config-modal {
        --lkt-modal-max-width-default: 100%;
        --lkt-modal-width-default: 100%;
    }
    .lkt-field-element-config-modal .lkt-modal-inner {
        height: 100%;
        margin: 0;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
    }
    .lkt-field-element-config-modal .lkt-modal-header {
        max-height: 50px;
    }
</style>
