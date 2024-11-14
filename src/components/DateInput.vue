<script setup lang="ts">
    import { computed, onMounted, ref, watch } from 'vue';
    import { getVisibleDateValue, isValidDateObject } from '../functions/date-functions';
    import LktCalendar from '../components/calendar/LktCalendar.vue';
    import { date } from 'lkt-date-tools';
    import { Settings } from '../settings/Settings';

    const emit = defineEmits([
        'update:modelValue',
    ]);

    const props = withDefaults(defineProps<{
        modelValue: string
        name: string
        id: string
        tabindex: number
        lang: string
    }>(), {
        modelValue: '',
    });

    const pickedDate = ref(<Date | undefined>undefined);
    const visibleDateValue = ref('');
    const value = ref(props.modelValue);

    const computedDateReadFormat = computed(() => {
        if (Settings.dateReadFormat) return Settings.dateReadFormat;
        if (Settings.langDateReadFormat[props.lang]) return Settings.langDateReadFormat[props.lang];
        if (Settings.defaultDateReadFormat) return Settings.defaultDateReadFormat;
        return 'Y-m-d';
    });

    const setPickedDate = (d: string) => {
            let date = new Date(d);

            if (isValidDateObject(date)) {
                pickedDate.value = date;
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

    watch(pickedDate, (v) => {
        if (typeof v === 'undefined') {
            value.value = '';

        } else {
            value.value = date('Y-m-d', v);
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
        class="lkt-field--toggle-button"
        :text="visibleDateValue"
        tooltip
        tooltip-class="lkt-field--date--tooltip"
        tooltip-location-y="bottom"
        tooltip-location-x="left-corner"
    >
        <template #tooltip>
            <lkt-calendar v-model="pickedDate" />
        </template>
    </lkt-button>
</template>