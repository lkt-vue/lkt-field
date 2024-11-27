<script setup lang="ts">
    import { computed, ref, useSlots } from 'vue';
    import { LktObject } from 'lkt-ts-interfaces';
    import CardInput from '../components/CardInput.vue';

    const slots = useSlots();

    const props = withDefaults(defineProps<{
        modelValue: LktObject[],
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
        :new-value-generator="() => {}"
    >
        <template #item="{item, index, isLoading, canCreate, canRead, canUpdate, canDrop, doDrop}">
            <card-input
                v-model="items[index]">
                <template v-if="slots.item" v-slot:item="{item}">
                    <slot
                        name="item"
                        :item="item"
                    />
                </template>
            </card-input>
        </template>
    </lkt-table>
</template>