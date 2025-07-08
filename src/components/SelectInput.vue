<script setup lang="ts">
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import {
        ButtonConfig,
        ButtonType, LktObject,
        MultipleOptionsDisplay,
        OptionConfig,
        TableConfig,
        TableType,
        TagConfig,
        TooltipConfig,
        TooltipLocationX,
        TooltipLocationY, ValidFieldValue,
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
        'update:pickedOptions',
        'focus',
        'blur',
        'change',
        'loaded',
        'autoload-start',
        'autoload-end',
    ]);

    const selectButton = ref(null);
    const dropdownEl = ref(null);

    const props = withDefaults(defineProps<SelectInputProps>(), {
        autoLoading: false,
        localAutoLoad: false,
        isAutoCompleteText: false,
        prop: () => ({}),
    });

    const editableValue = ref(props.modelValue);

    const focusedOptionIndex = ref(-1);

    const tagsEnabled = props.multiple && props.canTag;

    const originalOptions = typeof props.options === 'object' && props.optionValueType !== 'option' ? JSON.parse(JSON.stringify(props.options)) : props.options;

    const dropdownOptions = ref(<Array<OptionConfig>>[...prepareOptions(props.options, props.prop)]);

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
            });

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

    watch(editableOptions, (v) => {
        emit('update:pickedOptions', v);
    });

    /**
     * Options visibility
     */
    const canRenderDropdownTable = ref(false);
    const editableShowOptions = ref(props.showOptions);

    watch(editableShowOptions, v => {
        if (!tagsEnabled) emit('update:showOptions', v);
        nextTick(() => {
            if (!v) {
                buttonHasFocus.value = false;
                queryHasFocus.value = false;
                hasFocus.value = false;
            }
            canRenderDropdownTable.value = editableShowOptions.value;
        });
    });


    /**
     * Focus state
     */
    const hasFocus = ref(props.focusing),
        queryHasFocus = ref(false),
        buttonHasFocus = ref(false);

    watch(() => props.focusing, (v) => {
        if (v === hasFocus.value) return;

        nextTick(() => {
            if (v) {
                onFocusSelectButton();
            } else {
                onBlurSelectButton();
            }
        });
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
                hasFocus.value = buttonHasFocus.value;
                editableShowOptions.value = hasFocus.value;
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
                    pickedOptions: editableOptions.value,
                })) {
                    query.value = '';
                }
            } else if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
                let handled = handleDropdownOptionsKeyboardNavigation({
                    event,
                    options: dropdownOptions,
                    focusing: props.focusing,
                    container: dropdownEl,
                    focusedIndex: focusedOptionIndex,
                    optionsConfig: props.optionsConfig,
                    query: query.value,
                });

                if (typeof handled === 'object') {
                    onClickOption(handled);
                }
            } else if (['Escape'].includes(event.key)) {
                queryHasFocus.value = false;
                buttonHasFocus.value = false;
                hasFocus.value = false;
                editableShowOptions.value = false;
            }
        },
        onFocusQueryInput = (event: FocusEvent) => {
            queryHasFocus.value = true;
            buttonHasFocus.value = false;
            hasFocus.value = true;
            editableShowOptions.value = true;
        };

    const keepFocused = () => {
        clearTimeout(queryBlurTimeout);
        clearTimeout(buttonBlurTimeout);
        setTimeout(() => {
            if (queryField.value) {
                //@ts-ignore
                queryField.value.focus();
            }
        }, 100);
    };

    const onBlurSelectButton = (event?: Event) => {
            if (computedRenderSearchUI.value) return;
            buttonBlurTimeout = setTimeout(() => {
                buttonHasFocus.value = false;
                hasFocus.value = queryHasFocus.value;
                editableShowOptions.value = hasFocus.value;
            }, 100);
        },
        onKeyUpSelectButton = (event: KeyboardEvent) => {
            buttonHasFocus.value = true;

            if (['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) {
                let handled = handleDropdownOptionsKeyboardNavigation({
                    event,
                    options: dropdownOptions,
                    focusing: props.focusing,
                    container: dropdownEl,
                    focusedIndex: focusedOptionIndex,
                    optionsConfig: props.optionsConfig,
                    query: query.value,
                });

                if (typeof handled === 'object') {
                    onClickOption(handled);
                }
            } else if (['Escape'].includes(event.key)) {
                queryHasFocus.value = false;
                buttonHasFocus.value = false;
                hasFocus.value = false;
                editableShowOptions.value = false;
            }
        },
        onFocusSelectButton = (event?: FocusEvent) => {
            if (props.searchable) {
                buttonHasFocus.value = false;
                queryHasFocus.value = true;
                hasFocus.value = true;
                editableShowOptions.value = true;
                nextTick(() => {
                    keepFocused();
                });
            } else {
                buttonHasFocus.value = true;
                queryHasFocus.value = false;
                hasFocus.value = true;
                editableShowOptions.value = true;
            }
        },
        onClickOptionIcon = (option: OptionConfig) => {
            removeTag({
                value: editableValue,
                option,
                optionValueType: props.optionValueType,
                options: dropdownOptions,
                pickedOptions: editableOptions.value,
            });
        },
        doClear = () => {
            if (props.isAutoCompleteText) {
                query.value = '';
                editableValue.value = '';

            } else {

                if (props.multiple) {
                    (<Array<OptionConfig>>editableValue.value).splice(0, (<Array<OptionConfig>>editableValue.value).length);
                } else {
                    editableValue.value = '';
                }
            }

            editableOptions.value.splice(0, editableOptions.value.length);
            nextTick(() => {
                syncPicked();
            });
        },
        doUndo = (originalValue: ValidFieldValue) => {
            if (props.isAutoCompleteText) {
                editableValue.value = <string>originalValue;

            } else {

                if (props.multiple) {
                    (<Array<OptionConfig>>editableValue.value).splice(0, (<Array<OptionConfig>>editableValue.value).length);
                    let i = 0, l = (<Array<OptionConfig>>originalValue).length;
                    while (i < l) {
                        (<Array<OptionConfig>>editableValue.value).push(
                            (<Array<OptionConfig>>originalValue)[i],
                        );
                        ++i;
                    }
                } else {
                    editableValue.value = <string>originalValue;
                }
            }

            editableOptions.value.splice(0, editableOptions.value.length);
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
                pickedOptions: editableOptions.value,
                tagMode: tagsEnabled,
                searchMode: props.searchable,
                keepFocused,
                optionValueType: props.optionValueType,
                callback: props.events?.clickOption,
                optionsConfig: props.optionsConfig,
            })
            : handleOptionClickSingle({
                option,
                value: editableValue,
                pickedOptions: editableOptions.value,
                showOptions: editableShowOptions.value,
                optionValueType: props.optionValueType,
                callback: props.events?.clickOption,
                optionsConfig: props.optionsConfig,
            });

        if (fineHandled) {
            if (props.searchable && !props.multiple) query.value = '';

            if (typeof props.events.clickOption === 'function') {
                props.events.clickOption({
                    option,
                });
            }
        }
    };

    const syncPicked = () => {
        if (props.multiple) {
            syncPickedOptions({
                value: editableValue,
                options: dropdownOptions.value,
                pickedOptions: editableOptions.value,
                multiple: props.multiple,
                optionValueType: props.optionValueType,
            });
        } else {
            syncPickedOptions({
                value: editableValue,
                options: dropdownOptions.value,
                pickedOptions: editableOptions.value,
                multiple: props.multiple,
                optionValueType: props.optionValueType,
            });
        }

        emit('loaded');
    };

    const onReadResponse = () => {

            if (props.autoLoading && props.optionsConfig.autoloadResource === 'feed' && props.multiple) {
                for (let i = 0; i < dropdownOptions.value.length; ++i) {
                    if (props.optionValueType === 'option') {
                        editableValue.value.push(dropdownOptions.value[i]);

                    } else {
                        editableValue.value.push(dropdownOptions.value[i].value);
                    }
                }
            }

            focusedOptionIndex.value = -1;
            syncPicked();
        };

    const computedDropdownPaginatorConfig = computed(() => {

            if (!props.optionsConfig.http?.resource) return undefined;

            let resourceData = {
                ...props.optionsConfig.http?.data,
            };

            if (Settings.searchKeyForResource !== '') resourceData[Settings.searchKeyForResource] = query.value;

            const httpStart = (data: any) => {
                if (props.autoLoading && props.optionsConfig.autoloadResource) {
                    emit('autoload-start');
                }

                if (typeof props.optionsConfig.http?.events?.onStart === 'function') {
                    props.optionsConfig.http?.events?.onStart(data);
                }
            };
            const httpEnd = (data: any) => {
                if (props.autoLoading && props.optionsConfig.autoloadResource) {
                    emit('autoload-end');
                }

                if (typeof props.optionsConfig.http?.events?.onEnd === 'function') {
                    props.optionsConfig.http?.events?.onEnd(data);
                }
            };

            return {
                resource: props.optionsConfig.http?.resource,
                resourceData,
                events: {
                    httpStart,
                    httpEnd,
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
            :disabled="editableOptions.length === max"
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
                text: editableOptions.length
            }"
        />

        <lkt-tag
            v-else-if="editableOptions.length > 0"
            v-bind="<TagConfig>{
                icon: editableOptions[0].icon ?? optionsConfig.icon,
                text: editableOptions[0].label
            }"
        />

        <input
            v-model="query"
            ref="queryField"
            :value="query"
            :placeholder="searchPlaceholder"
            :disabled="editableOptions.length === max"
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
            type: tagsEnabled || !(typeof optionsConfig?.canRenderDropdown === 'undefined' || optionsConfig?.canRenderDropdown === true) ? ButtonType.Content : ButtonType.Button,
            class: 'lkt-field--toggle-button lkt-field--select-button',
        }"
        @keyup="onKeyUpSelectButton"
        @blur="onBlurSelectButton"
        @focus="onFocusSelectButton"
    >
        <template v-if="tagsEnabled || (multiple && editableOptions.length > 0)">
            <div v-if="multipleDisplayEdition === MultipleOptionsDisplay.Count">
                {{ editableOptions.length }}
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
            v-else-if="!multiple && editableOptions.length > 0"
            v-bind="<DropdownOptionProps>{
                item: editableOptions[0],
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
        v-if="typeof optionsConfig?.canRenderDropdown === 'undefined' || optionsConfig?.canRenderDropdown === true"
        ref="dropdownEl"
        :is="computedDropdownTag"
        v-bind="autoLoading ? {} : <TooltipConfig>{
            class: 'lkt-field--dropdown',
            referrer: computedReferrer,
            referrerWidth: true,
            locationX: TooltipLocationX.LeftCorner,
            locationY: TooltipLocationY.Bottom,
            ...tooltip,
            modelValue: editableShowOptions,
            remoteControl: true,
        }"
    >
        <lkt-table
            ref="optionList"
            v-if="(autoLoading && !localAutoLoad) || canRenderDropdownTable"
            v-show="!autoLoading"
            v-model="dropdownOptions"
            v-bind="<TableConfig>{
                type: TableType.Ul,
                editMode: editable,
                paginator: computedDropdownPaginatorConfig,
                events: {
                    parseResults: (data: LktObject[]) => {
                        if (optionsConfig.http?.resource) {
                            return receiveOptions(prepareOptions(originalOptions, props.prop), <OptionConfig[]>data, prop);
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
                    query,
                    editableValue,
                    multiple,
                    focusedOptionIndex,
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