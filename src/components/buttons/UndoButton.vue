<script setup lang="ts">
import {computed} from "vue";
import {Settings} from "../../settings/Settings";
import { ButtonConfig } from 'lkt-vue-kernel';

const emit = defineEmits([
    'click'
]);

const props = withDefaults(defineProps<{
    insideEllipsis?: boolean
}>(), {
    insideEllipsis: false,
});

const computedText = computed(() => {
        return Settings.undoText
    }),

    computedClass = computed(() => {
        if (props.insideEllipsis) return 'lkt-field--btn-undo lkt-field--info-split-btn';
        return 'lkt-field--btn-undo lkt-field--info-btn';
    });

const onClick = () => emit('click');
</script>

<template>
    <lkt-button
        v-bind="<ButtonConfig>{
            text: insideEllipsis ? computedText : '',
            icon: 'lkt-icn-undo',
            class: computedClass,
        }"
        :title="computedText"
        @click="onClick"
    />
</template>