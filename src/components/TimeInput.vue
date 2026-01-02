<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue';
    import { ButtonConfig, ButtonType, TooltipConfig, TooltipLocationX, TooltipLocationY } from 'lkt-vue-kernel';
    import LktTime from '@/components/calendar/LktTime.vue';
    import { lpad } from 'lkt-string-tools';

    const emit = defineEmits([
        'update:modelValue',
    ]);

    const props = withDefaults(defineProps<{
        modelValue: string
        name: string
        id: string
        tabindex: number
        lang: string
        icon: string
        tooltip: TooltipConfig
    }>(), {
        modelValue: '',
    });

    const moment = new Date();
    const hour = ref(moment.getHours());
    const minutes = ref(moment.getMinutes());
    const editableValue = ref(props.modelValue);

    const extractValues = (value: string) => {
        let values = value.split(':');

        if (values.length >= 2) {
            hour.value = parseInt(values[0]);
            minutes.value = parseInt(values[1]);
        }
    }

    watch([hour, minutes], (v) => {
        editableValue.value = [lpad(hour.value, 2, '0'), lpad(minutes.value, 2, '0')].join(':');
    })

    watch(() => props.modelValue, (v) => editableValue.value = v);
    watch(editableValue, (v) => emit('update:modelValue', v));

    onMounted(() => {
        extractValues(editableValue.value);
        editableValue.value = [lpad(hour.value, 2, '0'), lpad(minutes.value, 2, '0')].join(':');
    });
</script>

<template>
    <lkt-button
        v-bind="<ButtonConfig>{
            type: ButtonType.Tooltip,
            icon,
            class: 'lkt-field--toggle-button',
            text: editableValue,
            tooltip: {
                ...tooltip,
                class: 'lkt-field--date--tooltip',
                locationY: TooltipLocationY.Bottom,
                locationX: TooltipLocationX.LeftCorner,
            }
        }"
    >
        <template #tooltip>
            <lkt-time
                v-model:hour="hour"
                v-model:minutes="minutes"
            />
        </template>
    </lkt-button>
</template>