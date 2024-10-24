<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { FieldType } from '@/enums/FieldType';

    const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

    const props = withDefaults(defineProps<{
        modelValue: boolean,
        name: string,
        type: string,
        label: string,
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
            emit('focus', event);
        },
        onBlur = (event: Event) => {
            hasFocus.value = false;
            emit('blur', event);
        };

    watch(() => props.modelValue, v => value.value = v);
    watch(value, v => emit('update:modelValue', v));
</script>

<template>
    <div class="boolean-input">
        <div class="boolean-input-label">
            <div class="boolean-input--check-on">
                <i v-if="type === FieldType.Check && value" class="lkt-field-icon-ok" />
            </div>
        </div>
        <div v-if="label" class="lkt-field--label" v-html="label" />
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
    </div>
</template>