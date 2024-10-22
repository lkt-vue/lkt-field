<script setup lang="ts">
import {computed} from "vue";
import {Settings} from "../../settings/Settings";

const emit = defineEmits(['click']);

const props = withDefaults(defineProps<{
    insideEllipsis?: boolean
}>(), {
    insideEllipsis: false,
});

const computedText = computed(() => {
        return Settings.undoText
    }),

    computedClass = computed(() => {
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
        class="lkt-field--btn-undo"
        icon="lkt-field-icon-undo"
        @click="onClick"
    />
</template>