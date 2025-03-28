<script setup lang="ts">

    const emit = defineEmits([
        'input',
        'keydown',
    ]);

    const props = withDefaults(defineProps<{
        modelValue: string,
        disabled?: boolean
    }>(), {
        modelValue: '',
        disabled: false
    });

    const handleInputText = ($event: InputEvent) => {
        emit('input', $event);
    }
    const handleKeydown = ($event: KeyboardEvent) => {
        emit('keydown', $event);
    }
</script>

<template>
    <div :contenteditable="disabled ? 'false' : 'true'"
         class="lkt-element-editable-text"
         @input="handleInputText($event)"
         @keydown="handleKeydown($event)"
         v-html="modelValue"
         v-once
    >
    </div>
</template>