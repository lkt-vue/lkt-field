<script setup lang="ts">

    import { ButtonConfig, ButtonType, FieldElementConfig, FieldElementType } from 'lkt-vue-kernel';
    import ComponentManager from '@/components/elements/ComponentManager.vue';
    import TextElementEditor from '@/components/elements/TextElementEditor.vue';
    import { getCurrentLanguage } from 'lkt-i18n';
    import { ref } from 'vue';

    const props = withDefaults(defineProps<{
        element: FieldElementConfig,
        index?: number
    }>(), {
        index: -1,
    });

    const appendingItems = ref(false);

    const handleInputText = (event: Event, prop: string = 'text') => {
        const text = (event.target as HTMLElement).innerHTML.trim()

        if (text !== props.element.props[prop][currentLang]) {
            props.element.props[prop][currentLang] = text;
        }
    }

    const getLayoutSelector = (element) => {
        if (!element.layout) return '';

        let r = [
            element.layout.amountOfItems.join(' '),
        ].join(' ');

        if (r !== '') r += ' layout-mode';

        return r;
    }

    const currentLang = getCurrentLanguage();
</script>

<template>
    <div class="lkt-element" :class="`is-${element.type} is-${element.id}`">
        <div class="lkt-element-content">
            <text-element-editor
                v-if="element.type === 'text'"
                v-model="element.props.text[currentLang]"
                @input="handleInputText($event)"
            />

            <lkt-box
                v-else-if="element.type === 'lkt-box'"
                :icon="element.config.hasHeader && element.config.hasIcon ? element.props.icon : ''"
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
                />
            </lkt-box>

            <lkt-accordion
                v-else-if="element.type === 'lkt-accordion'"
                :icon="element.config.hasIcon ? element.props.icon : ''"
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
                />
            </lkt-accordion>

            <lkt-image
                v-else-if="element.type === 'lkt-image'"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-image>

            <lkt-icon
                v-else-if="element.type === 'lkt-icon'"
                :icon="element.config.hasIcon ? element.props.icon : ''"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-icon>

            <lkt-header
                v-else-if="element.type === FieldElementType.LktHeader"
                :icon="element.config.hasIcon ? element.props.icon : ''"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-header>

            <lkt-button
                v-else-if="element.type === 'lkt-button'"
                :icon="element.config.hasIcon ? element.props.icon : ''"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-button>

            <lkt-anchor
                v-else-if="element.type === 'lkt-anchor'"
                :icon="element.config.hasIcon ? element.props.icon : ''"
            >
                <template #text>
                    <text-element-editor
                        v-model="element.props.text[currentLang]"
                        @input="handleInputText($event, 'text')"
                    />
                </template>
            </lkt-anchor>


            <component-manager
                v-else-if="element.type === FieldElementType.LktLayout"
                v-model="element.children"
                :layout-selector="getLayoutSelector(element)"
                is-child
            />

            <component
                v-else
                :is="element.component"
                v-bind="element.props"
            />
        </div>

        <div class="lkt-element-actions" v-if="!appendingItems">
            <lkt-button
                v-bind="<ButtonConfig>{
                    type: ButtonType.Button,
                    text: element.type,
                    icon: 'lkt-icn-settings-cogs',
                    modal: 'lkt-field-element-config',
                    modalKey: `${index}--${element.type}--${element.id}`,
                    modalData: {
                        element,
                    }
                }"
            />
        </div>
    </div>
</template>

<style scoped>

</style>