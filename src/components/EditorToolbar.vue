<script setup lang="ts">

    import {
        ButtonConfig,
        FieldType,
        FieldConfig,
        FileBrowserConfig,
        WebElementConfig,
        OptionConfig,
    } from 'lkt-vue-kernel';
    import { ref, watch } from 'vue';

    const props = withDefaults(defineProps<{
        elements: WebElementConfig[]
        toolbarTop: number
        fileBrowserConfig?: FileBrowserConfig
    }>(), {});

    const pickedTextColor = ref('');
    const pickedBackgroundColor = ref('');

    // Historial de cambios
    const history = ref<WebElementConfig[][]>([]); // Almacenamos un arreglo de estados anteriores
    let historyIndex = ref(-1); // Apunta al estado actual en el historial

    // Guardar el estado en el historial
    const saveHistory = () => {
        history.value = history.value.slice(0, historyIndex.value + 1); // Eliminar los futuros estados cuando se realice un cambio
        history.value.push([...props.elements]); // Guardar una copia del estado actual
        historyIndex.value = history.value.length - 1; // Apuntar al último estado
    };

    const onAddElement = () => {
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Eliminar un componente de la lista
    const deleteElement = (index: number) => {
        props.elements.splice(index, 1);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    // Funciones de formato de texto
    const applyFormat = (command: string) => {
        document.execCommand(command, false);
        saveHistory(); // Guardamos el estado después de la modificación
    };

    const changeTextColor = (color: string) => {
            document.execCommand('foreColor', false, color);
            saveHistory();
        },
        changeBackgroundColor = (color: string) => {
            document.execCommand('backColor', false, color);
            saveHistory();
        };

    watch(pickedTextColor, changeTextColor);
    watch(pickedBackgroundColor, changeBackgroundColor);

    // Cambiar tamaño de la fuente
    const changeFontSize = (event: Event) => {
        // const fontSize = (event.target as HTMLSelectElement).value;
        // document.execCommand('styleWithCSS', true, null);
        // document.execCommand('fontSize', false, `24px`);

        const selection = window.getSelection();

        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);

            // Verifica si el rango ya está dentro de un <span> con font-size
            const parentElement = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
                ? range.commonAncestorContainer.parentNode
                : range.commonAncestorContainer;

            if (parentElement.tagName === 'SPAN' && parentElement.style.fontSize) {
                // Si ya es un span con fontSize, actualiza el tamaño
                parentElement.style.fontSize = '24px'; // Ajusta el tamaño deseado
            } else {
                // Si no hay span, crea uno nuevo y envuelve el contenido seleccionado
                const span = document.createElement('span');
                span.style.fontSize = '24px'; // Tamaño en píxeles
                try {
                    range.surroundContents(span);
                } catch (error) {
                    console.error("Error al envolver el contenido: ", error);
                    // En caso de nodos parcialmente seleccionados, puedes clonar el rango
                    const fragment = range.cloneContents();
                    span.appendChild(fragment);
                    range.deleteContents();
                    range.insertNode(span);
                }
            }
        }
        saveHistory(); // Guardamos el estado después de la modificación
    };

    const fontFamilies: Array<OptionConfig> = [
        {value: 'Arial', label: 'Arial'},
        {value: 'Courier New', label: 'Courier New'},
        {value: 'Georgia', label: 'Georgia'},
        {value: 'Times New Roman', label: 'Times New Roman'},
    ];

    // Cambiar familia de fuente
    const changeFontFamily = (event: Event, fontFamily: string) => {
        document.execCommand('fontName', false, fontFamily);
        saveHistory();
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
            if (node.nodeType === 1 && getComputedStyle(node).display === 'block') {
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
            props.elements = [...history.value[historyIndex.value]]; // Restaurar el estado anterior
        }
    };

    const redo = () => {
        if (historyIndex.value < history.value.length - 1) {
            historyIndex.value++;
            props.elements = [...history.value[historyIndex.value]]; // Restaurar el siguiente estado
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
</script>

<template>
    <div class="lkt-wysiwyg-toolbar lkt-tooltip" :style="{top: toolbarTop + 'px'}">
        <div class="lkt-elements-toolbar-group">
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-bold',
                }"
                @click="applyFormat('bold')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-italic',
                }"
                @click="applyFormat('italic')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-underline',
                }"
                @click="applyFormat('underline')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-strike',
                }"
                @click="applyFormat('strikeThrough')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-superscript',
                }"
                @click="applyFormat('superscript')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-subscript',
                }"
                @click="applyFormat('subscript')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-paragraph',
                }"
                @click="toggleWrapSelectionWithTag('p')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-align-left',
                }"
                @click="applyAlignment('left')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-align-center',
                }"
                @click="applyAlignment('center')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-align-right',
                }"
                @click="applyAlignment('right')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-list-bullet',
                }"
                @click="applyFormat('insertUnorderedList')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-list-numbered',
                }"
                @click="applyFormat('insertOrderedList')"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-link',
                }"
                @click="insertLink"
            />
            <lkt-field
                v-model="pickedTextColor"
                v-bind="<FieldConfig>{
                    type: FieldType.Color,
                }"
            />
            <lkt-field
                v-model="pickedBackgroundColor"
                v-bind="<FieldConfig>{
                    type: FieldType.Color,
                }"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-undo',
                }"
                @click="undo"
            />
            <lkt-button
                v-bind="<ButtonConfig>{
                    icon: 'lkt-icn-redo',
                }"
                @click="redo"
            />
            <lkt-field
                v-bind="<FieldConfig>{
                    type: FieldType.Select,
                    options: fontFamilies
                }"
                @change="changeFontFamily"
            />
        </div>

        <!-- Tamaño de fuente y tipo de fuente -->
        <select v-if="false" @change="changeFontSize($event)">
            <option value="3">Mediano</option>
            <option value="5">Grande</option>
            <option value="7">Extra Grande</option>
        </select>

        <lkt-button
            v-bind="<ButtonConfig>{
                text: 'Add element',
                icon: 'lkt-icn-more',
                modal: 'lkt-field-add-element-config',
                modalData: {
                    items: elements,
                    index: elements.length,
                    fileBrowserConfig,
                }
            }"
        />

        <lkt-button
            v-if="false"
            v-bind="<ButtonConfig>{
                text: 'File browser',
                icon: 'lkt-icn-more',
                modal: 'lkt-file-browser',
                modalData: {
                    fileBrowserConfig,
                }
            }"
        />
    </div>
</template>

<style lang="css">
    .lkt-elements-toolbar-group {
        display: inline-flex;
        gap: 5px;
    }

    .lkt-elements-toolbar-group .lkt-field.is-color {
        width: 100px;
        min-width: 100px;
    }
</style>