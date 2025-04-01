<script lang="ts" setup>
    import { defineEmits, defineProps, ref, watch } from 'vue';
    import ComponentManager from './elements/ComponentManager.vue';
    import { ButtonConfig, WebElementConfig } from 'lkt-vue-kernel';
    import EditorToolbar from '@/components/EditorToolbar.vue';

    const props = defineProps({
        modelValue: {
            type: Array as () => WebElementConfig[],
            required: true
        },
        layoutSelector: {
            type: String,
        }
    });
    const elements = ref(props.modelValue);

    const emit = defineEmits([
        'update:modelValue',
    ]);

    watch(() => props.modelValue, (v) => {
        elements.value = v;
    }, {deep: true})

    watch(elements, (v) => {
        emit('update:modelValue', v);
    })

    // Historial de cambios
    const history = ref<WebElementConfig[][]>([]); // Almacenamos un arreglo de estados anteriores
    let historyIndex = ref(-1); // Apunta al estado actual en el historial

    // Guardar el estado en el historial
    const saveHistory = () => {
        history.value = history.value.slice(0, historyIndex.value + 1); // Eliminar los futuros estados cuando se realice un cambio
        history.value.push([...elements.value]); // Guardar una copia del estado actual
        historyIndex.value = history.value.length - 1; // Apuntar al último estado
    };

    const onAddElement = () => {
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Eliminar un componente de la lista
    const deleteElement = (index: number) => {
        elements.value.splice(index, 1);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Funciones de formato de texto
    const applyFormat = (command: string) => {
        document.execCommand(command, false);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Cambiar color del texto
    const changeTextColor = (event: Event) => {
        const color = (event.target as HTMLInputElement).value;
        document.execCommand('foreColor', false, color);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Cambiar color de fondo
    const changeBackgroundColor = (event: Event) => {
        const color = (event.target as HTMLInputElement).value;
        document.execCommand('backColor', false, color);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Cambiar tamaño de la fuente
    const changeFontSize = (event: Event) => {
        const fontSize = (event.target as HTMLSelectElement).value;
        document.execCommand('fontSize', false, fontSize);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Cambiar familia de fuente
    const changeFontFamily = (event: Event) => {
        const fontFamily = (event.target as HTMLSelectElement).value;
        document.execCommand('fontName', false, fontFamily);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Alinear el texto
    const applyAlignment = (alignment: string) => {
        document.execCommand('justify' + alignment, false);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    function toggleWrapSelectionWithTag(tagName) {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        let commonAncestor = range.commonAncestorContainer;

        // Si el nodo común es un texto, tomamos su padre
        if (commonAncestor.nodeType === Node.TEXT_NODE) {
            commonAncestor = commonAncestor.parentNode;
        }

        // Si el nodo ya está envuelto en la etiqueta, la eliminamos
        if (commonAncestor.tagName && commonAncestor.tagName.toLowerCase() === tagName.toLowerCase()) {
            unwrapElement(commonAncestor);
            return;
        }

        // Si la selección incluye varios elementos, evitamos el anidamiento innecesario
        const fragment = range.extractContents();
        const wrapper = document.createElement(tagName);

        let hasBlockElement = false;
        fragment.childNodes.forEach(node => {
            if (node.nodeType === 1 && getComputedStyle(node).display === "block") {
                hasBlockElement = true;
            }
        });

        if (hasBlockElement) {
            range.insertNode(fragment);
        } else {
            wrapper.appendChild(fragment);
            range.insertNode(wrapper);
        }

        saveHistory();
    }

    // Función para eliminar un elemento sin borrar su contenido
    function unwrapElement(element) {
        const parent = element.parentNode;
        while (element.firstChild) {
            parent.insertBefore(element.firstChild, element);
        }
        parent.removeChild(element);
    }

    // Funciones de deshacer/rehacer
    const undo = () => {
        if (historyIndex.value > 0) {
            historyIndex.value--;
            elements.value = [...history.value[historyIndex.value]]; // Restaurar el estado anterior
        }
    };

    const redo = () => {
        if (historyIndex.value < history.value.length - 1) {
            historyIndex.value++;
            elements.value = [...history.value[historyIndex.value]]; // Restaurar el siguiente estado
        }
    };

    // Insertar un enlace
    const insertLink = () => {
        const url = prompt('Ingrese la URL del enlace:');
        if (url) {
            document.execCommand('createLink', false, url);
            saveHistory(); // Guardamos el estado después de la modificación
        }
    };

    watch(elements, (v) => {
        emit('update:modelValue', v);
    }, { deep: true });

    const containerRef = ref(null),
        toolbarTop = ref(0);

    watch(containerRef, (v) => {
        if (v) {
            toolbarTop.value = containerRef.value.getBoundingClientRect().top;
        } else {
            toolbarTop.value = 0;
        }
    })
</script>

<template>
    <div ref="containerRef" class="lkt-wysiwyg-container">

        <editor-toolbar :elements="elements" :toolbar-top="toolbarTop"/>

        <!-- Barra de herramientas y demás elementos del editor -->
        <div v-if="false" class="lkt-wysiwyg-toolbar lkt-tooltip" :style="{top: toolbarTop + 'px'}">
            <div class="lkt-elements-toolbar-group">
                <lkt-button
                    v-bind="<ButtonConfig>{
                        text: 'b',
                    }"
                    @click="applyFormat('bold')"
                />
                <lkt-button
                    v-bind="<ButtonConfig>{
                        text: 'i',
                    }"
                    @click="applyFormat('italic')"
                />
                <lkt-button
                    v-bind="<ButtonConfig>{
                        text: 'u',
                    }"
                    @click="applyFormat('underline')"
                />
                <lkt-button
                    v-bind="<ButtonConfig>{
                        text: 'strikeThrough',
                    }"
                    @click="applyFormat('strikeThrough')"
                />
            </div>

            <!-- Nuevas opciones de formato -->
            <button @click="applyFormat('subscript')">Subíndice</button>
            <button @click="applyFormat('superscript')">Superíndice</button>
            <button @click="toggleWrapSelectionWithTag('p')">Párrafo</button>

            <!-- Nuevas opciones de color -->
            <input type="color" @input="changeTextColor" title="Color del texto" />
            <input type="color" @input="changeBackgroundColor" title="Color de fondo" />

            <!-- Tamaño de fuente y tipo de fuente -->
            <select @change="changeFontSize($event)">
                <option value="3">Mediano</option>
                <option value="5">Grande</option>
                <option value="7">Extra Grande</option>
            </select>

            <select @change="changeFontFamily($event)">
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
            </select>

            <!-- Alineación del texto -->
            <button @click="applyAlignment('left')">Alineación izquierda</button>
            <button @click="applyAlignment('center')">Centrar</button>
            <button @click="applyAlignment('right')">Alineación derecha</button>

            <!-- Espaciado de párrafos -->
            <button @click="applyFormat('insertUnorderedList')">Lista no ordenada</button>
            <button @click="applyFormat('insertOrderedList')">Lista ordenada</button>

            <button @click="insertLink">Insertar Enlace</button>

            <!-- Deshacer y rehacer -->
            <button @click="undo">Deshacer</button>
            <button @click="redo">Rehacer</button>

            <lkt-button
                v-bind="<ButtonConfig>{
                    text: 'Add element',
                    icon: 'lkt-icn-more',
                    modal: 'lkt-field-add-element-config',
                    modalData: {
                        items: elements,
                        index: elements.length
                    }
                }"
            />
        </div>

        <!-- Renderizamos el componente intermedio para gestionar los elementos -->
        <ComponentManager
            v-model="elements"
            @delete-element="deleteElement"
            @add-element="onAddElement"
        />
    </div>
</template>

<style scoped>
    .lkt-wysiwyg-container {
        position: relative;
    }

    .lkt-wysiwyg-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 10px;
        position: sticky;
        top: 0;
        z-index: 8;
        max-width: 100%;
    }

    button {
        padding: 8px 16px;
        font-size: 14px;
        cursor: pointer;
    }

    input[type="color"] {
        padding: 5px;
    }

    select {
        padding: 5px;
        font-size: 14px;
    }

    .lkt-elements-toolbar-group {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
</style>
