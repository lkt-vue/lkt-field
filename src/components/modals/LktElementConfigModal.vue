<script setup lang="ts">
    import { computed, ref } from 'vue';
    import {
        AccordionConfig,
        AccordionType, BoxConfig, ensureFieldConfig,
        FieldConfig,
        FieldElementConfig,
        FieldElementType,
        FieldType,
        ItemCrudConfig,
        ItemCrudMode,
        ItemCrudView, LktSettings,
        OptionConfig,
    } from 'lkt-vue-kernel';
    import LktField from '@/lib-components/LktField.vue';
    import { kebabCaseToCamelCase, ucfirst } from 'lkt-string-tools';
    import TextElementEditor from '@/components/elements/TextElementEditor.vue';
    import ElementComponent from '@/components/elements/ElementComponent.vue';
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

    const calculatedHasHeader = [FieldElementType.LktBox, FieldElementType.LktAccordion].includes(editableConfig.value.type);
    const calculatedHasIcon = [FieldElementType.LktBox, FieldElementType.LktAccordion, FieldElementType.LktIcon].includes(editableConfig.value.type);
    const calculatedHasLayout = [FieldElementType.LktBox, FieldElementType.LktAccordion, FieldElementType.LktLayout].includes(editableConfig.value.type);
    const calculatedHasImage = [FieldElementType.LktImage].includes(editableConfig.value.type);

    const accordionTypeOptions = <Array<OptionConfig>>[
        {
            value: AccordionType.Auto,
            label: 'Auto',
        },
        {
            value: AccordionType.Always,
            label: 'Always',
        },
        {
            value: AccordionType.Lazy,
            label: 'Lazy',
        },
        {
            value: AccordionType.Ever,
            label: 'Ever',
        },
    ];

    const layoutTypeOptions:OptionConfig[] = [
        {
            value: 'grid',
            label: 'Grid',
        },
        {
            value: 'flex',
            label: 'Flex',
        }
    ];

    const amountOfItemsOptions:OptionConfig[] = [
        {
            value: 'lkt-grid-1',
            label: 'Default: 1',
        },
        {
            value: 'lkt-grid-2',
            label: 'Default: 2',
        },
        {
            value: 'lkt-grid-3',
            label: 'Default: 3',
        },
        {
            value: 'lkt-grid-4',
            label: 'Default: 4',
        },
        {
            value: 'lkt-grid-5',
            label: 'Default: 5',
        },
        {
            value: 'lkt-grid-1--from-768',
            label: 'From 768px: 1',
        },
        {
            value: 'lkt-grid-2--from-768',
            label: 'From 768px: 2',
        },
        {
            value: 'lkt-grid-3--from-768',
            label: 'From 768px: 3',
        },
        {
            value: 'lkt-grid-4--from-768',
            label: 'From 768px: 4',
        },
        {
            value: 'lkt-grid-5--from-768',
            label: 'From 768px: 5',
        },
    ];

    const computedCustomClassField = computed((): FieldConfig|undefined => {
        let config = {};
        switch (editableConfig.value.type) {
            case FieldElementType.LktBox:
                config = LktSettings.defaultFieldLktBoxElementCustomClassField;
                break;

            case FieldElementType.LktAccordion:
                config = LktSettings.defaultFieldLktAccordionElementCustomClassField;
                break;

            case FieldElementType.LktIcon:
                config = LktSettings.defaultFieldLktIconElementCustomClassField;
                break;

            case FieldElementType.LktImage:
                config = LktSettings.defaultFieldLktImageElementCustomClassField;
                break;
        }

        return Object.keys(config).length > 0
            ? ensureFieldConfig(config, LktSettings.defaultFieldElementCustomClassField)
            : undefined;
    });

    const computedTitle = computed(() => {
        return ucfirst(kebabCaseToCamelCase(editableConfig.value.type)) + ' Config';
    })
</script>

