<script setup lang="ts">
    import { computed } from 'vue';
    import { Settings } from '../../settings/Settings';
    import {
        ButtonConfig,
        ButtonType,
        FieldConfig,
        FieldType,
        LktObject,
        TooltipLocationX,
        TooltipLocationY,
    } from 'lkt-vue-kernel';
    import LktField from '@/lib-components/LktField.vue';
    import { getAvailableLanguages, getCurrentLanguage } from 'lkt-i18n';

    const emit = defineEmits([
        'click',
        'update:modelValue'
    ]);

const props = withDefaults(defineProps<{
    type: FieldType
    insideEllipsis?: boolean
    isFeatured?: boolean
    translations: LktObject
    referrer: any
}>(), {
    modelValue: () => ({}),
    insideEllipsis: false,
    isFeatured: false,
});

const currentLang = getCurrentLanguage();
const availableLanguages = getAvailableLanguages();

const computedText = computed(() => {
        return Settings.i18nText
    }),
    computedClass = computed(() => {
        if (props.isFeatured) return 'lkt-field--atn-btn';
        if (props.insideEllipsis) return 'lkt-field--info-split-btn';
        return 'lkt-field--info-btn';
    });
</script>

<template>
    <lkt-button
        v-if="availableLanguages.length > 1"
        v-bind="<ButtonConfig>{
            type: ButtonType.Tooltip,
            text: insideEllipsis ? computedText : '',
            class: computedClass,
            icon: 'lkt-icn-lang-picker',
            tooltip: {
                class: 'lkt-field-i18n-tooltip',
                referrerWidth: true,
                referrer,
                referrerMargin: 0,
                locationX: TooltipLocationX.LeftCorner,
                locationY: TooltipLocationY.Bottom
            }
        }"
        :title="computedText"
    >
        <template #tooltip>
            <div class="lkt-grid-1">
                <lkt-field
                    v-model="translations[currentLang]"
                    v-bind="<FieldConfig>{
                        type,
                        label: `Current lang ${currentLang}`,
                        canClear: true,
                        canUndo: true,
                    }"
                />

                <template v-for="lang in availableLanguages" :key="lang">
                    <lkt-field
                        v-if="lang !== currentLang"
                        v-model="translations[lang]"
                        v-bind="<FieldConfig>{
                            type,
                            label: `Language ${lang}`,
                            canClear: true,
                            canUndo: true,
                        }"
                    />
                </template>
            </div>
        </template>
    </lkt-button>
</template>