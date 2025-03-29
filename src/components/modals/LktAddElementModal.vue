<script setup lang="ts">
    import { ref } from 'vue';
    import {
        AccordionConfig,
        AccordionType,
        ButtonConfig,
        FieldElementConfig,
        FieldElementType,
        getDefaultLktAccordionElement,
        getDefaultLktAnchorElement,
        getDefaultLktBoxElement,
        getDefaultLktButtonElement,
        getDefaultLktHeaderElement,
        getDefaultLktIconElement,
        getDefaultLktImageElement,
        getDefaultLktLayoutElement,
        getDefaultTextElement,
        LktObject,
        ModalConfig,
    } from 'lkt-vue-kernel';
    import { closeModal } from 'lkt-modal';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        items: LktObject[]
        element: FieldElementConfig
        onUpdate: Function
        onAppend: Function
        index: number
        addingChildren?: boolean
    }>(), {
        modalName: '',
        modalKey: '_',
        zIndex: 500,
    });

    const editableConfig = ref(props.element);
    const editableItems = ref(props.items);
    const appendIndex = ref(props.index + 1);
    const childrenIndex = ref(props.index);
    const onClickUpdate = () => {
        props.onUpdate(editableConfig.value);
        closeModal(props.modalName, props.modalKey);
    };

    const doReadAddElement = (element: FieldElementConfig) => {
        if (props.addingChildren) {
            if (!Array.isArray(editableItems.value[childrenIndex.value].children)){
                editableItems.value[childrenIndex.value].children = [];
            }
            editableItems.value[childrenIndex.value].children.push(element);

        } else {
            editableItems.value.splice(appendIndex.value, 0, element);
        }
        ++appendIndex.value;
        props.onAppend();
    }

    const doAddElement = (element: string) => {
        switch (element) {
            case FieldElementType.LktBox:
                doReadAddElement(getDefaultLktBoxElement());
                break;

            case FieldElementType.LktAccordion:
                doReadAddElement(getDefaultLktAccordionElement());
                break;

            case FieldElementType.LktIcon:
                doReadAddElement(getDefaultLktIconElement());
                break;

            case FieldElementType.LktImage:
                doReadAddElement(getDefaultLktImageElement());
                break;

            case FieldElementType.LktAnchor:
                doReadAddElement(getDefaultLktAnchorElement());
                break;

            case FieldElementType.LktButton:
                doReadAddElement(getDefaultLktButtonElement());
                break;

            case FieldElementType.LktLayout:
                doReadAddElement(getDefaultLktLayoutElement());
                break;

            case FieldElementType.LktHeader:
                doReadAddElement(getDefaultLktHeaderElement());
                break;

            case FieldElementType.Text:
                doReadAddElement(getDefaultTextElement());
                break;
        }
    };
</script>

<template>
    <lkt-modal
        v-bind="<ModalConfig>{
            modalName,
            modalKey,
            zIndex,
            title: 'LktBox Config',
        }"
    >
        <div class="lkt-grid-1">
            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Always,
                    title: 'Content'
                }"
            >
                <div class="lkt-grid-3">
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'Text',
                            events: {
                                click: () => {
                                    doAddElement('text');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'LktHeder',
                            events: {
                                click: () => {
                                    doAddElement('lkt-header');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'LktImage',
                            events: {
                                click: () => {
                                    doAddElement('lkt-image');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'LktIcon',
                            events: {
                                click: () => {
                                    doAddElement('lkt-icon');
                                }
                            }
                        }"
                    />
                </div>
            </lkt-accordion>

            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Always,
                    title: 'Containers'
                }"
            >
                <div class="lkt-grid-3">
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'LktBox',
                            events: {
                                click: () => {
                                    doAddElement('lkt-box');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'LktAccordion',
                            events: {
                                click: () => {
                                    doAddElement('lkt-accordion');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'LktLayout',
                            events: {
                                click: () => {
                                    doAddElement('lkt-layout');
                                }
                            }
                        }"
                    />
                </div>
            </lkt-accordion>

            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Auto,
                    title: 'Actions'
                }"
            >
                <div class="lkt-grid-3">
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'LktAnchor',
                            events: {
                                click: () => {
                                    doAddElement('lkt-anchor');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-angle-bottom',
                            text: 'LktButton',
                            events: {
                                click: () => {
                                    doAddElement('lkt-button');
                                }
                            }
                        }"
                    />
                </div>
            </lkt-accordion>
        </div>
    </lkt-modal>
</template>