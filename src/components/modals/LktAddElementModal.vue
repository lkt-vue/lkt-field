<script setup lang="ts">
    import { ref } from 'vue';
    import {
        AccordionConfig,
        AccordionType,
        ButtonConfig,
        WebElementConfig,
        WebElementType,
        getDefaultLktLayoutAccordionWebElement,
        getDefaultLktAnchorWebElement,
        getDefaultLktLayoutBoxWebElement,
        getDefaultLktButtonWebElement,
        getDefaultLktHeaderWebElement,
        getDefaultLktIconWebElement,
        getDefaultLktImageWebElement,
        getDefaultLktLayoutWebElement,
        getDefaultLktTextWebElement,
        LktObject,
        ModalConfig, getDefaultLktTextAccordionWebElement, getDefaultLktTextBoxWebElement,
    } from 'lkt-vue-kernel';

    const props = withDefaults(defineProps<{
        modalName: string
        modalKey: string
        zIndex: number
        items: LktObject[]
        element: WebElementConfig
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

    const doReadAddElement = (element: WebElementConfig) => {
        if (props.addingChildren) {
            if (!Array.isArray(editableConfig.value.children)){
                editableConfig.value.children = [];
            }
            editableConfig.value.children.push(element);

        } else {
            editableItems.value.splice(appendIndex.value, 0, element);
        }
        ++appendIndex.value;
        if (typeof props.onAppend === 'function') props.onAppend();
    }

    const doAddElement = (element: string) => {
        switch (element) {
            case WebElementType.LktLayoutBox:
                doReadAddElement(getDefaultLktLayoutBoxWebElement());
                break;

            case WebElementType.LktTextBox:
                doReadAddElement(getDefaultLktTextBoxWebElement());
                break;

            case WebElementType.LktLayoutAccordion:
                doReadAddElement(getDefaultLktLayoutAccordionWebElement());
                break;

            case WebElementType.LktTextAccordion:
                doReadAddElement(getDefaultLktTextAccordionWebElement());
                break;

            case WebElementType.LktIcon:
                doReadAddElement(getDefaultLktIconWebElement());
                break;

            case WebElementType.LktImage:
                doReadAddElement(getDefaultLktImageWebElement());
                break;

            case WebElementType.LktAnchor:
                doReadAddElement(getDefaultLktAnchorWebElement());
                break;

            case WebElementType.LktButton:
                doReadAddElement(getDefaultLktButtonWebElement());
                break;

            case WebElementType.LktLayout:
                doReadAddElement(getDefaultLktLayoutWebElement());
                break;

            case WebElementType.LktHeader:
                doReadAddElement(getDefaultLktHeaderWebElement());
                break;

            case WebElementType.LktText:
                doReadAddElement(getDefaultLktTextWebElement());
                break;
        }
    };
</script>

<template>
    <lkt-modal
        id="lkt-add-element-modal"
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
                            icon: 'lkt-icn-font',
                            text: 'Text',
                            events: {
                                click: () => {
                                    doAddElement('lkt-text');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-header',
                            text: 'LktHeader',
                            events: {
                                click: () => {
                                    doAddElement('lkt-header');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-picture',
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
                            icon: 'lkt-icn-info',
                            text: 'LktIcon',
                            events: {
                                click: () => {
                                    doAddElement('lkt-icon');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-font',
                            text: 'LktTextBox',
                            events: {
                                click: () => {
                                    doAddElement('lkt-text-box');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-font',
                            text: 'LktTextAccordion',
                            events: {
                                click: () => {
                                    doAddElement('lkt-text-accordion');
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
                            icon: 'lkt-icn-columns',
                            text: 'LktLayoutBox',
                            events: {
                                click: () => {
                                    doAddElement('lkt-layout-box');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-columns',
                            text: 'LktLayoutAccordion',
                            events: {
                                click: () => {
                                    doAddElement('lkt-layout-accordion');
                                }
                            }
                        }"
                    />
                    <lkt-button
                        v-bind="<ButtonConfig>{
                            icon: 'lkt-icn-columns',
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
                            icon: 'lkt-icn-link',
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
                            icon: 'lkt-icn-link',
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

<style lang="css">
    #lkt-add-element-modal .lkt-button-main {
        flex-direction: column;
        min-width: 100%;
        width: 100%;
        max-width: 100%;
    }
    #lkt-add-element-modal .lkt-button-main i{
        font-size: 2em;
    }
</style>