<script lang="ts" setup>
    import { defineEmits, defineProps, nextTick, ref, watch } from 'vue';
    import {
        ButtonConfig,
        ButtonType,
        FieldElementConfig,
        FieldElementType,
        LktObject,
        TableConfig,
        TablePermission,
        TableType,
    } from 'lkt-vue-kernel';
    import TextElementEditor from '@/components/elements/TextElementEditor.vue';
    import { getCurrentLanguage } from 'lkt-i18n';
    import ElementComponent from '@/components/elements/ElementComponent.vue';

    const props = defineProps({
        modelValue: {
            type: Array as () => FieldElementConfig[],
            required: true
        },
        layoutSelector: {
            type: String,
        },
        isChild: {
            type: Boolean,
            default: false
        }
    })

    const currentLang = getCurrentLanguage();

    console.log('currentLang: ', currentLang);

    const items = ref(props.modelValue);
    const appendingItems = ref(false);
    const tableRef = ref(null);

    const emit = defineEmits([
        'add-text',
        'add-element',
        'elements-reordered',
        'update:modelValue',
    ])

    const isTypingSlash = ref(false) // Para controlar si el usuario está escribiendo '/'
    const activeIndex = ref<number | null>(null) // Índice del elemento actualmente activo

    // Manejo del texto y componentes personalizados
    const handleInputText = (index: number, event: Event, prop: string = 'text') => {
        const text = (event.target as HTMLElement).innerHTML.trim()

        if (text !== items.value[index].props[prop][currentLang]) {
            items.value[index].props[prop][currentLang] = text;
        }

        isTypingSlash.value = text.endsWith('/') // Detecta si el último carácter es '/'
        if (isTypingSlash.value) {
            activeIndex.value = index // Marca el índice activo
        }
    }

    const handleKeydown = (event: KeyboardEvent, index: number) => {
        if (event.key === '/') {
            isTypingSlash.value = true
            activeIndex.value = index // Marca el índice activo
        }
    }

    const addCustomElement = (component: string, props: Record<string, any>) => {
        if (activeIndex.value !== null) {
            // Inserta el nuevo elemento justo después del índice activo
            const newElement: Element = { type: 'customTag', component, props }
            items.value.splice(activeIndex.value + 1, 0, newElement)

            // Emitimos el evento add-element con el nuevo elemento y su posición
            emit('add-element', { element: newElement, index: activeIndex.value + 1 })

            activeIndex.value = null // Resetea el índice activo
            isTypingSlash.value = false // Oculta el menú de componentes
        }
    }

    const deleteElement = (index: number) => {
        tableRef.value?.doRemoveIndex(index);
    }

    watch(items, (v) => {
        emit('update:modelValue', v);
    })

    const elementCanHaveChildren = (element: FieldElementConfig) => {
        switch (element.type) {
            case FieldElementType.LktAccordion:
            case FieldElementType.LktBox:
            case FieldElementType.LktLayout:
                return true;
            default:
                return false;
        }
    }

    const hasConfigModal = (element: FieldElementConfig) => {
        switch (element.type) {
            case FieldElementType.LktAccordion:
            case FieldElementType.LktBox:
            case FieldElementType.LktIcon:
            case FieldElementType.LktImage:
                return true;
            default:
                return false;
        }
    }

    const getConfigModal = (element: FieldElementConfig) => {
        switch (element.type) {
            case FieldElementType.LktBox:
                return 'lkt-field-box-element-config';
            case FieldElementType.LktAccordion:
                return 'lkt-field-accordion-element-config';
            case FieldElementType.LktIcon:
                return 'lkt-field-icon-element-config';
            case FieldElementType.LktImage:
                return 'lkt-field-image-element-config';
            default:
                return '';
        }
    }

    const onDeleteChildElement = (index: number, element) => {
        element.children.splice(index, 1);
        // tableRef.value?.doRemoveIndex(index);
    };

    const getLayoutSelector = (element) => {
        if (!element.layout) return '';

        let r = [
            element.layout.amountOfItems.join(' '),
        ].join(' ');

        if (r !== '') r += ' layout-mode';

        return r;
    }
</script>

