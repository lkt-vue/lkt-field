<script setup lang="ts">
    import { computed, ref, useSlots } from 'vue';
    import { LktObject } from 'lkt-ts-interfaces';
    import CardInput from '../components/CardInput.vue';

    const slots = useSlots();

    const props = withDefaults(defineProps<{
        modelValue: LktObject[],
        editable?: boolean,
        min: number|false,
        max: number|false,
        focusing: boolean,
        hadFirstFocus: boolean,
        disabled: boolean,
        readonly: boolean,
        tabindex: number,
        modal?: string | Function
        modalKey?: string | number | Function
        modalData?: LktObject
    }>(), {
        modelValue: () => [],
        editable: false,
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
        :edit-mode="editable"
        :new-value-generator="() => {}"
    >
        <template #item="{item, index, isLoading, canCreate, canRead, canUpdate, canDrop, doDrop}">
            <card-input
                v-model="items[index]">
                <template v-if="slots.item" v-slot:item="{item}">
                    <slot
                        name="item"
                        :item="item"
                        :focusing="focusing"
                        :had-first-focus="hadFirstFocus"
                        :disabled="disabled"
                        :readonly="readonly"
                        :modal="modal"
                        :modal-key="modalKey"
                        :modal-data="modalData"
                    />
                </template>
            </card-input>
        </template>
    </lkt-table>
</template>