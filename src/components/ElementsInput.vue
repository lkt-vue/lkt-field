<template>
    <div class="wysiwyg-container">
        <!-- Barra de herramientas y demás elementos del editor -->
        <div class="toolbar">
            <button @click="applyFormat('bold')">Negrita</button>
            <button @click="applyFormat('italic')">Cursiva</button>
            <button @click="applyFormat('underline')">Subrayado</button>

            <!-- Nuevas opciones de formato -->
            <button @click="applyFormat('strikeThrough')">Tachado</button>
            <button @click="applyFormat('subscript')">Subíndice</button>
            <button @click="applyFormat('superscript')">Superíndice</button>

            <!-- Nuevas opciones de color -->
            <input type="color" @input="changeTextColor" title="Color del texto"/>
            <input type="color" @input="changeBackgroundColor" title="Color de fondo"/>

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
        </div>

        <!-- Renderizamos el componente intermedio para gestionar los elementos -->
        <ComponentManager :elements="elements" @delete-element="deleteElement" @add-element="onAddElement" />
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import ComponentManager from './elements/ComponentManager.vue'

    // Definir el tipo para los elementos en el editor
    interface Element {
        type: 'customTag' | 'image' | 'text';
        component?: string;
        props?: Record<string, any>;
        text?: string;
    }

    const elements = ref<Element[]>([
        { type: 'text', text: 'Escribe algo aquí o ' },
        { type: 'customTag', component: 'CustomTag', props: { text: 'un componente dinámico' } },
        { type: 'text', text: ' entre el texto.' }
    ])

    // Historial de cambios
    const history = ref<Element[][]>([]) // Almacenamos un arreglo de estados anteriores
    let historyIndex = ref(-1) // Apunta al estado actual en el historial

    // Guardar el estado en el historial
    const saveHistory = () => {
        history.value = history.value.slice(0, historyIndex.value + 1) // Eliminar los futuros estados cuando se realice un cambio
        history.value.push([...elements.value]) // Guardar una copia del estado actual
        historyIndex.value = history.value.length - 1 // Apuntar al último estado
    }

    const onAddElement = () => {
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Funciones para agregar componentes
    const addCustomTag = () => {
        const placeholder = "Etiqueta personalizada"
        elements.value.push({ type: 'customTag', component: "CustomTag", props: { text: placeholder } })
        saveHistory() // Guardamos el estado después de la modificación
    }

    const addImage = () => {
        const src = prompt("Ingrese la URL de la imagen:")
        if (src) {
            elements.value.push({ type: 'customTag', component: "ImageComponent", props: { src } })
            saveHistory() // Guardamos el estado después de la modificación
        }
    }

    const addTable = () => {
        elements.value.push({ type: 'customTag', component: "TableComponent", props: {} })
        saveHistory() // Guardamos el estado después de la modificación
    }

    const addForm = () => {
        elements.value.push({ type: 'customTag', component: "FormComponent", props: {} })
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Eliminar un componente de la lista
    const deleteElement = (index: number) => {
        elements.value.splice(index, 1)
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Funciones de formato de texto
    const applyFormat = (command: string) => {
        document.execCommand(command, false)
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Cambiar color del texto
    const changeTextColor = (event: Event) => {
        const color = (event.target as HTMLInputElement).value;
        document.execCommand('foreColor', false, color);
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Cambiar color de fondo
    const changeBackgroundColor = (event: Event) => {
        const color = (event.target as HTMLInputElement).value;
        document.execCommand('backColor', false, color);
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Cambiar tamaño de la fuente
    const changeFontSize = (event: Event) => {
        const fontSize = (event.target as HTMLSelectElement).value;
        document.execCommand('fontSize', false, fontSize);
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Cambiar familia de fuente
    const changeFontFamily = (event: Event) => {
        const fontFamily = (event.target as HTMLSelectElement).value;
        document.execCommand('fontName', false, fontFamily);
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Alinear el texto
    const applyAlignment = (alignment: string) => {
        document.execCommand('justify' + alignment, false);
        saveHistory() // Guardamos el estado después de la modificación
    }

    // Funciones de deshacer/rehacer
    const undo = () => {
        if (historyIndex.value > 0) {
            historyIndex.value--
            elements.value = [...history.value[historyIndex.value]] // Restaurar el estado anterior
        }
    }

    const redo = () => {
        if (historyIndex.value < history.value.length - 1) {
            historyIndex.value++
            elements.value = [...history.value[historyIndex.value]] // Restaurar el siguiente estado
        }
    }

    // Insertar un enlace
    const insertLink = () => {
        const url = prompt('Ingrese la URL del enlace:')
        if (url) {
            document.execCommand('createLink', false, url)
            saveHistory() // Guardamos el estado después de la modificación
        }
    }
</script>

<style scoped>
    /* Estilos del editor */
    /*.wysiwyg-container {
        max-width: 600px;
        margin: 20px auto;
        font-family: Arial, sans-serif;
    }*/

    .toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 10px;
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
</style>
