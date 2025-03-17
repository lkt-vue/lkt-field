<script lang="ts" setup>
    import { ref, onMounted, defineProps, defineEmits, watch } from 'vue'
    import Sortable from 'sortablejs'
    import { ButtonConfig, ButtonType } from 'lkt-vue-kernel';
    import TextElementEditor from '@/components/elements/TextElementEditor.vue';

    interface Element {
        type: 'customTag' | 'image' | 'text';
        component?: string;
        props?: Record<string, any>;
        text?: string;
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

    const sortableContainer = ref<HTMLElement | null>(null)

    // Inicializar SortableJS al montar el componente
    onMounted(() => {
        if (sortableContainer.value) {
            Sortable.create(sortableContainer.value, {
                handle: '.drag-handle',
                animation: 150,
                onEnd: (event) => {
                    const { oldIndex, newIndex } = event
                    if (oldIndex !== undefined && newIndex !== undefined) {
                        const movedItem = items.value.splice(oldIndex, 1)[0]
                        items.value.splice(newIndex, 0, movedItem)
                        emit('elements-reordered', items.value)
                    }
                }
            })
        }
    })

    // Manejo del texto y componentes personalizados
    const handleInputText = (index: number, event: Event) => {
        const text = (event.target as HTMLElement).innerHTML.trim()
        if (items.value[index].type === 'text') {
            if (text !== items.value[index].text) {
                items.value[index].text = text;
                // emit('update-text', { index, text })
            }
        } else {
            if (text !== items.value[index].props?.text) {
                items.value[index].props.text = text;
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
        emit('update:modelValue', v);
    })
</script>

<template>
    <div ref="sortableContainer" class="sortable-container">
        <div
            v-for="(element, index) in items"
            :key="index"
            class="sortable-item"
        >
            <!-- Manejador de arrastre -->
            <div class="drag-handle">☰</div>

            <!-- Contenido editable o componente -->
            <text-element-editor
                v-if="element.type === 'text'"
                v-model="element.text"
                @input="handleInputText(index, $event)"
                @keydown="handleKeydown($event, index)"
            />
            <lkt-box v-else-if="element.type === 'LktBox'">
                <text-element-editor
                    v-model="element.props.text"
                    @input="handleInputText(index, $event)"
                    @keydown="handleKeydown($event, index)"
                />
            </lkt-box>
            <component
                v-else
                :is="element.component"
                v-bind="element.props"
            />

            <lkt-button
                :type="ButtonType.Split"
                icon="icon-tooltip"
                :tooltip="{
                    windowMargin: 30,
                    referrerMargin: 7,
                }"
            >
                <template #split="{doClose}">
                    <div class="tooltip-menu">
                        <lkt-button
                            v-bind="<ButtonConfig>{
                                text: 'Remove',
                                events: {
                                    click: () => deleteElement(index)
                                }
                            }"
                        />
                    </div>
                </template>
            </lkt-button>
        </div>

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

<style scoped>
    .sortable-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .sortable-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        border: 1px solid #ddd;
        background-color: #f9f9f9;
        cursor: pointer;
    }

    .editable-text {
        flex: 1;
        min-height: 30px;
        border: none;
        padding: 8px;
        margin: 0;
        outline: none;
    }

    .drag-handle {
        cursor: grab;
        font-size: 18px;
    }

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
</style>
