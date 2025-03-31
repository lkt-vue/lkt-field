<script setup lang="ts">
    import { ButtonConfig, ButtonType, WebElementConfig, WebElementLayoutType, WebElementType } from 'lkt-vue-kernel';
    import ComponentManager from '@/components/elements/ComponentManager.vue';
    import TextElementEditor from '@/components/elements/TextElementEditor.vue';
    import { getCurrentLanguage } from 'lkt-i18n';
    import { ref } from 'vue';

    const props = withDefaults(defineProps<{
        element: WebElementConfig
        parent?: WebElementConfig
        parentChildren: WebElementConfig[]
        index?: number
        lang?: string
        isPreview?: boolean
        canRenderActions?: boolean
    }>(), {
        index: -1,
        isPreview: false,
        canRenderActions: true,
    });

    if (!props.element.props) props.element.props = {text: {}};
    if (!props.element.layout) props.element.layout = {};
    if (!props.element.layout.columns) props.element.layout.columns = [];
    if (!props.element.layout.alignSelf) props.element.layout.alignSelf = [];
    if (!props.element.layout.alignItems) props.element.layout.alignItems = [];
    if (!props.element.layout.justifySelf) props.element.layout.justifySelf = [];
    if (!props.element.layout.justifyContent) props.element.layout.justifyContent = [];

    const appendingItems = ref(false);

    const handleInputText = (event: Event, prop: string = 'text') => {
        const text = (event.target as HTMLElement).innerHTML.trim()

        if (text !== props.element.props[prop][currentLang]) {
            props.element.props[prop][currentLang] = text;
        }
    }

    const getLayoutSelector = (element: WebElementConfig) => {
        if (!element.layout || props.isPreview) return '';
        let r = [];

        if (element.layout.type === WebElementLayoutType.Grid) {
            if (element.layout.amountOfItems && element.layout.amountOfItems.length > 0) r.push(element.layout.amountOfItems.join(' '));

        } else if (element.layout.type === WebElementLayoutType.FlexRow) {
            r.push('lkt-flex-row--nowrap');

        } else if (element.layout.type === WebElementLayoutType.FlexRows) {
            r.push('lkt-flex-row');

        } else if (element.layout.type === WebElementLayoutType.FlexColumn) {
            r.push('lkt-flex-column');
        }

        if (element.layout.alignItems && element.layout.alignItems.length > 0) r.push(element.layout.alignItems.join(' '));
        if (element.layout.justifyContent && element.layout.justifyContent.length > 0) r.push(element.layout.justifyContent.join(' '));

        if (r.length > 0) r.push('layout-mode');

        return r.join(' ');
    }

    const currentLang = props.lang ?? getCurrentLanguage();
</script>

<template>
    <div class="lkt-element" :class="`is-${element.type} is-${element.id}`">
        <div class="lkt-element-content">
            <text-element-editor
                v-if="element.type === WebElementType.LktText"
                v-model="element.props.text[currentLang]"
                @input="handleInputText($event)"
            />

            <lkt-box
                v-else-if="element.type === WebElementType.LktLayoutBox"
                :icon="element.config.hasHeader && element.config.hasIcon ? element.props.icon : ''"
                :class="element.props.class"
            >
                <template #header v-if="element.config?.hasHeader">
                    <text-element-editor
                        v-model="element.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <component-manager
                    v-model="element.children"
                    :layout-selector="getLayoutSelector(element)"
                    is-child
                    :lang="currentLang"
                    :is-preview="isPreview"
                    :parent="element"
                />
            </lkt-box>

            <lkt-box
                v-else-if="element.type === WebElementType.LktTextBox"
                :icon="element.config.hasHeader && element.config.hasIcon ? element.props.icon : ''"
                :class="element.props.class"
            >
                <template #header v-if="element.config?.hasHeader">
                    <text-element-editor
                        v-model="element.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <text-element-editor
                    v-model="element.props.text[currentLang]"
                    @input="handleInputText($event, 'text')"
                />
            </lkt-box>

            <lkt-accordion
                v-else-if="element.type === WebElementType.LktLayoutAccordion"
                :icon="element.config.hasIcon ? element.props.icon : ''"
                :class="element.props.class"
            >
                <template #header>
                    <text-element-editor
                        v-model="element.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <component-manager
                    v-model="element.children"
                    :layout-selector="getLayoutSelector(element)"
                    is-child
                    :lang="currentLang"
                    :is-preview="isPreview"
                    :parent="element"
                />
            </lkt-accordion>

            <lkt-accordion
                v-else-if="element.type === WebElementType.LktTextAccordion"
                :icon="element.config.hasIcon ? element.props.icon : ''"
                :class="element.props.class"
            >
                <template #header>
                    <text-element-editor
                        v-model="element.props.header[currentLang]"
                        @input="handleInputText($event, 'header')"
                    />
                </template>
                <text-element-editor
                    v-model="element.props.text[currentLang]"
                    @input="handleInputText($event, 'text')"
                />
            </lkt-accordion>

            <lkt-image
                v-else-if="element.type === WebElementType.LktImage"
                :class="element.props.class"
                :src="element.props.src"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-image>

            <lkt-icon
                v-else-if="element.type === WebElementType.LktIcon"
                :icon="element.config.hasIcon ? element.props.icon : ''"
                :class="element.props.class"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-icon>

            <lkt-header
                v-else-if="element.type === WebElementType.LktHeader"
                :icon="element.config.hasIcon ? element.props.icon : ''"
                :class="element.props.class"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-header>

            <lkt-button
                v-else-if="element.type === WebElementType.LktButton"
                :icon="element.config.hasIcon ? element.props.icon : ''"
                :class="element.props.class"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-button>

            <lkt-anchor
                v-else-if="element.type === WebElementType.LktAnchor"
                :icon="element.config.hasIcon ? element.props.icon : ''"
                :class="element.props.class"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-anchor>


            <component-manager
                v-else-if="element.type === WebElementType.LktLayout"
                v-model="element.children"
                :layout-selector="getLayoutSelector(element)"
                is-child
                :lang="currentLang"
                :is-preview="isPreview"
                :parent="element"
            />

            <component
                v-else
                :is="element.component"
                v-bind="element.props"
            />
        </div>

        <div class="lkt-element-actions" v-if="!appendingItems && canRenderActions">
            <lkt-button
                v-bind="<ButtonConfig>{
                    type: ButtonType.Button,
                    text: element.type,
                    icon: 'lkt-icn-settings-cogs',
                    modal: 'lkt-field-element-config',
                    modalKey: `${index}--${element.type}--${element.id}`,
                    modalData: {
                        element,
                        parent,
                        parentChildren,
                        indexInParentChildren: index,
                    }
                }"
            />
        </div>
    </div>
</template>