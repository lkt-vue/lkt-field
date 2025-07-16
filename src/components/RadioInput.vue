<script setup lang="ts">
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import { OptionConfig, TableConfig, TableType, ValidFieldValue } from 'lkt-vue-kernel';
    import { computed, markRaw, nextTick, onMounted, ref, watch } from 'vue';
    import {
        canDisplayOption,
        handleOptionClickMultiple,
        handleOptionClickSingle,
        optionIsActive,
        pickFirstOption,
        prepareOptions,
        syncPickedOptions,
    } from '@/functions/option-functions.ts';
    import { DataState } from 'lkt-data-state';
    import { RadioInputProps } from '@/config/RadioInputProps.ts';

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

    const props = withDefaults(defineProps<RadioInputProps>(), {
        prop: () => ({}),
    });

    const editableValue = ref(props.modelValue);

    const focusedOptionIndex = ref(-1);

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
                    query: '',
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
        emit('update:showOptions', v);
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

    let buttonBlurTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

    const keepFocused = () => {
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
        doClear = () => {
            if (props.multiple) {
                (<Array<OptionConfig>>editableValue.value).splice(0, (<Array<OptionConfig>>editableValue.value).length);
            } else {
                editableValue.value = '';
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

    const computedRenderSearchUI = computed(() => {
        return !props.multiple && props.searchable && hasFocus.value;
    });

    const onClickOption = (option: OptionConfig) => {

        const fineHandled = props.multiple
            ? handleOptionClickMultiple({
                option,
                value: editableValue,
                pickedOptions: editableOptions,
                tagMode: false,
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

    onMounted(() => {
        syncPicked();
    });

</script>

<template>
    <lkt-table
        ref="optionList"
        v-model="dropdownOptions"
        v-bind="<TableConfig>{
            type: TableType.Ul,
            editMode: editable,
            itemDisplayChecker: (option: OptionConfig) => {
                return canDisplayOption(option, query, true, optionsConfig?.filter)
            },
            itemsContainerClass: `lkt-field--dropdown-options lkt-field--radio-options`,
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
                isTag: false,
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
    />
</template>