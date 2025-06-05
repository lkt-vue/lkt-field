<script setup lang="ts">
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import {
        ButtonConfig,
        ButtonType,
        MultipleOptionsDisplay,
        Option,
        OptionConfig,
        TableConfig,
        TableType,
        TagConfig,
        TooltipConfig,
        TooltipLocationX,
        TooltipLocationY,
    } from 'lkt-vue-kernel';
    import { computed, markRaw, nextTick, ref, watch } from 'vue';
    import {
        canDisplayOption,
        handleOptionClickMultiple,
        handleOptionClickSingle,
        optionIsActive,
        prepareOptions,
        receiveOptions,
    } from '@/functions/option-functions.ts';
    import { SelectInputProps } from '@/config/SelectInputProps.ts';
    import { DropdownOptionProps } from '@/config/DropdownOptionProps.ts';

    const emit = defineEmits([
        'update:modelValue',
        'update:showOptions',
        'update:pickedOptions',
        'focus',
        'blur',
        'navigate',
        'search',
        'change',
        'tag',
        'untag',
    ]);

    const selectButton = ref(null);
    const dropdownEl = ref(null);

    const props = withDefaults(defineProps<SelectInputProps>(), {
        modelValue: false,
        prop: () => ({})
    });

    const tagsEnabled = props.multiple && props.canTag;

    const tableItems = ref(<Array<OptionConfig>>prepareOptions(props.options, props.prop));
    console.log('tableItems: ', tableItems.value);

    /**
     * Search query
     */
    const query = ref(props.searchString),
        queryField = ref(null),
        editableOptions = ref(props.pickedOptions);

    /**
     * Options visibility
     */
    const editableShowOptions = ref(props.showOptions);
    watch(editableShowOptions, v => {
        if (!tagsEnabled) emit('update:showOptions', v);
    });

    /**
     * Focus state
     */
    const hasFocus = ref(props.focusing),
        queryHasFocus = ref(false),
        buttonHasFocus = ref(false);

    watch(() => props.focusing, (v) => {
        if (v) {
            buttonHasFocus.value = true;
        } else {
            buttonHasFocus.value = false;
        }
        checkGlobalFocus();
    });

    const checkGlobalFocus = () => {
        nextTick(() => {
            hasFocus.value = queryHasFocus.value || buttonHasFocus.value;
            editableShowOptions.value = hasFocus.value;
        });
    };

    watch(queryHasFocus, v => {
        if (v) buttonHasFocus.value = false;
        checkGlobalFocus();
    });

    watch(buttonHasFocus, v => {
        if (v) queryHasFocus.value = false;
        checkGlobalFocus();
    });

    watch(hasFocus, v => {
        if (v) emit('focus');
        else emit('blur');
    });

    let queryBlurTimeout:ReturnType<typeof setTimeout>|undefined = undefined,
        buttonBlurTimeout:ReturnType<typeof setTimeout>|undefined = undefined;

    const onBlurQueryInput = (event: Event) => {
            queryBlurTimeout = setTimeout(() => {
                queryHasFocus.value = false;
            }, 100);
        },
        onKeyUpQueryInput = (event: KeyboardEvent) => {
            queryHasFocus.value = true;
            if (tagsEnabled && event.key === 'Enter') {
                emit('tag', query.value);
                query.value = '';
            }
            else if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
                emit('navigate', event);
            } else {
                emit('search', query.value);
            }
        },
        onFocusQueryInput = (event: FocusEvent) => {
            queryHasFocus.value = true;
        };

    const keepFocused = () => {
        clearTimeout(queryBlurTimeout);
        clearTimeout(buttonBlurTimeout);
        nextTick(() => {
            //@ts-ignore
            if (queryField.value) queryField.value.focus();
        })
    }

    const onBlurSelectButton = (event: Event) => {
            if (computedRenderSearchUI.value) return;
            buttonBlurTimeout = setTimeout(() => {
                buttonHasFocus.value = false;
            }, 100);
        },
        onKeyUpSelectButton = (event: KeyboardEvent) => {
            buttonHasFocus.value = true;

            if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
                emit('navigate', event);
            }
        },
        onFocusSelectButton = (event: FocusEvent) => {
            buttonHasFocus.value = true;
        },
        onClickOptionIcon = (option: Option) => {
            emit('untag', option);
        };

    defineExpose({
        keepFocused,
        switchShowOptions: () => {
            editableShowOptions.value = !editableShowOptions.value;
        }
    });

    watch(() => props.pickedOptions, (v) => {
        emit('change')
        editableOptions.value = v;
    }, {deep: true})

    watch(editableOptions, (v) => {
        emit('update:pickedOptions', v);
    }, {deep: true})

    watch(editableShowOptions, (v) => {
        if (!v) {
            buttonHasFocus.value = false;
            queryHasFocus.value = false;
            checkGlobalFocus();
        }
    })

    const computedRenderMultipleSearchUi = computed(() => {
        return props.multiple && (props.canTag || props.searchable);
    })

    const computedRenderSearchUI = computed(() => {
        return !props.multiple && props.searchable && hasFocus.value;
    })

    const onClickOption = (option: OptionConfig) => {

        const fineHandled = props.multiple
            ? handleOptionClickMultiple({
                option,
                value: props.modelValue,
                pickedOptions: props.pickedOptions,
                tagMode: tagsEnabled,
                searchMode: props.searchable,
                keepFocused,
                optionValueType: props.optionValueType,
                callback: props.events?.clickOption
            })
            : handleOptionClickSingle({
                option,
                value: props.modelValue,
                pickedOptions: props.pickedOptions,
                showOptions: editableShowOptions.value,
                optionValueType: props.optionValueType,
                callback: props.events?.clickOption
            });

        if (fineHandled) {
            emit('selected-option', option);
        }
    };

