<script setup lang="ts">
    import { computed } from 'vue';
    import { Settings } from '../../settings/Settings';

    const emit = defineEmits(['click']);

const computedText = computed(() => {
        return Settings.undoText
    }),

    computedClass = computed(() => {
        return 'lkt-field--info-btn';
    });

const onClick = () => emit('click');
</script>

<template>
    <lkt-button
        :text="computedText"
        :title="computedText"
        :class="computedClass"
        class="lkt-field--btn-dropdown"
        icon="lkt-field-icon-angle-down"
        @click="onClick"
        tabindex="-1"
    />
</template>