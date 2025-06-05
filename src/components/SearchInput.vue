<script setup lang="ts">
    import { markRaw, ref, watch } from 'vue';
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import { TableConfig, TableType } from 'lkt-vue-kernel';

    const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

    const props = withDefaults(defineProps<{
        modelValue: string
        name: string
        id: string
        optionsResource: string
        editable: boolean
        focusing: boolean
        hadFirstFocus: boolean
        disabled: boolean
        readonly: boolean
        tabindex: number
        container: HTMLElement
    }>(), {
        modelValue: '',
    });

    const value = ref(props.modelValue);

    const hasFocus = ref(props.focusing);
    let focusTimeout:ReturnType<typeof setTimeout>|undefined = undefined;
    let blurTimeout:ReturnType<typeof setTimeout>|undefined = undefined;
    let searchTimeout:ReturnType<typeof setTimeout>|undefined = undefined;

    const filters = ref({});
    const updateFilters = () => {
        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(() => {
            filters.value = {
                query: value.value
            }
        }, 300);
    }

    const onFocus = () => {
            hasFocus.value = true;
        },
        onBlur = () => {
            blurTimeout = setTimeout(() => {
                hasFocus.value = false;
            }, 100);
        };

    watch(hasFocus, v => {
        if (v) emit('focus');
        else emit('blur');
    });

    const cancelBlur = () => {
        clearTimeout(blurTimeout);
        focusTimeout = setTimeout(() => {
            onFocus();
        }, 100);
    }

</script>

<template>
    <input
        :id="id"
        type="text"
        ref="input"
        v-model="value"
        @focus="onFocus"
        @blur="onBlur"
        @keyup="updateFilters"
    />

    <lkt-tooltip
        v-if="editable && hadFirstFocus"
        ref="dropdownEl"
        class="lkt-field--dropdown lkt-field--search-results"
        v-model="hasFocus"
        :referrer="container"
        referrer-width
        location-x="left-corner"
        location-y="bottom"
    >
        <lkt-table
            v-bind="<TableConfig>{
                type: TableType.Ul,
                itemsContainerClass: 'lkt-field--dropdown-options',
                paginator: {
                    resource: optionsResource,
                    resourceData: filters,
                },
                itemSlotComponent: markRaw(DropdownOption),
                itemSlotData: {
                    optionSlot: '',
                    editable,
                    prop: {},
                    isTag: false,
                    optionsConfig: {},
                },
                itemSlotEvents: {
                    click: cancelBlur
                }
            }"
            @page="cancelBlur"
            @click="cancelBlur"
        />
    </lkt-tooltip>
</template>