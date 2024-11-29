<script setup lang="ts">
    import { computed, ref } from 'vue';
    import ColorInput from '../components/ColorInput.vue';

    const props = withDefaults(defineProps<{
        modelValue: string[],
        editMode?: boolean,
        min: number|false,
        max: number|false,
    }>(), {
        modelValue: () => [],
        editMode: false,
    });

    const items = ref(props.modelValue);

    const computedPerms = computed(() => {
        if (typeof props.max === 'boolean' || items.value.length < props.max) return ['inline-create'];
        return [];
    })
</script>

<template>
    <lkt-table
        type="item"
        v-model="items"
        :perms="computedPerms"
        :edit-mode="editMode"
        :new-value-generator="() => ''"
        :required-items-for-top-create="999999"
    >
        <template #item="{item, index, isLoading, canCreate, canRead, canUpdate, canDrop, doDrop}">
            <color-input v-model="items[index]"/>
        </template>
    </lkt-table>
</template>