<script setup lang="ts">
    import { computed, onMounted, ref, watch } from 'vue';
    import { getVisibleDateValue, isValidDateObject } from '../functions/date-functions';
    import LktCalendar from '../components/calendar/LktCalendar.vue';
    import { date } from 'lkt-date-tools';
    import { Settings } from '../settings/Settings';
    import {
        ButtonConfig,
        ButtonType,
        FieldConfig,
        FieldType,
        TooltipLocationX,
        TooltipLocationY,
    } from 'lkt-vue-kernel';
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
        isDateTime: boolean
    }>(), {
        modelValue: '',
    });

    const pickedDate = ref(<Date | undefined>undefined);
    const pickedTime = ref('');
    const visibleDateValue = ref('');
    const value = ref(props.modelValue);

    const computedDateReadFormat = computed(() => {
        if (props.isDateTime) {
            if (Settings.dateTimeReadFormat) return Settings.dateTimeReadFormat;
            if (Settings.langDateTimeReadFormat[props.lang]) return Settings.langDateTimeReadFormat[props.lang];
            if (Settings.defaultDateTimeReadFormat) return Settings.defaultDateTimeReadFormat;
            if (props.isDateTime) return 'Y-m-d H:i';
        }
        if (Settings.dateReadFormat) return Settings.dateReadFormat;
        if (Settings.langDateReadFormat[props.lang]) return Settings.langDateReadFormat[props.lang];
        if (Settings.defaultDateReadFormat) return Settings.defaultDateReadFormat;
        return 'Y-m-d';
    });

    const computedDateValueFormat = computed(() => {
        if (props.isDateTime) return 'Y-m-d H:i';
        return 'Y-m-d';
    })

    const setPickedDate = (d: string) => {
            let date = new Date(d);

            if (isValidDateObject(date)) {
                pickedDate.value = date;

                if (props.isDateTime) {
                    pickedTime.value = [lpad(date.getHours(), 2, '0'), lpad(date.getMinutes(), 2, '0')].join(':');
                }
            }
        },
        setVisibleDateValue = () => {
            visibleDateValue.value = getVisibleDateValue(pickedDate.value, computedDateReadFormat.value);
        };

    watch(() => props.modelValue, v => {
        value.value = v;
        setPickedDate(v);
    });
    watch(value, (v) => emit('update:modelValue', v));

    const applyTimeToDate = (time: string) => {
        let values = time.split(':');

        if (values.length >= 2) {
            if (typeof pickedDate.value === 'object') {
                pickedDate.value?.setHours(parseInt(values[0]));
                pickedDate.value?.setMinutes(parseInt(values[1]));
                pickedDate.value = new Date(pickedDate.value);
            }
        }
    }

    watch(pickedTime, (v) => {
        applyTimeToDate(v);
    })

    watch(pickedDate, (v) => {
        if (typeof v === 'undefined') {
            value.value = '';

        } else {

            let values = pickedTime.value.split(':');

            if (values.length >= 2) {
                if (typeof pickedDate.value === 'object') {
                    pickedDate.value?.setHours(parseInt(values[0]));
                    pickedDate.value?.setMinutes(parseInt(values[1]));
                }
            }

            value.value = date(computedDateValueFormat.value, v);
        }
        setVisibleDateValue();
    }, { deep: true });

    onMounted(() => {
        setPickedDate(props.modelValue);
        setVisibleDateValue();
    });
</script>

<template>
    <lkt-button
        v-bind="<ButtonConfig>{
            type: ButtonType.Tooltip,
            icon,
            class: 'lkt-field--toggle-button',
            text: visibleDateValue,
            tooltip: {
                class: 'lkt-field--date--tooltip',
                locationY: TooltipLocationY.Bottom,
                locationX: TooltipLocationX.LeftCorner,
            }
        }"
    >
        <template #tooltip>
            <lkt-calendar v-model="pickedDate" />

            <lkt-field
                v-if="isDateTime"
                v-model="pickedTime"
                v-bind="<FieldConfig>{
                    type: FieldType.Time,
                }"
            />
        </template>
    </lkt-button>
</template>