<script lang="ts" setup>
    import { defineEmits, defineProps, ref, watch } from 'vue';
    import { ButtonConfig, ButtonType, LktObject, TableConfig, TablePermission, TableType } from 'lkt-vue-kernel';
    import TextElementEditor from '@/components/elements/TextElementEditor.vue';

    interface Element {
        type: 'customTag' | 'image' | 'text';
        component?: string;
        props?: Record<string, any>;
        text?: string;
        config?:LktObject
        children?: Element[]
    }

    const props = defineProps({
        modelValue: {
            type: Array as () => Element[],
            required: true
        }
    })

    const items = ref(props.modelValue);

    const emit = defineEmits([
        'delete-element',
        'update-text',
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
        if (items.value[index].type === 'text') {
            if (text !== items.value[index].text) {
                items.value[index].text = text;
                // emit('update-text', { index, text })
            }
        } else {
            if (text !== items.value[index].props[prop]) {
                items.value[index].props[prop] = text;
                // emit('update-text', { index, text })
            }
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
        emit('delete-element', index)
    }

    watch(items, (v) => {
        console.log('updated items: ', v);
        emit('update:modelValue', v);
    })

    const hasConfigModal = (element: Element) => {
        switch (element.type) {
            case 'lkt-box':
            case 'lkt-accordion':
            case 'lkt-icon':
            case 'lkt-image':
                return true;
            default:
                return false;
        }
    }

    const getConfigModal = (element: Element) => {
        switch (element.type) {
            case 'lkt-box':
                return 'lkt-field-box-element-config';
            case 'lkt-accordion':
                return 'lkt-field-accordion-element-config';
            case 'lkt-icon':
                return 'lkt-field-icon-element-config';
            case 'lkt-image':
                return 'lkt-field-image-element-config';
            default:
                return '';
        }
    }
</script>

<template>
    <div>
        <lkt-table
            class="lkt-elements-table"
            v-model="items"
            v-bind="<TableConfig>{
                type: TableType.Table,
                slotItemVar: 'element',
                editMode: true,
                perms: [TablePermission.Update, TablePermission.Sort],
                itemsContainerClass: 'lkt-grid-1',
                drag: {
                    enabled: true,
                    isDisabled: false,
                    canRender: true,
                    isValid: true,
                }
            }"
        >
            <template #item="{element, index}">
                <div class="lkt-element">
                    <div v-if="false" class="handle">☰</div>

                    <div class="lkt-element-content">
                        <!-- Contenido editable o componente -->
                        <text-element-editor
                            v-if="element.type === 'text'"
                            v-model="element.text"
                            @input="handleInputText(index, $event)"
                            @keydown="handleKeydown($event, index)"
                        />

                        <lkt-box
                            v-else-if="element.type === 'lkt-box'"
                            v-bind="element.props"
                            :icon="element.config.hasHeader && element.config.hasIcon ? element.props.icon : ''"
                        >
                            <template #header v-if="element.config?.hasHeader">
                                <text-element-editor
                                    v-model="element.props.header"
                                    @input="handleInputText(index, $event, 'header')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                            <text-element-editor
                                v-model="element.props.text"
                                @input="handleInputText(index, $event, 'text')"
                                @keydown="handleKeydown($event, index)"
                            />
                        </lkt-box>

                        <lkt-accordion
                            v-else-if="element.type === 'lkt-accordion'"
                            v-bind="element.props"
                            :icon="element.config.hasIcon ? element.props.icon : ''"
                        >
                            <template #header>
                                <text-element-editor
                                    v-model="element.props.header"
                                    @input="handleInputText(index, $event, 'header')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                            <text-element-editor
                                v-model="element.props.text"
                                @input="handleInputText(index, $event, 'text')"
                                @keydown="handleKeydown($event, index)"
                            />
                        </lkt-accordion>

                        <lkt-image
                            v-else-if="element.type === 'lkt-image'"
                            v-bind="element.props"
                        >
                            <template #text>
                                <text-element-editor
                                    v-model="element.props.text"
                                    @input="handleInputText(index, $event, 'text')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                        </lkt-image>

                        <lkt-icon
                            v-else-if="element.type === 'lkt-icon'"
                            v-bind="element.props"
                        >
                            <template #text>
                                <text-element-editor
                                    v-model="element.props.text"
                                    @input="handleInputText(index, $event, 'text')"
                                    @keydown="handleKeydown($event, index)"
                                />
                            </template>
                        </lkt-icon>
                        <component
                            v-else
                            :is="element.component"
                            v-bind="element.props"
                        />
                    </div>

                    <div class="lkt-element-actions">
                        <lkt-button
                            v-bind="<ButtonConfig>{
                                type: ButtonType.Tooltip,
                                icon: 'lkt-icn-settings-cogs',
                                tooltip: {
                                    windowMargin: 15,
                                    referrerMargin: 0,
                                    hideOnReferrerLeave: true,
                                    hideOnReferrerLeaveDelay: 500,
                                }
                            }"
                        >
                            <template #tooltip="{doClose}">
                                <div class="lkt-element-tooltip-menu">
                                    <lkt-button
                                        v-if="hasConfigModal(element)"
                                        v-bind="<ButtonConfig>{
                                        text: 'Config',
                                        icon: 'lkt-icn-settings-files-1',
                                        modal: getConfigModal(element),
                                        modalData: {
                                            config: element,
                                            onUpdate: (updatedConfig: LktObject) => {
                                                element = updatedConfig;
                                            }
                                        },
                                        events: {
                                            click: () => {
                                            }
                                        }
                                    }"
                                    />
                                    <lkt-button
                                        v-bind="<ButtonConfig>{
                                        text: 'Remove',
                                        icon: 'lkt-icn-trash',
                                        events: {
                                            click: () => {
                                                deleteElement(index);
                                                doClose();
                                            }
                                        }
                                    }"
                                    />
                                </div>
                            </template>
                        </lkt-button>
                    </div>
                </div>
            </template>
        </lkt-table>

        <!-- Mostrar menú de componentes si se está escribiendo '/' -->
        <div v-if="isTypingSlash && activeIndex !== null" class="component-menu">
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
    }

    .lkt-element-content {
        width: 100%;
    }

    .lkt-element-actions {
        margin-left: auto;
        align-self: flex-start;
        opacity: 0;
    }

    .lkt-element:hover .lkt-element-actions {
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
</style>
