<script setup lang="ts">
    import { LktObject } from 'lkt-ts-interfaces';
    import { ref } from 'vue';

    const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

    const props = withDefaults(defineProps<{
        modelValue: LktObject
        name?: string
        id?: string
        optionsResource?: string
        editable?: boolean,
        focusing?: boolean,
        hadFirstFocus?: boolean,
        disabled?: boolean,
        readonly?: boolean,
        tabindex?: number,
        modal?: string | Function
        modalKey?: string | number | Function
        modalData?: LktObject
        itemType?: string
    }>(), {
        modelValue: () => ({}),
        modal: '',
        modalKey: '_',
        modalData: () => ({}),
        itemType: '',
    });

    const value = ref(props.modelValue);

    const onClick = (event: MouseEvent, data: LktObject) => {
        // console.log(data);
    };
</script>

<template>
    <lkt-button
        :modal="modal"
        :modal-key="modalKey"
        :modal-data="modalData"
        @click="onClick">
        <template v-if="value">
            <slot
                name="item"
                :item="value"
            />
        </template>
        <template v-else>
            <p>No data</p>
        </template>
    </lkt-button>
</template>