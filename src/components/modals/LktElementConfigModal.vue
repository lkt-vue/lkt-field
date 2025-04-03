<script setup lang="ts">
    import { computed, ref } from 'vue';
    import {
        AccordionConfig,
        AccordionType,
        ButtonConfig,
        ButtonType,
        ensureFieldConfig,
        FieldConfig,
        FieldType,
        ItemCrudConfig,
        ItemCrudMode,
        ItemCrudView,
        LktObject,
        LktSettings,
        OptionConfig, WebElement,
        WebElementLayoutType,
        WebElementType,
    } from 'lkt-vue-kernel';
    import LktField from '@/lib-components/LktField.vue';
    import { kebabCaseToCamelCase, ucfirst } from 'lkt-string-tools';
    import ElementComponent from '@/components/elements/ElementComponent.vue';
    import { getAvailableLanguages, getCurrentLanguage } from 'lkt-i18n';
    import { closeModal } from 'lkt-modal';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        element: WebElement
        parent?: WebElement
        parentChildren: WebElement[]
        indexInParentChildren: number
        onUpdate: Function
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
    });

    const doRemoveElement = () => {
        props.parentChildren.splice(props.indexInParentChildren, 1);
        closeModal(props.modalName, props.modalKey);
    }

    const resetCloneId = (clone: WebElement) => {
        clone.id = 0;
        clone.children?.forEach(child => resetCloneId(child));
        return clone;
    }

    const getClone = () => {
        let r = JSON.parse(JSON.stringify(props.element));
        console.log('resetCloneId(r): ', resetCloneId(r));
        return resetCloneId(r);
    }

    const doDuplicateBefore = () => {
        props.parentChildren.splice(props.indexInParentChildren - 1, 0, getClone());
        props.indexInParentChildren += 1;
    }

    const doDuplicateAfter = () => {
        props.parentChildren.splice(props.indexInParentChildren + 1, 0, getClone());
    }

    const editableConfig = ref(<WebElement>props.element);

    const languages = getAvailableLanguages(),
        currentLang = getCurrentLanguage();

    const calculatedHasHeader = [WebElementType.LktLayoutBox, WebElementType.LktLayoutAccordion, WebElementType.LktTextBox, WebElementType.LktTextAccordion].includes(editableConfig.value.type),
        calculatedHasIcon = [WebElementType.LktLayoutBox, WebElementType.LktLayoutAccordion, WebElementType.LktTextBox, WebElementType.LktTextAccordion, WebElementType.LktIcon].includes(editableConfig.value.type),
        calculatedHasLayout = [WebElementType.LktLayoutBox, WebElementType.LktLayoutAccordion, WebElementType.LktLayout].includes(editableConfig.value.type),
        calculatedHasImage = [WebElementType.LktImage].includes(editableConfig.value.type),
        calculatedHasAccordionConfig = [WebElementType.LktLayoutAccordion, WebElementType.LktTextAccordion].includes(editableConfig.value.type),
        calculatedHasChildren = [WebElementType.LktLayoutAccordion, WebElementType.LktLayoutBox, WebElementType.LktLayout].includes(editableConfig.value.type),
        calculatedHasParentLayout = [WebElementLayoutType.FlexRow, WebElementLayoutType.FlexRows].includes(props.parent?.layout?.type);

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
            value: WebElementLayoutType.Grid,
            label: 'Grid',
        },
        {
            value: WebElementLayoutType.FlexRow,
            label: 'Flex Row',
        },
        {
            value: WebElementLayoutType.FlexRows,
            label: 'Flex Rows',
        },
        {
            value: WebElementLayoutType.FlexColumn,
            label: 'Flex Column',
        }
    ];

    const amountOfItemsOptions:OptionConfig[] = [
        {
            value: '1',
            label: 'Default: 1',
        },
        {
            value: '2',
            label: 'Default: 2',
        },
        {
            value: '3',
            label: 'Default: 3',
        },
        {
            value: '4',
            label: 'Default: 4',
        },
        {
            value: '5',
            label: 'Default: 5',
        },
        {
            value: '1--from-768',
            label: 'From 768px: 1',
        },
        {
            value: '2--from-768',
            label: 'From 768px: 2',
        },
        {
            value: '3--from-768',
            label: 'From 768px: 3',
        },
        {
            value: '4--from-768',
            label: 'From 768px: 4',
        },
        {
            value: '5--from-768',
            label: 'From 768px: 5',
        },
    ];

    const amountOfFlexRowItemsOptions:OptionConfig[] = [
        {
            value: 'lkt-flex-row-1',
            label: 'Default: 1',
        },
        {
            value: 'lkt-flex-row-2',
            label: 'Default: 2',
        },
        {
            value: 'lkt-flex-row-3',
            label: 'Default: 3',
        },
        {
            value: 'lkt-flex-row-4',
            label: 'Default: 4',
        },
        {
            value: 'lkt-flex-row-5',
            label: 'Default: 5',
        },
        {
            value: 'lkt-flex-row-1--from-768',
            label: 'From 768px: 1',
        },
        {
            value: 'lkt-flex-row-2--from-768',
            label: 'From 768px: 2',
        },
        {
            value: 'lkt-flex-row-3--from-768',
            label: 'From 768px: 3',
        },
        {
            value: 'lkt-flex-row-4--from-768',
            label: 'From 768px: 4',
        },
        {
            value: 'lkt-flex-row-5--from-768',
            label: 'From 768px: 5',
        },
    ];

    const flexColumnsOptions:OptionConfig[] = [
        {
            value: 'lkt-flex-col-1',
            label: 'Default: 1',
        },
        {
            value: 'lkt-flex-col-2',
            label: 'Default: 2',
        },
        {
            value: 'lkt-flex-col-3',
            label: 'Default: 3',
        },
        {
            value: 'lkt-flex-col-4',
            label: 'Default: 4',
        },
        {
            value: 'lkt-flex-col-5',
            label: 'Default: 5',
        },
        {
            value: 'lkt-flex-col-6',
            label: 'Default: 6',
        },
        {
            value: 'lkt-flex-col-7',
            label: 'Default: 7',
        },
        {
            value: 'lkt-flex-col-8',
            label: 'Default: 8',
        },
        {
            value: 'lkt-flex-col-9',
            label: 'Default: 9',
        },
        {
            value: 'lkt-flex-col-10',
            label: 'Default: 10',
        },
        {
            value: 'lkt-flex-col-11',
            label: 'Default: 11',
        },
        {
            value: 'lkt-flex-col-12',
            label: 'Default: 12',
        },
        {
            value: 'lkt-flex-col-1--from-768',
            label: 'From 768px: 1',
        },
        {
            value: 'lkt-flex-col-2--from-768',
            label: 'From 768px: 2',
        },
        {
            value: 'lkt-flex-col-3--from-768',
            label: 'From 768px: 3',
        },
        {
            value: 'lkt-flex-col-4--from-768',
            label: 'From 768px: 4',
        },
        {
            value: 'lkt-flex-col-5--from-768',
            label: 'From 768px: 5',
        },
    ];

    const alignItemsOptions:OptionConfig[] = [
        {
            value: 'lkt-align-items-start',
            label: 'Default: Start',
        },
        {
            value: 'lkt-align-items-center',
            label: 'Default: Center',
        },
        {
            value: 'lkt-align-items-end',
            label: 'Default: End',
        },
    ];

    const justifyContentOptions:OptionConfig[] = [
        {
            value: 'lkt-justify-content-stretch',
            label: 'Default: Stretch',
        },
        {
            value: 'lkt-justify-content-center',
            label: 'Default: Center',
        },
        {
            value: 'lkt-justify-content-space-between',
            label: 'Default: Space Between',
        },
        {
            value: 'lkt-justify-content-space-around',
            label: 'Default: Space Around',
        },
        {
            value: 'lkt-justify-content-space-evenly',
            label: 'Default: Space Evenly',
        },
        {
            value: 'lkt-justify-content-start',
            label: 'Default: Start',
        },
        {
            value: 'lkt-justify-content-end',
            label: 'Default: End',
        },
    ];

    const _filterLayoutMediaQueryOption = (haystack: OptionConfig[], needle: OptionConfig) => {
        if (haystack.length > 0) {

            let needleValue = String(needle.value);

            let optionSearch = '';
            if (needleValue.includes('--from')) optionSearch = '--' + needleValue.split('--')[1];
            if (needleValue.includes('--to')) optionSearch = '--' + needleValue.split('--')[1];

            // Filter to show only picked media selector
            if (optionSearch !== '') {
                let comparedValue = haystack.find(z => String(z).includes(optionSearch));
                if (comparedValue) {
                    //@ts-ignore
                    return comparedValue === needle.value;
                }
            }

            let comparedValue = haystack.find(z => !String(z).includes('--'));
            if (comparedValue) {
                //@ts-ignore
                return comparedValue === needleValue || needleValue.includes('--');
            }
        }

        return true;
    }


    const filterLayoutMediaOptions = (option: LktObject) => {
        return _filterLayoutMediaQueryOption(
            props.element.layout?.amountOfItems ?? [],
            option,
        );
    }

    const filterLayoutAlignItemsOptions = (option: LktObject) => {
        return _filterLayoutMediaQueryOption(
            props.element.layout?.alignItems ?? [],
            option,
        );
    }

    const filterLayoutJustifyContentOptions = (option: LktObject) => {
        return _filterLayoutMediaQueryOption(
            props.element.layout?.justifyContent ?? [],
            option,
        );
    }

    const filterLayoutColumnsOptions = (option: LktObject) => {
        return _filterLayoutMediaQueryOption(
            props.element.layout?.columns ?? [],
            option,
        );
    }

    const computedCustomClassField = computed((): FieldConfig|undefined => {
        let config = {};
        switch (editableConfig.value.type) {
            case WebElementType.LktLayoutBox:
            case WebElementType.LktTextBox:
                config = LktSettings.defaultFieldLktBoxElementCustomClassField;
                break;

            case WebElementType.LktLayoutAccordion:
            case WebElementType.LktTextAccordion:
                config = LktSettings.defaultFieldLktAccordionElementCustomClassField;
                break;

            case WebElementType.LktIcon:
                config = LktSettings.defaultFieldLktIconElementCustomClassField;
                break;

            case WebElementType.LktImage:
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

    // watch(() => props.element.layout.type, (newVal: WebElementLayoutType, oldVal: WebElementLayoutType) => {
    //     if (oldVal === WebElementLayoutType.Grid || newVal === WebElementLayoutType.Grid) {
    //         props.element.layout.amountOfItems?.splice(0, props.element.layout.amountOfItems?.length);
    //     }
    // })
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
            <div class="lkt-flex-row">
                <div class="lkt-flex-col-9 lkt-grid-1">
                    <element-component :element="element" is-preview :parent-children="parentChildren" :index="indexInParentChildren" :can-render-actions="false"/>

                    <template
                        v-for="lang in languages">
                        <lkt-accordion
                            v-if="lang !== currentLang"
                            v-bind="<AccordionConfig>{
                                type: AccordionType.Auto,
                                title: lang
                            }"
                        >
                            <element-component :element="element" :lang="lang" is-preview :parent-children="parentChildren" :index="indexInParentChildren" :can-render-actions="false"/>
                        </lkt-accordion>
                    </template>
                </div>
                <div class="lkt-flex-col-3 lkt-grid-1">

                    <lkt-button
                        v-if="calculatedHasChildren"
                        v-bind="<ButtonConfig>{
                            text: 'Add children',
                            icon: 'lkt-icn-more',
                            modal: 'lkt-field-add-element-config',
                            modalData: {
                                items: editableConfig.children,
                                index: editableConfig.children?.length,
                                element,
                                addingChildren: true,
                            }
                        }"
                    />
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
                        </div>
                    </lkt-accordion>

                    <lkt-accordion
                        v-if="calculatedHasAccordionConfig"
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
                    </lkt-accordion>


                    <lkt-accordion
                        v-if="calculatedHasLayout || calculatedHasParentLayout"
                        v-bind="<AccordionConfig>{
                            type: AccordionType.Auto,
                            title: 'Layout Config'
                        }"
                    >
                        <div class="lkt-grid-1">
                            <lkt-field
                                v-if="calculatedHasLayout"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Select,
                                    label: 'Type',
                                    options: layoutTypeOptions,
                                }"
                                v-model="item.layout.type"
                            />
                            <lkt-field
                                v-if="calculatedHasLayout && item.layout.type !== WebElementLayoutType.FlexColumn"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Select,
                                    label: element.layout.type === WebElementLayoutType.Grid ? 'Items per row (based on device width)' : 'Column size (based on device width)',
                                    options: amountOfItemsOptions,
                                    multiple: true,
                                    searchable: true,
                                    canClear: true,
                                    optionsConfig: {
                                        filter: filterLayoutMediaOptions
                                    }
                                }"
                                v-model="item.layout.amountOfItems"
                            />
                            <lkt-field
                                v-if="calculatedHasLayout"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Select,
                                    label: 'Align items',
                                    options: alignItemsOptions,
                                    multiple: true,
                                    searchable: true,
                                    optionsConfig: {
                                        filter: filterLayoutAlignItemsOptions
                                    }
                                }"
                                v-model="item.layout.alignItems"
                            />
                            <lkt-field
                                v-if="calculatedHasLayout"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Select,
                                    label: 'Justify content',
                                    options: justifyContentOptions,
                                    multiple: true,
                                    searchable: true,
                                    optionsConfig: {
                                        filter: filterLayoutJustifyContentOptions
                                    }
                                }"
                                v-model="item.layout.justifyContent"
                            />
                            <lkt-field
                                v-if="calculatedHasParentLayout"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Select,
                                    label: 'Columns Reserved',
                                    options: flexColumnsOptions,
                                    multiple: true,
                                    searchable: true,
                                    optionsConfig: {
                                        filter: filterLayoutColumnsOptions
                                    }
                                }"
                                v-model="item.layout.columns"
                            />

                        </div>
                    </lkt-accordion>

                    <lkt-button
                        v-bind="<ButtonConfig>{
                            text: 'Duplicate',
                            icon: 'lkt-icn-more',
                            type: ButtonType.Split,
                        }"
                    >
                        <template #split="{doClose}">
                            <div class="lkt-grid-1">
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        text: 'Before',
                                        events: {
                                            click: doDuplicateBefore
                                        }
                                    }"
                                />
                                <lkt-button
                                    v-bind="<ButtonConfig>{
                                        text: 'After',
                                        events: {
                                            click: doDuplicateAfter
                                        }
                                    }"
                                />
                            </div>
                        </template>
                    </lkt-button>

                    <lkt-button
                        v-bind="<ButtonConfig>{
                            text: 'Remove element',
                            icon: 'lkt-icn-less',
                            events: {
                                click: doRemoveElement
                            }
                        }"
                    />
                </div>
            </div>
        </template>
    </lkt-item-crud>
</template>