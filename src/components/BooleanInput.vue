<script setup lang="ts">
    import { ref, watch } from 'vue';

    const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

    const props = withDefaults(defineProps<{
        modelValue: boolean,
        name: string,
        id: string,
        editable: boolean,
        focusing: boolean,
        disabled: boolean,
        readonly: boolean,
    }>(), {
        modelValue: false,
    });

    const input = ref(null);
    const value = ref(props.modelValue),
        inputLikeValue = ref(value.value ? 'true' : 'false');

    const hasFocus = ref(props.focusing);

    const onFocus = (event: FocusEvent) => {
            hasFocus.value = true;
        },
        onBlur = (event: Event) => {
            hasFocus.value = false;
        };

    watch(() => props.modelValue, v => value.value = v);
    watch(value, v => emit('update:modelValue', v));

</script>

<template>
    <input v-model="value"
           type="checkbox"
           ref="input"
           :name="name"
           :id="id"
           :disabled="!editable || disabled"
           :readonly="!editable || readonly"
           :value="inputLikeValue"
           :checked="value"
           @focus="onFocus"
           @blur="onBlur">
</template>

<style scoped>

</style>