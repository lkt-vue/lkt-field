<script setup lang="ts">
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import {
        ButtonConfig,
        ButtonType,
        MultipleOptionsDisplay,
        OptionConfig,
        TableConfig,
        TableType,
        TagConfig,
        TooltipConfig,
        TooltipLocationX,
        TooltipLocationY,
    } from 'lkt-vue-kernel';
    import { computed, markRaw, nextTick, onMounted, ref, watch } from 'vue';
    import {
        canDisplayOption,
        createTag,
        handleDropdownOptionsKeyboardNavigation,
        handleOptionClickMultiple,
        handleOptionClickSingle,
        optionIsActive, pickFirstOption,
        prepareOptions,
        receiveOptions,
        removeTag,
        syncPickedOptions,
    } from '@/functions/option-functions.ts';
    import { SelectInputProps } from '@/config/SelectInputProps.ts';
    import { DropdownOptionProps } from '@/config/DropdownOptionProps.ts';
    import { Settings } from '@/settings/Settings.ts';
    import { DataState } from 'lkt-data-state';

    const emit = defineEmits([
        'update:modelValue',
        'update:showOptions',
        'update:options',
        'focus',
        'blur',
        'change',
        'loaded',
    ]);

    const selectButton = ref(null);
    const dropdownEl = ref(null);

    const props = withDefaults(defineProps<SelectInputProps>(), {
        autoLoading: false,
        isAutoCompleteText: false,
        prop: () => ({}),
    });

    const editableValue = ref(props.modelValue);

    const focusedOptionIndex = ref(-1);

    const tagsEnabled = props.multiple && props.canTag;

    const originalOptions = typeof props.options === 'object' ? JSON.parse(JSON.stringify(props.options)) : props.options;

    const dropdownOptions = ref(<Array<OptionConfig>>[...prepareOptions(originalOptions, props.prop)]);

    const enabledPropsOptionsWatcher = ref(true);
    watch(enabledPropsOptionsWatcher, (v) => {
        if (!v) nextTick(() => {
            enabledPropsOptionsWatcher.value = true;
        });
    });

    watch(() => props.modelValue, (v) => {
        if (!v && props.optionsConfig?.autoPickFirstOptionIfEmpty) {
            props.pickedOptions.splice(0, props.pickedOptions.length);
            nextTick(() => {
                pickFirstOption({
                    value: editableValue,
                    optionValueType: props.optionValueType,
                    multiple: props.multiple,
                    query: query.value,
                    optionsConfig: props.optionsConfig,
                    options: dropdownOptions,
                    pickedOptions: props.pickedOptions,
                });
            })

        } else {
            editableValue.value = v;
        }
    }, { deep: true });

    watch(editableValue, (v) => {
        emit('update:modelValue', v);
    }, { deep: true });

    watch(dropdownOptions, (v) => {
        if (typeof props.events?.updatedOptions === 'function') {
            enabledPropsOptionsWatcher.value = false;
            props.events.updatedOptions({
                options: v,
            });
        }
        emit('update:options', v);
    });

    watch(() => props.options, (v, oldValue) => {
        if (!enabledPropsOptionsWatcher.value) return;

        let checker = new DataState({
            opts: oldValue,
        });
        checker.increment({ opts: v });
        if (!checker.changed()) return;
        dropdownOptions.value = prepareOptions(v, props.prop);
        syncPicked();
    }, { deep: true });

    /**
     * Search query
     */
    const query = ref(''),
        queryField = ref(null),
        editableOptions = ref(props.pickedOptions);

    /**
     * Options visibility
     */
    const editableShowOptions = ref(props.showOptions);
    watch(editableShowOptions, v => {
        if (!tagsEnabled) emit('update:showOptions', v);
        nextTick(() => {
            canRenderDropdownTable.value = editableShowOptions.value;
        });
    });

    const canRenderDropdownTable = ref(false);

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

    let queryBlurTimeout: ReturnType<typeof setTimeout> | undefined = undefined,
        buttonBlurTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

    const onBlurQueryInput = (event: Event) => {
            queryBlurTimeout = setTimeout(() => {
                queryHasFocus.value = false;
            }, 100);
        },
        onKeyUpQueryInput = (event: KeyboardEvent) => {
            queryHasFocus.value = true;
            if (tagsEnabled && event.key === 'Enter') {
                if (query.value.length === 0) return;

                if (createTag({
                    value: editableValue,
                    query: query.value,
                    optionValueType: props.optionValueType,
                    options: dropdownOptions,
                    pickedOptions: props.pickedOptions,
                })) {
                    query.value = '';
                }
            } else if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
                handleDropdownOptionsKeyboardNavigation({
                    event,
                    options: dropdownOptions,
                    focusing: props.focusing,
                    container: dropdownEl,
                    focusedIndex: focusedOptionIndex,
                    optionsConfig: props.optionsConfig,
                    query: query.value,
                });
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
        });
    };

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
        onClickOptionIcon = (option: OptionConfig) => {
            removeTag({
                value: editableValue,
                option,
                optionValueType: props.optionValueType,
                options: dropdownOptions,
                pickedOptions: props.pickedOptions,
            });
        },
        doClear = () => {
            if (props.isAutoCompleteText) query.value = '';
            props.pickedOptions.splice(0, props.pickedOptions.length);
            nextTick(() => {
                syncPicked();
            });
        },
        doUndo = () => {
            nextTick(() => {
                syncPicked();
            });
        };

    defineExpose({
        doClear,
        doUndo,
        keepFocused,
        switchShowOptions: () => {
            editableShowOptions.value = !editableShowOptions.value;
        },
    });

    watch(() => props.pickedOptions, (v) => {
        emit('change');
        editableOptions.value = v;
    }, { deep: true });

    watch(editableShowOptions, (v) => {
        if (!v) {
            buttonHasFocus.value = false;
            queryHasFocus.value = false;
            checkGlobalFocus();
        }
    });

    const computedRenderMultipleSearchUi = computed(() => {
        return props.multiple && (props.canTag || props.searchable);
    });

    const computedRenderSearchUI = computed(() => {
        return !props.multiple && props.searchable && hasFocus.value;
    });

    const onClickOption = (option: OptionConfig) => {

        if (props.isAutoCompleteText) {
            query.value = option.value;
            editableValue.value = option.value;
            return;
        }

        const fineHandled = props.multiple
            ? handleOptionClickMultiple({
                option,
                value: editableValue,
                pickedOptions: props.pickedOptions,
                tagMode: tagsEnabled,
                searchMode: props.searchable,
                keepFocused,
                optionValueType: props.optionValueType,
                callback: props.events?.clickOption,
            })
            : handleOptionClickSingle({
                option,
                value: editableValue,
                pickedOptions: props.pickedOptions,
                showOptions: editableShowOptions.value,
                optionValueType: props.optionValueType,
                callback: props.events?.clickOption,
            });

        if (fineHandled && typeof props.events.clickOption === 'function') {
            console.log('clickedOption!');
            props.events.clickOption({
                option,
            });
        }
    };

    const syncPicked = () => {
        if (props.multiple) {
            syncPickedOptions({
                value: editableValue,
                options: dropdownOptions.value,
                pickedOptions: props.pickedOptions,
                multiple: props.multiple,
                optionValueType: props.optionValueType,
            });
        } else {
            syncPickedOptions({
                value: editableValue,
                options: dropdownOptions.value,
                pickedOptions: props.pickedOptions,
                multiple: props.multiple,
                optionValueType: props.optionValueType,
            });
        }

        emit('loaded');
    };

    const onReadResponse = () => {
        focusedOptionIndex.value = -1;
        syncPicked();
    };

    const computedDropdownPaginatorConfig = computed(() => {

            if (!props.optionsConfig.http?.resource) return undefined;

            let resourceData = {
                ...props.optionsConfig.http?.data,
            };

            if (Settings.searchKeyForResource !== '') resourceData[Settings.searchKeyForResource] = query.value;

            return {
                resource: props.optionsConfig.http?.resource,
                resourceData,
                events: {
                    httpStart: props.optionsConfig.http?.events?.onStart,
                    httpEnd: props.optionsConfig.http?.events?.onEnd,
                },
            };
        }),
        computedDropdownTag = computed(() => {
            if (props.autoLoading) return 'div';
            return 'lkt-tooltip';
        }),
        computedReferrer = computed(() => {
            if (props.isAutoCompleteText || computedRenderSearchUI.value || computedRenderMultipleSearchUi.value) return queryField.value;
            //@ts-ignore
            // if (props.multiple) return selectButton.value;
            return props.referrer;
        });

    onMounted(() => {
        if (props.isAutoCompleteText) {
            //@ts-ignore
            query.value = editableValue.value;
        }
        syncPicked();
    });

