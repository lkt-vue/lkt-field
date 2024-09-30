<script setup lang="ts">


import {computed, nextTick, ref} from "vue";
import {date} from "lkt-date-tools";

const visibleDate = ref(new Date());
const visibleYear = ref(visibleDate.value.getFullYear());
const visibleMonth = ref(visibleDate.value.getMonth());
const refreshing = ref(false);
const visibleText = ref(date('Y-m-d', visibleDate.value));

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
        visibleText.value = date('Y-m-d', visibleDate.value);
        refreshing.value = true;
        nextTick(() => refreshing.value = false);
    },
    onClickPrev = () => {
        if (visibleMonth.value < 0) {
            visibleMonth.value = 11;
            visibleYear.value -= 1;
        }

        visibleMonth.value -= 1;
        visibleDate.value.setFullYear(visibleYear.value, visibleMonth.value);
        visibleText.value = date('Y-m-d', visibleDate.value);
        refreshing.value = true;
        nextTick(() => refreshing.value = false);
    }

</script>

<template>
    <div class="lkt-calendar">
        <div class="calendar" style="width: 500px;">
            <header>
                <lkt-button class="left" @click="onClickPrev">◀</lkt-button>

                <div class="header-display" v-html="visibleText"></div>

                <lkt-button class="right" @click="onClickNext">▶</lkt-button>

            </header>

            <div class="week">
                <div>Su</div>
                <div>Mo</div>
                <div>Tu</div>
                <div>We</div>
                <div>Th</div>
                <div>Fr</div>
                <div>Sa</div>
            </div>
            <div class="days lkt-grid-7" v-if="!refreshing">
                <div
                    v-for="day in computedEmptySpacesAtBeginning"
                />
                <lkt-button
                    v-for="day in computedNumberOfDays"
                    :text="day.toString()"
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