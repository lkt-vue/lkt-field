<script lang="ts" setup>
    import { defineEmits, defineProps, nextTick, ref, watch } from 'vue';
    import ComponentManager from './elements/ComponentManager.vue';
    import { ButtonConfig, FieldElementConfig, LktObject } from 'lkt-vue-kernel';

    const props = defineProps({
        modelValue: {
            type: Array as () => FieldElementConfig[],
            required: true
        },
        layoutSelector: {
            type: String,
        }
    });
    const elements = ref(props.modelValue);

    // const elements = ref<FieldElementConfig[]>([
    //     { type: 'text', text: 'Escribe algo aquí o ' },
    //     {
    //         type: 'lkt-box',
    //         props: {
    //             header: 'cabecera de box',
    //             text: 'un componente dinámico',
    //             icon: 'lkt-icn-upload',
    //         },
    //         config: {
    //             hasHeader: true,
    //             hasIcon: true,
    //         },
    //         children: [],
    //         layout: {
    //             type: 'grid',
    //             amountOfItems: [],
    //         }
    //     },
    //     {
    //         type: 'lkt-accordion',
    //         props: {
    //             text: 'contenido del acordeón',
    //             header: 'título del acordeón',
    //             type: 'auto',
    //             toggleMode: 'display',
    //             icon: 'lkt-icn-upload',
    //         },
    //         config: {
    //             hasIcon: true,
    //         },
    //         children: [],
    //         layout: {
    //             type: 'grid',
    //             amountOfItems: [],
    //         }
    //     },
    //     {
    //         type: 'lkt-image',
    //         props: {
    //             text: 'Dr. Evil',
    //             src: 'https://i.pinimg.com/736x/d4/dc/7a/d4dc7a642bb490972c3443af25e0d179.jpg',
    //         },
    //         config: {
    //             hasIcon: true,
    //         },
    //     },
    //     {
    //         type: 'lkt-icon',
    //         props: {
    //             text: 'Texto del icono',
    //             icon: 'lkt-icn-download',
    //         },
    //         config: {
    //             hasIcon: true,
    //         },
    //     },
    //     {
    //         type: 'lkt-button',
    //         props: {
    //             text: 'Texto del botón',
    //             icon: 'lkt-icn-download',
    //         },
    //         config: {
    //             hasIcon: true,
    //         },
    //     },
    //     {
    //         type: 'lkt-anchor',
    //         props: {
    //             text: 'Texto del anchor',
    //             icon: 'lkt-icn-download',
    //         },
    //         config: {
    //             hasIcon: true,
    //         },
    //     },
    //     { type: 'customTag', component: 'CustomTag', props: { text: 'un componente dinámico' } },
    //     { type: 'text', text: ' entre el texto.' },
    // ]);

    const emit = defineEmits([
        'update:modelValue',
    ]);

    watch(elements, (v) => {
        emit('update:modelValue', v);
    })

    // Historial de cambios
    const history = ref<FieldElementConfig[][]>([]); // Almacenamos un arreglo de estados anteriores
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

    // Funciones para agregar componentes
    const addCustomTag = () => {
        const placeholder = 'Etiqueta personalizada';
        elements.value.push({ type: 'customTag', component: 'CustomTag', props: { text: placeholder } });
        saveHistory(); // Guardamos el estado después de la modificación
    };

    const addImage = () => {
        const src = prompt('Ingrese la URL de la imagen:');
        if (src) {
            elements.value.push({ type: 'customTag', component: 'ImageComponent', props: { src } });
            saveHistory(); // Guardamos el estado después de la modificación
        }
    };

    const addTable = () => {
        elements.value.push({ type: 'customTag', component: 'TableComponent', props: {} });
        saveHistory(); // Guardamos el estado después de la modificación
    };

    const addForm = () => {
        elements.value.push({ type: 'customTag', component: 'FormComponent', props: {} });
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
        <!-- Barra de herramientas y demás elementos del editor -->
        <div class="lkt-wysiwyg-toolbar lkt-tooltip" :style="{top: toolbarTop + 'px'}">
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
    /* Estilos del editor */
    /*.wysiwyg-container {
        max-width: 600px;
        margin: 20px auto;
        font-family: Arial, sans-serif;
    }*/

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
