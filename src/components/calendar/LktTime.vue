<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { FieldConfig, FieldType } from 'lkt-vue-kernel';

    const emit = defineEmits([
        'update:hour',
        'update:minutes',
    ]);

    const props = withDefaults(defineProps<{
        hour: number
        minutes: number
    }>(), {});

    const editableHour = ref(props.hour),
        editableMinutes = ref(props.minutes);

    watch(() => props.hour, (v) => editableHour.value = v);
    watch(() => props.minutes, (v) => editableMinutes.value = v);

    watch(editableHour, (v) => emit('update:hour', v));
    watch(editableMinutes, (v) => emit('update:minutes', v));

</script>

<template>
    <div class="lkt-time lkt-flex-column">
        <lkt-field
            v-model="editableHour"
            v-bind="<FieldConfig>{
                type: FieldType.Number,
                label: 'Hour',
                canStep: true,
                min: 0,
                max: 23
            }"
        />
        <lkt-field
            v-model="editableMinutes"
            v-bind="<FieldConfig>{
                type: FieldType.Number,
                label: 'Minutes',
                canStep: true,
                min: 0,
                max: 59
            }"
        />
    </div>
</template>

<style scoped lang="css">

</style>