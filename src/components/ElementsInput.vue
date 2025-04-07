<script lang="ts" setup>
    import { defineEmits, defineProps, ref, watch } from 'vue';
    import ComponentManager from './elements/ComponentManager.vue';
    import { FileBrowserConfig, WebElement, WebElementConfig } from 'lkt-vue-kernel';
    import EditorToolbar from '@/components/EditorToolbar.vue';

    const props = withDefaults(defineProps<{
        modelValue: WebElementConfig[]
        layoutSelector?: string
        fileBrowserConfig?: FileBrowserConfig
    }>(), {
        modelValue: () => [],
    });

    const elements = ref(<WebElement[]>[]);

    if (props.modelValue.length > 0) {
        elements.value = props.modelValue?.map(z => new WebElement(z));
    }

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
    const history = ref<WebElement[][]>([]); // Almacenamos un arreglo de estados anteriores
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

        <editor-toolbar :elements="elements" :toolbar-top="toolbarTop" :file-browser-config="fileBrowserConfig"/>

        <!-- Renderizamos el componente intermedio para gestionar los elementos -->
        <ComponentManager
            v-model="elements"
            :file-browser-config="fileBrowserConfig"
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
