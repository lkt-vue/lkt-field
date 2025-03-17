<script setup lang="ts">

    const emit = defineEmits([
        'input',
        'keydown',
    ]);

    const props = withDefaults(defineProps<{
        modelValue: string
    }>(), {
        modelValue: '',
    });

    const handleInputText = ($event: InputEvent) => {
        emit('input', $event);
    }
    const handleKeydown = ($event: KeyboardEvent) => {
        emit('keydown', $event);
    }
</script>

<template>
    <div contenteditable="true"
         class="editable-text"
         @input="handleInputText($event)"
         @keydown="handleKeydown($event)">
        {{ modelValue }}
    </div>
</template>