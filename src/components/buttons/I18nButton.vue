<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {Settings} from "../../settings/Settings";
import {LktObject} from "lkt-ts-interfaces";
import {ValidFieldType} from "../../types/ValidFieldType";

const emit = defineEmits(['click', 'update:modelValue']);

const props = withDefaults(defineProps<{
    modelValue: LktObject
    type: ValidFieldType
    insideEllipsis?: boolean
    isFeatured?: boolean
}>(), {
    modelValue: () => ({}),
    insideEllipsis: false,
    isFeatured: false,
});

const translations = ref(props.modelValue);

watch(() => props.modelValue, v => translations.value = v, {deep: true});
watch(translations, v => emit('update:modelValue', v), {deep: true});

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
        :text="insideEllipsis ? computedText : ''"
        :title="computedText"
        :class="computedClass"
        icon="lkt-field-icon-language"
        modal="lkt-field-language-edit"
        :modal-data="{translations, type}"
    />
</template>