<template>
    <div>
        <lkt-table
            ref="tableRef"
            class="lkt-elements-table"
            v-model="items"
            v-bind="<TableConfig>{
                type: TableType.Table,
                slotItemVar: 'element',
                editMode: true,
                hideTableHeader: true,
                perms: isChild ? [TablePermission.Update, TablePermission.Sort] : [TablePermission.Create, TablePermission.Update, TablePermission.Sort],
                itemsContainerClass: layoutSelector,
                requiredItemsForBottomCreate: 10,
                drag: {
                    enabled: true,
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
                <element-component :element="element" :index="index"/>
                <div v-if="false" class="lkt-element" :class="`is-${element.type} is-${element.id}`">
                    <div class="lkt-element-content">
                        <text-element-editor
                            v-if="element.type === 'text'"
                            v-model="element.props.text[currentLang]"
                            @input="handleInputText(index, $event)"
                            @keydown="handleKeydown($event, index)"
                        />

                        <lkt-box
                            v-else-if="element.type === 'lkt-box'"
                            :icon="element.config.hasHeader && element.config.hasIcon ? element.props.icon : ''"
                        >
                            <template #header v-if="element.config?.hasHeader">
                                <text-element-editor
                                    v-model="element.props.header[currentLang]"
                                    @input="handleInputText(index, $event, 'header')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                            <component-manager
                                v-model="element.children"
                                :layout-selector="getLayoutSelector(element)"
                                is-child
                            />
                        </lkt-box>

                        <lkt-accordion
                            v-else-if="element.type === 'lkt-accordion'"
                            :icon="element.config.hasIcon ? element.props.icon : ''"
                        >
                            <template #header>
                                <text-element-editor
                                    v-model="element.props.header[currentLang]"
                                    @input="handleInputText(index, $event, 'header')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                            <component-manager
                                v-model="element.children"
                                :layout-selector="getLayoutSelector(element)"
                                is-child
                            />
                        </lkt-accordion>

                        <lkt-image
                            v-else-if="element.type === 'lkt-image'"
                        >
                            <template #text>
                                <text-element-editor
                                    v-model="element.props.text[currentLang]"
                                    @input="handleInputText(index, $event, 'text')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                        </lkt-image>

                        <lkt-icon
                            v-else-if="element.type === 'lkt-icon'"
                            :icon="element.config.hasIcon ? element.props.icon : ''"
                        >
                            <template #text>
                                <text-element-editor
                                    v-model="element.props.text[currentLang]"
                                    @input="handleInputText(index, $event, 'text')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                        </lkt-icon>

                        <lkt-header
                            v-else-if="element.type === FieldElementType.LktHeader"
                            :icon="element.config.hasIcon ? element.props.icon : ''"
                        >
                            <template #text>
                                <text-element-editor
                                    v-model="element.props.text[currentLang]"
                                    @input="handleInputText(index, $event, 'text')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                        </lkt-header>

                        <lkt-button
                            v-else-if="element.type === 'lkt-button'"
                            :icon="element.config.hasIcon ? element.props.icon : ''"
                        >
                            <template #text>
                                <text-element-editor
                                    v-model="element.props.text[currentLang]"
                                    @input="handleInputText(index, $event, 'text')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                        </lkt-button>

                        <lkt-anchor
                            v-else-if="element.type === 'lkt-anchor'"
                            :icon="element.config.hasIcon ? element.props.icon : ''"
                        >
                            <template #text>
                                <text-element-editor
                                    v-model="element.props.text[currentLang]"
                                    @input="handleInputText(index, $event, 'text')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                        </lkt-anchor>


                        <component-manager
                            v-else-if="element.type === FieldElementType.LktLayout"
                            v-model="element.children"
                            :layout-selector="getLayoutSelector(element)"
                            is-child
                        />

                        <component
                            v-else
                            :is="element.component"
                            v-bind="element.props"
                        />
                    </div>

                    <div class="lkt-element-actions" v-if="!appendingItems">
                        <lkt-button
                            v-bind="<ButtonConfig>{
                                type: ButtonType.Button,
                                text: element.type,
                                icon: 'lkt-icn-settings-cogs',
                                modal: 'lkt-field-element-config',
                                modalKey: `${index}--${element.type}--${element.id}`,
                                modalData: {
                                    element,
                                }
                            }"
                        />
                    </div>
                </div>
            </template>
        </lkt-table>

        <!-- Mostrar menú de componentes si se está escribiendo '/' -->
        <div v-if="false && isTypingSlash && activeIndex !== null" class="component-menu">
            <ul>
                <li @click="addCustomElement('lkt-tag', { text: 'Etiqueta personalizada' })">Etiqueta personalizada</li>
                <li @click="addCustomElement('ImageComponent', { src: prompt('Ingrese la URL de la imagen:') })">Imagen</li>
                <li @click="addCustomElement('TableComponent', {})">Tabla</li>
                <li @click="addCustomElement('FormComponent', {})">Formulario</li>
            </ul>
        </div>
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
        padding-left: 15px;
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
