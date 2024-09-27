<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {Settings} from "../../settings/Settings";
import HoverTooltip from "../HoverTooltip.vue";

const emit = defineEmits(['click', 'update:modelValue']);

const props = withDefaults(defineProps<{
    modelValue: boolean
    insideEllipsis?: boolean
    isFeatured?: boolean
}>(), {
    modelValue: false,
    insideEllipsis: false,
    isFeatured: false,
});

const isChecked = ref(props.modelValue);

watch(() => props.modelValue, v => isChecked.value = v);
watch(isChecked, (v) => emit('update:modelValue', v));

const computedText = computed(() => {
        if (isChecked.value) return Settings.showPasswordOnText
        return Settings.showPasswordOffText
    }),

    computedIcon = computed(() => {
        return isChecked.value === true ? 'lkt-field-icon-lock-open' : 'lkt-field-icon-lock';
    }),

    computedClass = computed(() => {
        if (props.isFeatured) return 'lkt-field--atn-btn';
        if (props.insideEllipsis) return 'lkt-field--info-split-btn';
        return 'lkt-field--info-btn';
    });


const onClick = () => emit('click');
</script>

<template>
    <lkt-button
        :text="insideEllipsis ? computedText : ''"
        :title="computedText"
        :class="computedClass"
        :icon="computedIcon"
        @click="onClick"
        v-model:checked="isChecked"
        hidden-switch
    />
</template>