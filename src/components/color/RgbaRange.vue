<script setup lang="ts">
    import LktField from '../../lib-components/LktField.vue';
    import { ref, watch } from 'vue';
    import { FieldType } from '../../enums/FieldType';

    const emit = defineEmits(['update:modelValue']);

    const props = withDefaults(defineProps<{
        modelValue: number,
        label: string,
        rangeClass: string
    }>(), {
        modelValue: 0,
        label: '',
        rangeClass: '',
    });

    const pickedColor = ref(props.modelValue);

    watch(() => props.modelValue, v => pickedColor.value = v);
    watch(pickedColor, v => emit('update:modelValue', v));
</script>

<template>
    <div class="lkt-field-color--tooltip--rgba-container">
        <div class="lkt-field-color--tooltip--numeric-input-container">
            <label class="like-lkt-field-label">{{ label }}</label>
            <lkt-field
                v-model="pickedColor"
                :type="FieldType.Number"
                :min="0"
                :max="255"
                :step="1"
                :can-step="false"
            />
        </div>
        <lkt-field
            class="color-range"
            :class="rangeClass"
            v-model="pickedColor"
            :type="FieldType.Range"
            :min="0"
            :max="255"
            :step="1"
        />
    </div>
</template>