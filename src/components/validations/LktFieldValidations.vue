<script setup lang="ts">
    import ValidationItem from './ValidationItem.vue';
    import { nextTick, ref, watch } from 'vue';
    import { FieldValidation } from '../../instances/FieldValidation';

    const props = withDefaults(defineProps<{
    items: FieldValidation[],
    stack: string,
    min: number,
    max: number,
}>(), {
    items: () => [],
    stack: 'default',
    min: 0,
    max: 0
});

const parsedItems = ref(props.items);
const refreshing = ref(false);

watch(() => props.items, (v) => {
    refreshing.value = true;
    nextTick(() => refreshing.value = false);
}, {deep: true});
</script>

<template>
    <div class="lkt-field-validation-info" v-if="!refreshing">
        <validation-item v-for="validation in parsedItems" :validation="validation" :stack="stack" :key="validation.code"/>
    </div>
</template>