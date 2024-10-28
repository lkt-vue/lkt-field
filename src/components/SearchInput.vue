<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import DropdownOption from '@/components/dropdown/DropdownOption.vue';

    const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

    const props = withDefaults(defineProps<{
        modelValue: string
        optionsResource: string
        editable: boolean,
        focusing: boolean,
        disabled: boolean,
        readonly: boolean,
        tabindex: number,
        container: HTMLElement,
    }>(), {
        modelValue: '',
    });

    const value = ref(props.modelValue);

    const hasFocus = ref(props.focusing);
    let blurTimeout:Timeout|undefined = undefined;

    const onFocus = () => {
            hasFocus.value = true;
        },
        onBlur = () => {
            // blurTimeout = setTimeout(() => {
            //     hasFocus.value = false;
            // }, 100);
        };

    watch(hasFocus, v => {
        if (v) emit('focus');
        else emit('blur');
    });

    const computedFilters = computed(() => {
        return {
            query: value.value
        }
    })

</script>

<template>
    <input
        type="text"
        ref="input"
        v-model="value"
        @focus="onFocus"
        @blur="onBlur"
    />

    <lkt-tooltip
        v-if="editable"
        ref="dropdownEl"
        class="lkt-field--dropdown"
        v-model="hasFocus"
        :referrer="container"
        referrer-width
        location-x="left-corner"
        location-y="bottom"
    >
        <div v-if="hasFocus">
            <lkt-table
                :resource="optionsResource"
                :filters="computedFilters"
                items-container-class="lkt-field--dropdown-options"
                type="ul"
            >
                <template #item="{item, index, isLoading, canCreate, canUpdate, canDrop, canRead, doDrop}">
                    <dropdown-option
                        :option="item"
                        :editable="editable"
                    />
                </template>
            </lkt-table>
        </div>
    </lkt-tooltip>
</template>