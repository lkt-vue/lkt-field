<script setup lang="ts">

import {computed, nextTick, ref, watch} from "vue";
import {date} from "lkt-date-tools";

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<{
    modelValue: Date|undefined
}>(), {
});

const pickedDate = ref(props.modelValue);
watch(() => props.modelValue, v => pickedDate.value = v, {deep: true});
watch(pickedDate, v => emit('update:modelValue', v));

const visibleDate = ref(new Date());
const visibleYear = ref(visibleDate.value.getFullYear());
const visibleMonth = ref(visibleDate.value.getMonth());
const refreshing = ref(false);
const visibleText = ref(date('Y-m', visibleDate.value));

const computedNumberOfDays = computed(() => {
        const lastDay = new Date(visibleYear.value, visibleMonth.value + 1, 0);
        return lastDay.getDate();
    }),
    computedEmptySpacesAtBeginning = computed(() => {
        const firstDay = new Date(visibleYear.value, visibleMonth.value, 1);
        return firstDay.getDay();
    })

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
    getDayClasses = (day: number) => {
        return {
            'is-picked': dayIsPicked(day)
        }
    },
    onClickDay = (day: number) => {
        pickedDate.value.setFullYear(visibleYear.value, visibleMonth.value, day);
        pickedDate.value = new Date(pickedDate.value);
        doRefresh();
    },
    doRefresh = () => {
        // refreshing.value = true;
        // nextTick(() => refreshing.value = false);
    }

</script>

<template>
    <div class="lkt-calendar">
        <div class="calendar">
            <header class="lkt-calendar--header-grid">
                <lkt-button class="lkt-calendar--day" @click="onClickPrev">◀</lkt-button>
                <div class="lkt-calendar--header-text" v-html="visibleText"></div>
                <lkt-button class="lkt-calendar--day" @click="onClickNext">▶</lkt-button>

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

<style scoped>

</style>