</script>

<template>
    <div v-if="isAutoCompleteText" class="lkt-field--searchable-box">
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
    <div v-else-if="!autoLoading && (computedRenderSearchUI || computedRenderMultipleSearchUi)"
         class="lkt-field--searchable-box">

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
        v-if="!autoLoading && !isAutoCompleteText"
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
                        previewMode: true,
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
                    previewMode: true,
                    prop,
                    isTag: tagsEnabled,
                    optionsConfig,
                }
            }"
        />
    </lkt-button>

    <component
        ref="dropdownEl"
        :is="computedDropdownTag"
        v-model="editableShowOptions"
        v-bind="autoLoading ? {} : <TooltipConfig>{
            class: 'lkt-field--dropdown',
            referrer: computedReferrer,
            referrerWidth: true,
            locationX: TooltipLocationX.LeftCorner,
            locationY: TooltipLocationY.Bottom,
            ...tooltip
        }"
    >
        <lkt-table
            ref="optionList"
            v-if="autoLoading || canRenderDropdownTable"
            v-show="!autoLoading"
            v-model="dropdownOptions"
            v-bind="<TableConfig>{
                type: TableType.Ul,
                editMode: editable,
                paginator: computedDropdownPaginatorConfig,
                events: {
                    parseResults: (data: OptionConfig[]) => {
                        if (optionsConfig.http?.resource) {
                            return receiveOptions(prepareOptions(originalOptions, props.prop), data, prop);
                        }
                        return prepareOptions(originalOptions, props.prop);
                    }
                },
                itemDisplayChecker: (option: OptionConfig) => {
                    return canDisplayOption(option, query, true, optionsConfig?.filter)
                },
                itemsContainerClass: `lkt-field--dropdown-options`,
                itemContainerClass: (option: OptionConfig, index: number) => {
                    let r = [];
                    if (optionIsActive(option, editableValue, multiple)) r.push('is-active');
                    if (focusedOptionIndex === index) r.push('is-focused');
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
            @read-response="onReadResponse"
        />
    </component>
</template>