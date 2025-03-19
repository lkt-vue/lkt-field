<script setup lang="ts">
    import { ref } from 'vue';
    import {
        Accordion,
        AccordionConfig,
        AccordionType, Box, BoxConfig,
        ButtonConfig,
        getDefaultValues, Icon, IconConfig, Image, ImageConfig,
        LktObject,
        ModalConfig,
    } from 'lkt-vue-kernel';
    import { closeModal } from 'lkt-modal';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        items: LktObject[]
        element: LktObject
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

    const getDefaultTextElement = (text: string = 'Time to create') => {
            return {
                type: 'text',
                text,
            };
        },
        getDefaultLktBoxElement = () => {
            return {
                type: 'lkt-box',
                props: {
                    ...getDefaultValues(Box),
                    ...<BoxConfig>{
                        header: 'Title goes here',
                        text: 'Content goes here',
                    },
                },
                config: {
                    hasHeader: true,
                    hasIcon: true,
                },
                children: [
                    getDefaultTextElement('Content goes here'),
                ],
            };
        },
        getDefaultLktAccordionElement = () => {
            return {
                type: 'lkt-accordion',
                props: {
                    ...getDefaultValues(Accordion),
                    ...<AccordionConfig>{
                        header: 'Title goes here',
                        text: 'Content goes here',
                    },
                },
                config: {
                    hasHeader: true,
                    hasIcon: true,
                },
                children: [
                    getDefaultTextElement('Content goes here'),
                ],
            }
        },
        getDefaultLktIconElement = () => {
            return {
                type: 'lkt-icon',
                props: {
                    ...getDefaultValues(Icon),
                    ...<IconConfig>{
                        text: 'Content goes here',
                    },
                },
                config: {
                    hasHeader: true,
                    hasIcon: true,
                },
            }
        },
        getDefaultLktImageElement = () => {
            return {
                type: 'lkt-image',
                props: {
                    ...getDefaultValues(Image),
                    ...<ImageConfig>{
                        text: 'Image description goes here',
                    },
                },
                config: {
                    hasHeader: true,
                    hasIcon: true,
                },
            }
        };

    const doAddElement = (element: string) => {
        switch (element) {
            case 'lkt-box':
                if (props.addingChildren) {
                    if (!Array.isArray(editableItems.value[childrenIndex.value].children)){
                        editableItems.value[childrenIndex.value].children = [];
                    }
                    editableItems.value[childrenIndex.value].children.push(getDefaultLktBoxElement());

                } else {
                    editableItems.value.splice(appendIndex.value, 0, getDefaultLktBoxElement());
                }
                ++appendIndex.value;
                props.onAppend();
                break;

            case 'lkt-accordion':
                if (props.addingChildren) {
                    if (!Array.isArray(editableItems.value[childrenIndex.value].children)){
                        editableItems.value[childrenIndex.value].children = [];
                    }
                    editableItems.value[childrenIndex.value].children.push(getDefaultLktAccordionElement());

                } else {
                    editableItems.value.splice(appendIndex.value, 0, getDefaultLktAccordionElement());
                }
                ++appendIndex.value;
                props.onAppend();
                break;

            case 'lkt-icon':
                if (props.addingChildren) {
                    if (!Array.isArray(editableItems.value[childrenIndex.value].children)){
                        editableItems.value[childrenIndex.value].children = [];
                    }
                    editableItems.value[childrenIndex.value].children.push(getDefaultLktIconElement());

                } else {
                    editableItems.value.splice(appendIndex.value, 0, getDefaultLktIconElement());
                }
                ++appendIndex.value;
                props.onAppend();
                break;

            case 'lkt-image':
                if (props.addingChildren) {
                    if (!Array.isArray(editableItems.value[childrenIndex.value].children)){
                        editableItems.value[childrenIndex.value].children = [];
                    }
                    editableItems.value[childrenIndex.value].children.push(getDefaultLktImageElement());

                } else {
                    editableItems.value.splice(appendIndex.value, 0, getDefaultLktImageElement());
                }
                ++appendIndex.value;
                props.onAppend();
                break;

            case 'text':
                if (props.addingChildren) {
                    if (!Array.isArray(editableItems.value[childrenIndex.value].children)){
                        editableItems.value[childrenIndex.value].children = [];
                    }
                    editableItems.value[childrenIndex.value].children.push(getDefaultTextElement());

                } else {
                    editableItems.value.splice(appendIndex.value, 0, getDefaultTextElement());
                }
                ++appendIndex.value;
                props.onAppend();
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
                    title: 'Text Content'
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
                </div>

            </lkt-accordion>

            <lkt-accordion
                v-bind="<AccordionConfig>{
                    type: AccordionType.Auto,
                    title: 'LKT Content'
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
        </div>
    </lkt-modal>
</template>