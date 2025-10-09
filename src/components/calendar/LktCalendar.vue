<script setup lang="ts">

    import { computed, nextTick, ref, watch } from 'vue';
    import { date } from 'lkt-date-tools';
    import { isValidDateObject } from '../../functions/date-functions';
    import { ButtonConfig, ButtonType, FieldConfig, FieldType } from 'lkt-vue-kernel';

    const emit = defineEmits([
        'update:modelValue'
    ]);

    const props = withDefaults(defineProps<{
        modelValue: Date | undefined
    }>(), {});

    const pickedDate = ref(props.modelValue);
    watch(() => props.modelValue, v => pickedDate.value = v, { deep: true });
    watch(pickedDate, v => emit('update:modelValue', v), {deep: true});

    const today = ref(new Date());
    const visibleDate = ref(new Date());
    if (isValidDateObject(pickedDate.value) && typeof pickedDate.value !== 'undefined') {
        visibleDate.value = new Date(pickedDate.value.getFullYear(), pickedDate.value.getMonth(), pickedDate.value.getDate());
    }
    const visibleYear = ref(visibleDate.value.getFullYear());
    const visibleMonth = ref(visibleDate.value.getMonth());
    const refreshing = ref(false);
    const visibleText = ref(date('Y-m', visibleDate.value));

    watch(refreshing, (v) => {
        if (v) nextTick(() => refreshing.value = false);
    })

    const computedNumberOfDays = computed(() => {
            const lastDay = new Date(visibleYear.value, visibleMonth.value + 1, 0);
            return lastDay.getDate();
        }),
        computedEmptySpacesAtBeginning = computed(() => {
            const firstDay = new Date(visibleYear.value, visibleMonth.value, 1);
            return firstDay.getDay();
        });

    const onClickNext = () => {
            if (visibleMonth.value > 11) {
                visibleMonth.value = 0;
                visibleYear.value += 1;
            }

            visibleMonth.value += 1;
            visibleDate.value.setFullYear(visibleYear.value, visibleMonth.value);
            visibleDate.value = new Date(visibleDate.value);
            visibleText.value = date('Y-m', visibleDate.value);
            doRefresh();
        },
        onClickPrev = () => {
            if (visibleMonth.value < 0) {
                visibleMonth.value = 11;
                visibleYear.value -= 1;
            }

            visibleMonth.value -= 1;
            visibleDate.value.setFullYear(visibleYear.value, visibleMonth.value);
            visibleDate.value = new Date(visibleDate.value);
            visibleText.value = date('Y-m', visibleDate.value);
            doRefresh();
        },
        dayIsPicked = (day: number) => {
            if (typeof pickedDate.value === 'undefined') return false;
            if (pickedDate.value.getFullYear() !== visibleYear.value) return false;
            if (pickedDate.value.getMonth() !== visibleMonth.value) return false;
            return pickedDate.value.getDate() === day;
        },
        dayIsToday = (day: number) => {
            if (typeof pickedDate.value === 'undefined') return false;
            if (today.value.getFullYear() !== visibleYear.value) return false;
            if (today.value.getMonth() !== visibleMonth.value) return false;
            return today.value.getDate() === day;
        },
        getDayClasses = (day: number) => {
            return {
                'is-picked': dayIsPicked(day),
                'is-today': dayIsToday(day),
            };
        },
        onClickDay = (day: number) => {
            if (typeof pickedDate.value === 'undefined') {
                pickedDate.value = new Date(visibleYear.value, visibleMonth.value, day);
            } else {
                pickedDate.value?.setFullYear(visibleYear.value, visibleMonth.value, day);
                pickedDate.value = new Date(pickedDate.value);
            }
            doRefresh();
        },
        doRefresh = () => {
            // refreshing.value = true;
        };

    watch(visibleYear, () => {

        visibleDate.value.setFullYear(visibleYear.value, visibleMonth.value);
        visibleDate.value = new Date(visibleDate.value);
        visibleText.value = date('Y-m', visibleDate.value);
    }, {deep: true});

    watch(visibleMonth, () => {

        visibleDate.value.setFullYear(visibleYear.value, visibleMonth.value);
        visibleDate.value = new Date(visibleDate.value);
        visibleText.value = date('Y-m', visibleDate.value);
    }, {deep: true});

</script>

<template>
    <div class="lkt-calendar">
        <div class="calendar">
            <header class="lkt-calendar--header-grid">
                <lkt-button
                    v-bind="<ButtonConfig>{
                        class: 'lkt-calendar--day',
                        icon: 'lkt-icn-triangle-left',
                        events: {
                            click: onClickPrev
                        }
                    }"
                />
                <lkt-button
                    v-bind="<ButtonConfig>{
                        type: ButtonType.Tooltip,
                        text: visibleText,
                        class: 'lkt-calendar--header-text',
                    }"
                >
                    <template #tooltip>
                        <div class="lkt-calendar--header-text lkt-flex-row">
                            <lkt-field
                                v-model="visibleYear"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Number,
                                    label: 'Year',
                                }"
                            />
                            <lkt-field
                                v-model="visibleMonth"
                                v-bind="<FieldConfig>{
                                    type: FieldType.Select,
                                    label: 'Month',
                                    options: [
                                        {value: 0, label: '1'},
                                        {value: 1, label: '2'},
                                        {value: 2, label: '3'},
                                        {value: 3, label: '4'},
                                        {value: 4, label: '5'},
                                        {value: 5, label: '6'},
                                        {value: 6, label: '7'},
                                        {value: 7, label: '8'},
                                        {value: 8, label: '9'},
                                        {value: 9, label: '10'},
                                        {value: 10, label: '11'},
                                        {value: 11, label: '12'},
                                    ]
                                }"
                            />
                        </div>
                    </template>
                </lkt-button>
                <lkt-button
                    v-bind="<ButtonConfig>{
                        class: 'lkt-calendar--day',
                        icon: 'lkt-icn-triangle-right',
                        events: {
                            click: onClickNext
                        }
                    }"
                />

            </header>

            <div class="lkt-calendar--day-grid" v-if="!refreshing">
                <div class="lkt-calendar--day lkt-calendar--week-day">Su</div>
                <div class="lkt-calendar--day lkt-calendar--week-day">Mo</div>
                <div class="lkt-calendar--day lkt-calendar--week-day">Tu</div>
                <div class="lkt-calendar--day lkt-calendar--week-day">We</div>
                <div class="lkt-calendar--day lkt-calendar--week-day">Th</div>
                <div class="lkt-calendar--day lkt-calendar--week-day">Fr</div>
                <div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>
                <div
                    class="lkt-calendar--day lkt-calendar--filling-day"
                    v-for="day in computedEmptySpacesAtBeginning"
                />
                <lkt-button
                    v-for="day in computedNumberOfDays"
                    class="lkt-calendar--day"
                    :class="getDayClasses(day)"
                    :text="day.toString()"
                    @click="() => onClickDay(day)"
                />
            </div>
        </div>
        <div class="display-selected">
            <p class="selected"></p>
        </div>
    </div>
</template>