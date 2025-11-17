<script setup lang="ts">
    import { markRaw, ref, watch } from 'vue';
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import {
        FieldEvents,
        OptionConfig, OptionsConfig,
        TableConfig,
        TableType,
        TooltipConfig,
        TooltipLocationX,
        TooltipLocationY,
    } from 'lkt-vue-kernel';
    import { canDisplayOption } from '@/functions/option-functions.ts';

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
        tooltip: TooltipConfig
        events: FieldEvents
        optionsConfig: OptionsConfig
    }>(), {
        modelValue: '',
        events: () => ({})
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
        v-bind="<TooltipConfig>{
            ...tooltip,
            referrer: container,
            referrerWidth: true,
            locationX: TooltipLocationX.LeftCorner,
            locationY: TooltipLocationY.Bottom
        }"
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
                    optionsConfig,
                },
                itemDisplayChecker: (option: OptionConfig) => {
                    return canDisplayOption(option, '', true, optionsConfig?.filter)
                },
                itemSlotEvents: {
                    click: (item: OptionConfig, i: number) => {
                        if (optionsConfig.closeDropdownOnOptionClick) {
                            hasFocus = false;

                        } else {
                            cancelBlur();
                        }
                        if (typeof events.clickOption === 'function') {
                            props.events.clickOption({
                                option: item,
                            })
                        }
                    }
                }
            }"
            @page="cancelBlur"
            @click="cancelBlur"
        />
    </lkt-tooltip>
</template>