<template>
    <lkt-item-crud
        class="lkt-field-element-config-modal"
        v-model="editableConfig"
        v-bind="<ItemCrudConfig>{
            mode: ItemCrudMode.Update,
            view: ItemCrudView.Modal,
            editing: true,
            perms: ['update'],
            title: computedTitle,
            modalConfig: {
                modalName,
                modalKey,
                zIndex,
                title: computedTitle
            },
            updateButton: false
        }"
    >
        <template #item="{item}">
            <div class="lkt-grid-1 lkt-grid-3--from-960">
                <div class="lkt-grid-1">
                    <element-component :element="element"/>

                    <template
                        v-for="lang in languages">
                        <lkt-accordion
                            v-if="lang !== currentLang"
                            v-bind="<AccordionConfig>{
                                type: AccordionType.Auto,
                                title: lang
                            }"
                        >
                            <element-component :element="element" :lang="lang"/>
                        </lkt-accordion>
                    </template>
                </div>
                <div class="lkt-grid-1 lkt-grid-column-start-4--from-960">
                    <lkt-accordion
                        v-bind="<AccordionConfig>{
                        type: AccordionType.Auto,
                        title: 'Config'
                    }"
                    >
                        <div class="lkt-grid-1">

                            <lkt-field
                                v-if="computedCustomClassField"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Select,
                                    ...computedCustomClassField,
                                    canClear: true
                                }"
                                v-model="item.props.class"
                            />

                            <lkt-field
                                v-if="calculatedHasHeader"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Switch,
                                    label: 'Has header',
                                }"
                                v-model="item.config.hasHeader"
                            />
                            <lkt-field
                                v-if="calculatedHasIcon"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Switch,
                                    label: 'Has icon',
                                }"
                                v-model="item.config.hasIcon"
                            />
                            <lkt-field
                                v-if="calculatedHasIcon"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Text,
                                    label: 'Icon',
                                }"
                                v-model="item.props.icon"
                                :disabled="!item.config.hasIcon"
                            />


                            <lkt-field
                                v-if="calculatedHasImage"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Image,
                                    label: 'Image',
                                }"
                                v-model="item.props.src"
                            />

                            <lkt-box
                                v-if="element.type === FieldElementType.LktAccordion"
                                v-bind="<AccordionConfig>{
                                    type: AccordionType.Auto,
                                    title: 'Accordion Config'
                                }"
                            >
                                <div class="lkt-grid-1">
                                    <lkt-field
                                        v-bind="<FieldConfig>{
                                            type: FieldType.Select,
                                            label: 'Type',
                                            options: accordionTypeOptions,
                                        }"
                                        v-model="item.props.type"
                                    />
                                </div>
                            </lkt-box>

                        </div>
                    </lkt-accordion>


                    <lkt-accordion
                        v-if="calculatedHasLayout"
                        v-bind="<AccordionConfig>{
                        type: AccordionType.Auto,
                        title: 'Grid Config'
                    }"
                    >
                        <div class="lkt-grid-1">
                            <lkt-field
                                v-bind="<FieldConfig>{
                                    type: FieldType.Select,
                                    label: 'Type',
                                    options: layoutTypeOptions,
                                }"
                                v-model="item.layout.type"
                            />

                            <lkt-box
                                v-bind="<AccordionConfig>{
                                    type: AccordionType.Auto,
                                    title: 'Responsive configuration'
                                }"
                            >
                                <div class="lkt-grid-1">
                                    <lkt-field
                                        v-bind="<FieldConfig>{
                                            type: FieldType.Select,
                                            label: 'Items per row (based on device width)',
                                            options: amountOfItemsOptions,
                                            multiple: true,
                                            searchable: true,
                                        }"
                                        v-model="item.layout.amountOfItems"
                                    />
                                </div>
                            </lkt-box>

                        </div>
                    </lkt-accordion>
                </div>
            </div>
        </template>
    </lkt-item-crud>
</template>