</script>

<template>
    <div v-if="computedRenderSearchUI || computedRenderMultipleSearchUi" class="lkt-field--searchable-box">

        <lkt-tag
            v-if="multiple"
            v-bind="<TagConfig>{
                icon: optionsConfig.icon,
                text: pickedOptions.length
            }"
        />

        <lkt-tag
            v-else-if="pickedOptions.length > 0"
            v-bind="<TagConfig>{
                icon: pickedOptions[0].icon ?? optionsConfig.icon,
                text: pickedOptions[0].label
            }"
        />

        <input
            v-model="query"
            ref="queryField"
            :value="query"
            :placeholder="searchPlaceholder"
            :disabled="pickedOptions.length === max"
            type="text"
            tabindex="-1"
            autocomplete="off"
            @keyup="onKeyUpQueryInput"
            @blur="onBlurQueryInput"
            @focus="onFocusQueryInput"
        />
    </div>

    <lkt-button
        ref="selectButton"
        v-show="!computedRenderSearchUI || computedRenderMultipleSearchUi"
        v-bind="<ButtonConfig>{
            type: tagsEnabled ? ButtonType.Content : ButtonType.Button,
            class: 'lkt-field--toggle-button lkt-field--select-button',
        }"
        @keyup="onKeyUpSelectButton"
        @blur="onBlurSelectButton"
        @focus="onFocusSelectButton"
    >
        <template v-if="tagsEnabled || (multiple && pickedOptions.length > 0)">
            <div v-if="multipleDisplayEdition === MultipleOptionsDisplay.Count">
                {{ pickedOptions.length }}
            </div>

            <lkt-table
                v-else-if="multipleDisplayEdition === MultipleOptionsDisplay.Table"
                v-model="editableOptions"
                v-bind="<TableConfig>{
                    ...optionsConfig.table,
                    editMode: editable
                }"
            />

            <lkt-table
                v-else
                v-model="editableOptions"
                v-bind="<TableConfig>{
                    type: TableType.Ul,
                    editMode: editable,
                    itemsContainerClass: `lkt-field-select-read multiple-display-${multipleDisplayEdition}`,
                    itemSlotComponent: markRaw(DropdownOption),
                    itemSlotData: {
                        optionSlot,
                        editable: false,
                        prop,
                        isTag: tagsEnabled,
                        optionsConfig,
                    },
                    itemSlotEvents: {
                        clickIcon: onClickOptionIcon
                    }
                }"
            />
        </template>
        <dropdown-option
            v-else-if="!multiple && pickedOptions.length > 0"
            v-bind="<DropdownOptionProps>{
                item: pickedOptions[0],
                data: {
                    optionSlot,
                    editable: false,
                    prop,
                    isTag: tagsEnabled,
                    optionsConfig,
                }
            }"
        />
    </lkt-button>

    <lkt-tooltip
        ref="dropdownEl"
        v-model="editableShowOptions"
        v-bind="<TooltipConfig>{
            class: 'lkt-field--dropdown',
            referrer,
            referrerWidth: true,
            locationX: TooltipLocationX.LeftCorner,
            locationY: TooltipLocationY.Bottom,
            ...tooltip
        }"
    >
        <lkt-table
            ref="optionList"
            v-if="editableShowOptions"
            v-model="tableItems"
            v-bind="<TableConfig>{
                type: TableType.Ul,
                editMode: editable,
                paginator: {
                    resource: optionsConfig.http?.resource,
                    resourceData: optionsConfig.http?.data,
                },
                events: {
                    parseResults: (data: OptionConfig[]) => {
                        return receiveOptions(tableItems, data, prop);
                    }
                },
                itemDisplayChecker: (option: OptionConfig) => {
                    console.log('canDisplayOption: ', canDisplayOption(option, query, true, optionsConfig?.filter));
                    return canDisplayOption(option, query, true, optionsConfig?.filter)
                },
                itemsContainerClass: `lkt-field--dropdown-options`,
                itemContainerClass: (option: OptionConfig, index: number) => {
                    let r = [];
                    if (optionIsActive(option, props.modelValue, multiple)) r.push('is-active');
                    if (props.focusedOptionIndex === index) r.push('is-focused');
                    if (option.disabled) r.push('is-disabled')
                    return r.join(' ');
                },
                itemSlotComponent: markRaw(DropdownOption),
                itemSlotData: {
                    optionSlot,
                    editable,
                    prop,
                    isTag: tagsEnabled,
                    optionsConfig,
                },
                itemSlotEvents: {
                    click: (item: OptionConfig, i: number) => {
                        onClickOption(item);
                    }
                }
            }"
        />
    </lkt-tooltip>
</template>