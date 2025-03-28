<script setup lang="ts">
    import { ref } from 'vue';
    import {
        AccordionConfig,
        AccordionType,
        BoxConfig,
        FieldElementConfig,
        ItemCrudConfig,
        ItemCrudMode,
        ItemCrudView,
    } from 'lkt-vue-kernel';
    import TextElementEditor from '@/components/elements/TextElementEditor.vue';
    import { getAvailableLanguages, getCurrentLanguage } from 'lkt-i18n';

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

    const languages = getAvailableLanguages(),
        currentLang = getCurrentLanguage();
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
                <lkt-box
                    v-bind="<BoxConfig>{
                        title: 'English (Current Lang)'
                    }"
                >
                    <text-element-editor v-model="element.text" disabled/>
                </lkt-box>

                <template
                    v-for="lang in languages">
                        <lkt-accordion
                            v-if="lang !== currentLang"
                            v-bind="<AccordionConfig>{
                                type: AccordionType.Auto,
                                title: lang
                            }"
                        >
                            <text-element-editor v-model="element.translations[lang]"/>
                        </lkt-accordion>
                </template>
            </div>
        </template>
    </lkt-item-crud>
</template>