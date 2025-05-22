<script lang="ts" setup>
    import { formatNumber, generateRandomString, isEmail, stripTags, trim } from 'lkt-string-tools';
    import { ComponentPublicInstance, computed, nextTick, onMounted, ref, useSlots, watch } from 'vue';
    import { Settings } from '../settings/Settings';
    import { httpCall, HTTPResponse } from 'lkt-http-client';
    import { currentLanguage } from 'lkt-i18n';
    import {
        booleanFieldTypes,
        ButtonConfig,
        extractI18nValue,
        extractPropValue,
        Field,
        FieldAutoValidationTrigger,
        FieldConfig,
        fieldsWithMultipleMode,
        FieldType,
        fieldTypesWithOptions,
        fieldTypesWithoutClear,
        fieldTypesWithoutUndo,
        FieldValidation,
        FieldValidationType,
        FileEntity,
        getDefaultValues,
        LktObject,
        LktSettings,
        Option, OptionConfig,
        textFieldTypes,
        ToastConfig,
        ToastPositionX,
        TooltipConfig,
        TooltipLocationX,
        TooltipLocationY,
        ValidationStatus,
    } from 'lkt-vue-kernel';
    import UndoButton from '../components/buttons/UndoButton.vue';
    import ClearButton from '../components/buttons/ClearButton.vue';
    import PasswordButton from '../components/buttons/PasswordButton.vue';
    import EditionButton from '../components/buttons/EditionButton.vue';
    import EllipsisActionsButton from '../components/buttons/EllipsisActionsButton.vue';
    import I18nButton from '../components/buttons/I18nButton.vue';
    import { ensureNumberBetween } from '../functions/numeric-functions';
    import {
        filterOptions,
        findOptionByValue,
        getInValueOptionIndex,
        optionIsActive,
        prepareOptions,
        receiveOptions,
    } from '../functions/option-functions';
    import { getVisibleDateValue } from '../functions/date-functions';
    import DropdownButton from '../components/buttons/DropdownButton.vue';
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import ColorInput from '../components/ColorInput.vue';
    import MultipleColorInput from '../components/MultipleColorInput.vue';
    import {
        validateAmountOfChars,
        validateAmountOfLowerChars,
        validateAmountOfNumbers,
        validateAmountOfSpecialChars,
        validateAmountOfUpperChars,
    } from '../functions/validation-functions';
    import BooleanInput from '../components/BooleanInput.vue';
    import HtmlInput from '../components/HtmlInput.vue';
    import SelectInput from '../components/SelectInput.vue';
    import CalcInput from '../components/CalcInput.vue';
    import LktFieldValidations from '../components/validations/LktFieldValidations.vue';
    import SearchInput from '../components/SearchInput.vue';
    import LktFieldValue from '../lib-components/LktFieldValue.vue';
    import FileInput from '../components/FileInput.vue';
    import DateInput from '../components/DateInput.vue';
    import { appendIconToLabel, extractEditableValue } from '../functions/calcultad-data-functions';
    import CardInput from '../components/CardInput.vue';
    import MultipleCardInput from '../components/MultipleCardInput.vue';
    import FileUploadButton from '@/components/buttons/FileUploadButton.vue';
    import { openToast } from 'lkt-toast';
    import { DataState } from 'lkt-data-state';
    import TimeInput from '@/components/TimeInput.vue';

    // Emits
    const emits = defineEmits([
        'update:modelValue',
        'update:valid',
        'update:options',
        'keyup',
        'keydown',
        'focus',
        'blur',
        'click',
        'change',
        'click-info',
        'click-error',
        'validation',
        'validating',
        'uploading',
        'options-loaded',
        'selected-option',
        'upload-error',
        'upload-success',
        'picked-files',
        'validation-status',
    ]);

    // Slots
    const slots = useSlots();

    // Props
    const props = withDefaults(defineProps<FieldConfig>(), getDefaultValues(Field));

    // Constant data
    const Identifier = generateRandomString(16);

    // Calculated data
    let calculatedModal = extractPropValue(props.modal, props.prop);
    let calculatedModalKey = extractPropValue(props.modalKey, props.prop);
    let calculatedIcon = extractPropValue(props.icon, props.prop);
    let calculatedDownload = extractPropValue(props.download, props.prop);
    let calculatedItemType = extractPropValue(props.itemType, props.prop);


    if (!calculatedModal && typeof calculatedItemType !== 'function' && calculatedItemType && typeof Settings.modalPerItemType[calculatedItemType] !== 'undefined') {
        calculatedModal = Settings.modalPerItemType[calculatedItemType];
    }

    // Components refs
    const inputElement = ref(null);
    let fieldFeaturedButton = props.featuredButton;

    let _val = props.modelValue;
    if (props.multiple && fieldsWithMultipleMode.includes(props.type)) {
        if (!_val || !Array.isArray(_val)) _val = [];

    } else if (booleanFieldTypes.includes(props.type)) {
        if (typeof _val !== 'boolean') _val = false;

    } else if ([FieldType.Date, FieldType.DateTime].includes(props.type) && !calculatedIcon) {
        calculatedIcon = Settings.defaultDateIcon;

    } else if (props.type === FieldType.Time && !calculatedIcon) {
        calculatedIcon = 'lkt-icn-clock';

    } else if (props.type === FieldType.Number && props.canStep && fieldFeaturedButton === '') {
        fieldFeaturedButton = Settings.defaultNumberFeaturedButton;
    }

    // Reactive data
    const originalValue = ref(_val),
        value = ref(_val),
        isValid = ref(props.valid === true),
        isFormValid = ref(true),
        showPasswordIcon = ref(false),
        focusing = ref(false),
        hadFirstBlur = ref(false),
        hadFirstFocus = ref(false),
        localValidationStatus = ref(<FieldValidation[]>[]),
        originalFileName = ref(props.fileName),
        visibleFileName = ref(props.fileName);

    const dropdownEl = ref(<Element | ComponentPublicInstance | null>null),
        container = ref(<Element | ComponentPublicInstance | null>null),
        optionList = ref(<Element | ComponentPublicInstance | null>null);

    const showOptions = ref(false),
        isLoading = ref(false),
        ready = ref(false);

    const searchString = ref(''),
        focusedOptionIndex = ref(-1),
        pickedOptions = ref(<Option[]>[]),
        searchMode = ref(false),
        optionsAutoLoaded = ref(false),
        optionsAutoLoading = ref(false);

    const computedLang = computed(() => currentLanguage.value);
    const computedDateReadFormat = computed(() => {
        computedLang.value; // Call in order to force prop to re-compute
        if (Settings.dateReadFormat) return Settings.dateReadFormat;
        if (Settings.langDateReadFormat[computedLang.value]) return Settings.langDateReadFormat[computedLang.value];
        if (Settings.defaultDateReadFormat) return Settings.defaultDateReadFormat;
        return 'Y-m-d';
    });

    const editableValue = [FieldType.Card].includes(props.type) ? value : ref(extractEditableValue(value.value, computedLang.value));
    const originalEditableValue = ref(typeof editableValue.value === 'object' ? JSON.parse(JSON.stringify(editableValue.value)) : editableValue.value);

    const optionsHaystack = ref(<Option[]>[]),
        visibleOptions = ref(<Option[]>[]);

    const updatePickedOption = () => {

        const _doUpdate = (query: string) => {
            visibleOptions.value = filterOptions(optionsHaystack.value, query, true, props.optionsConfig?.filter);
            if (props.multiple) {
                for (let k in editableValue.value) {
                    let option = undefined;
                    if (props.optionValueType === 'option') {
                        if (props.searchable) {
                            option = findOptionByValue(optionsHaystack.value, editableValue.value[k].value);
                        } else {
                            option = findOptionByValue(visibleOptions.value, editableValue.value[k].value);
                        }

                    } else {
                        if (props.searchable) {
                            option = findOptionByValue(optionsHaystack.value, editableValue.value[k]);
                        } else {
                            option = findOptionByValue(visibleOptions.value, editableValue.value[k]);
                        }
                    }
                    if (typeof option !== 'undefined') {
                        if (pickedOptions.value.length === 0) {
                            pickedOptions.value.push(option);
                        } else {
                            //@ts-ignore
                            pickedOptions.value.splice(k, 1, option);
                        }
                    }
                }

                return;
            }

            let option = undefined;

            if (props.optionValueType === 'option') {
                if (props.searchable) {
                    option = findOptionByValue(optionsHaystack.value, editableValue.value.map((opt: Option) => opt.value));
                } else {
                    option = findOptionByValue(visibleOptions.value, editableValue.value.map((opt: Option) => opt.value));
                }
            } else {
                if (props.searchable) {
                    option = findOptionByValue(optionsHaystack.value, editableValue.value);
                } else {
                    option = findOptionByValue(visibleOptions.value, editableValue.value);
                }
            }
            if (typeof option !== 'undefined') {
                if (pickedOptions.value.length === 0) {
                    pickedOptions.value.push(option);
                } else {
                    pickedOptions.value.splice(0, 1, option);
                }
            }
        };

        if (props.type === FieldType.Text) {
            _doUpdate(editableValue.value);
        } else if (props.type === FieldType.Select) {
            _doUpdate(searchString.value);
        }
    };

    const pickFirstOption = () => {

        let option = visibleOptions.value[0];

        if (props.optionValueType === 'option') {
            if (props.multiple) {
                editableValue.value.push(option)
            } else {
                editableValue.value = option;
            }

        } else {
            if (props.multiple) {
                editableValue.value.push(option.value)
            } else {
                editableValue.value = option.value;
            }
        }


        pickedOptions.value.push(option);
    }

    const computedIsFile = computed(() => props.type === FieldType.File),
        computedIsImage = computed(() => props.type === FieldType.Image);

    const computedInputElement = computed(() => {
        if (props.type === FieldType.Textarea) return 'textarea';
        if (props.type === FieldType.Html) return 'div';
        return 'input';
    });

    const changed = computed(() => {
            if ([FieldType.Date, FieldType.DateTime].includes(props.type)) {
                return value.value !== originalValue.value;
            }
            if (props.type === FieldType.Select) {
                if (props.multiple) {
                    if (props.optionValueType !== 'option') {
                        let dataState = new DataState({ v: originalEditableValue.value });
                        dataState.increment({ v: editableValue.value });
                        return dataState.changed();
                    }
                }
            }
            return editableValue.value !== originalEditableValue.value;
        }),
        computedIsDisabled = computed(() => {
            if (typeof props.disabled === 'function') return props.disabled(props.prop);
            return props.disabled;
        }),
        amountOfIcons = computed(() => {
            let r = 0;

            if (computedShowUndoInNav.value) ++r;
            if (computedShowClearInNav.value) ++r;
            if (computedShowPasswordRevealInNav.value) ++r;
            if (computedShowI18nInNav.value) ++r;
            if (computedShowSwitchEditionInNav.value) ++r;
            if (computedShowFileUploadInNav.value) ++r;
            if (computedShowDropdownButton.value) ++r;
            if (computedShowSubtractStepInNav.value) ++r;
            if (computedShowIncreaseStep.value) ++r;
            if (props.customButtonText || props.customButtonClass) ++r;

            if (r > 0 && props.type === FieldType.Textarea) return 1;
            if (r > 0 && props.type === FieldType.Html) return 1;
            if (r > 0 && props.infoButtonEllipsis) return 1;

            return r;
        }),
        computedHasFeaturedButton = computed(() => {
            return computedShowI18n.value && fieldFeaturedButton === 'i18n'
                || computedShowPasswordReveal.value && fieldFeaturedButton === 'password'
                || computedShowSubtractStep.value && fieldFeaturedButton === 'subtract';
        }),
        showInfoUi = computed(() => {
            return amountOfIcons.value > 0;
        }),
        autocompleteText = computed(() => props.autocomplete === true ? 'on' : 'off'),
        isFilled = computed(() => {
            if ([FieldType.Date, FieldType.DateTime].includes(props.type)) {
                return value.value !== '';
            }
            return editableValue.value !== '';
        }),
        computedInputType = computed(() => {
            if (props.type === FieldType.Password && showPasswordIcon.value === true) return 'text';
            if (props.type === FieldType.Email) return 'email';
            if (props.type === FieldType.Password) return 'password';
            if (props.type === FieldType.Number) return 'number';
            if (props.type === FieldType.Tel) return 'tel';
            if (props.type === FieldType.Search) return 'search';
            if (props.type === FieldType.Color) return 'color';
            if (props.type === FieldType.Range) return 'range';
            return 'text';
        }),
        classes = computed(() => {
            const r = [];

            r.push(`is-${props.type}`);
            if (booleanFieldTypes.includes(props.type)) {
                r.push('is-boolean');
                if (editableValue.value) r.push('is-checked');
            }
            if (changed.value) r.push('is-changed');
            if (computedIsDisabled.value) r.push('is-disabled');
            if (props.multiple) r.push('is-multiple');
            if (computedHasFeaturedButton.value) r.push('with-atn-btn');
            if (showInfoUi.value) r.push('with-info-btn');
            if (props.mandatory && computedEditable.value) r.push('is-mandatory-field');
            if (computedEditable.value && focusing.value) r.push('has-focus');
            if (showOptions.value) r.push('show-options');
            if (props.searchable && searchMode.value) r.push('is-searching');
            if (props.hidden) r.push('lkt-hidden-field');

            if (props.type !== FieldType.Range && props.validation?.type === FieldValidationType.Auto && hadFirstFocus.value && hadFirstBlur.value) {
                if (localValidationStatus.value.length > 0) r.push('is-invalid');
                else r.push('is-valid');
            }

            if ([FieldType.Textarea, FieldType.Html].includes(props.type)) r.push('is-lg');
            if ([FieldType.Image].includes(props.type)) r.push('is-xl');
            if (props.multiple && props.type === FieldType.Select) r.push('is-lg');

            if (props.multiple) {
                if (computedEditable.value) {
                    r.push(`has-multiple-display-${props.multipleDisplayEdition}`);
                } else {
                    r.push(`has-multiple-display-${props.multipleDisplay}`);
                }
            }

            if (amountOfIcons.value > 0) r.push(`has-icons`, `has-icons-${amountOfIcons.value}`);
            r.push(computedEditable.value ? 'is-editable' : 'is-read');

            if (props.type !== FieldType.Range) {
                r.push(isValid.value ? 'is-valid' : 'is-error');
                r.push(isFilled.value ? 'is-filled' : 'is-empty');
            }

            return r.join(' ');
        }),
        readModeTitle = computed(() => {
            if (typeof editableValue.value === 'number') {
                computedLang.value; // Call in order to force prop to re-compute
                if (Settings.langNumberFormat[computedLang.value]?.amountOfDecimals) {
                    return formatNumber(
                        editableValue.value,
                        Settings.langNumberFormat[computedLang.value].amountOfDecimals,
                        Settings.langNumberFormat[computedLang.value].decimalSeparator,
                        Settings.langNumberFormat[computedLang.value].thousandsSeparator,
                        Settings.langNumberFormat[computedLang.value].removeDecimalsIfZero,
                    );
                }
                if (Settings.amountOfDecimals) {
                    return formatNumber(
                        editableValue.value,
                        Settings.amountOfDecimals,
                        Settings.decimalSeparator,
                        Settings.thousandsSeparator,
                        Settings.removeDecimalsIfZero,
                    );
                }
                return editableValue.value.toString();
            }
            if (props.type === FieldType.Html) return stripTags(editableValue.value);
            return editableValue.value;
        }),
        MinimumValue = computed((): number => {
            if (typeof props.min === 'string') return parseFloat(props.min);
            if (typeof props.min === 'number') return props.min;
            //@ts-ignore
            return false;
        }),
        MaximumValue = computed((): number => {
            if (typeof props.max === 'string') return parseFloat(props.max);
            if (typeof props.max === 'number') return props.max;
            //@ts-ignore
            return false;
        }),
        computedLabel = computed(() => {

            if (booleanFieldTypes.includes(props.type)) {
                if (editableValue.value === true && typeof props.configOn === 'object') {
                    return appendIconToLabel(
                        extractI18nValue(props.configOn?.label ?? props.label),
                        props.configOn?.labelIcon ?? props.labelIcon,
                        props.labelIconAtEnd,
                    );
                }

                if (editableValue.value !== true && typeof props.configOff === 'object') {
                    return appendIconToLabel(
                        extractI18nValue(props.configOff?.label ?? props.label),
                        props.configOff?.labelIcon ?? props.labelIcon,
                        props.labelIconAtEnd,
                    );
                }
            }
            return appendIconToLabel(
                extractI18nValue(props.label),
                props.labelIcon,
                props.labelIconAtEnd,
            );
        }),
        computedPlaceholder = computed(() => {
            return extractI18nValue(props.placeholder);
        }),
        computedSearchPlaceholder = computed(() => {
            return extractI18nValue(props.searchPlaceholder);
        }),

        computedModal = computed(() => {
            if (typeof calculatedModal === 'function') return calculatedModal(props.prop);
            return extractPropValue(calculatedModal, props.prop);
        }),

        computedEditable = computed(() => {
            if (typeof props.readMode === 'function') return !props.readMode(props.prop);
            return !extractPropValue(props.readMode, props.prop);
        }),

        computedModalData = computed(() => {
            if (typeof props.modalData === 'function') return props.modalData(props.prop);
            if (typeof props.modalData === 'string') return extractPropValue(props.modalData, props.prop);
            if (typeof props.modalData === 'object' && !Array.isArray(props.modalData)) {
                let r = {};
                for (let k in props.modalData) {
                    r[k] = extractPropValue(props.modalData[k], props.prop);
                }
                return r;
            }
            return props.modalData;
        }),
        computedIcon = computed(() => {
            if (typeof calculatedIcon === 'function') return calculatedIcon(props.prop);
            return extractPropValue(calculatedIcon, props.prop);
        }),

        computedAccept = computed(() => {
            if (props.type === FieldType.File) return Settings.acceptTypes.file;
            if (props.type === FieldType.Image) return Settings.acceptTypes.image;
            return '';
        }),

        computedShowError = computed(() => props.errorMessage),
        computedShowInfo = computed(() => props.infoMessage),

        computedShowSubtractStep = computed(() => props.canStep && computedEditable.value && props.type === FieldType.Number),
        computedShowSubtractStepInNav = computed(() => props.canStep && computedEditable.value && props.type === FieldType.Number && fieldFeaturedButton !== 'subtract'),
        computedShowIncreaseStep = computed(() => props.canStep && computedEditable.value && props.type === FieldType.Number),
        computedShowUndo = computed(() => props.canUndo && changed.value && computedEditable.value && !fieldTypesWithoutUndo.includes(props.type)),
        computedShowClear = computed(() => props.canClear && isFilled.value && computedEditable.value && !fieldTypesWithoutClear.includes(props.type)),
        computedShowI18n = computed(() => props.canI18n && typeof value.value === 'object' && computedEditable.value),
        computedShowPasswordReveal = computed(() => props.type === FieldType.Password && props.showPassword && isFilled.value && computedEditable.value),

        computedShowUndoInNav = computed(() => computedShowUndo.value && !props.infoButtonEllipsis),
        computedShowClearInNav = computed(() => computedShowClear.value && !props.infoButtonEllipsis),
        computedShowPasswordRevealInNav = computed(() => computedShowPasswordReveal.value && !props.infoButtonEllipsis && fieldFeaturedButton !== 'password'),
        computedShowI18nInNav = computed(() => computedShowI18n.value && !props.infoButtonEllipsis && fieldFeaturedButton !== 'i18n'),
        computedShowDropdownButton = computed(() => {
            if (props.type === FieldType.Calc) return false;
            if (props.type === FieldType.Search) return false;
            if (![FieldType.Select, FieldType.Text].includes(props.type)) return false;
            return visibleOptions.value.length > 0 || optionsHaystack.value.length > 0 || (typeof props.optionsConfig?.http?.resource !== 'undefined' && props.optionsConfig?.http?.resource !== '');
        }),
        computedShowSwitchEditionInNav = computed(() => props.allowReadModeSwitch && !props.infoButtonEllipsis),
        computedShowFileUploadInNav = computed(() => typeof props.fileUploadButton === 'object' && Object.keys(props.fileUploadButton).length > 0)
    ;

    const focus = () => {
        nextTick(() => {
            if (inputElement.value) {
                //@ts-ignore
                inputElement.value.focus();
            }
        });
    };

    const doRemoteValidation = async () => {
        let r = [];
        if (props.validation?.resource) {
            emits('validating');
            const response: HTTPResponse = await httpCall(props.validation.resource, {
                ...props.validation.resourceData,
                value: editableValue.value,
            });
            if (response) {
                let isValid = response.data === true;
                if (!isValid && editableValue.value === originalValue.value) isValid = true;

                r.push(FieldValidation.createRemoteResponse(response, isValid ? ValidationStatus.Ok : ValidationStatus.Ko));
            }
            emits('validation', response);
        }
        return r;
    };


    // Watch data
    watch(() => props.validation?.checkEqualTo, () => doValidation());
    watch(() => props.valid, (v) => isValid.value = v);
    watch(() => props.modelValue, (v) => {
        if ([FieldType.Card].includes(props.type)) {
            editableValue.value = v;
        } else if ([FieldType.Date, FieldType.DateTime].includes(props.type)) {
            editableValue.value = extractEditableValue(v, computedLang.value);
        } else if (props.type === FieldType.Select) {
            if (!v && props.optionsConfig?.autoPickFirstOptionIfEmpty) {
                pickedOptions.value = [];
                buildVisibleOptions(searchString.value, false);
                pickFirstOption();
            }
        } else {
            editableValue.value = v;
        }
    }, { deep: true });
    watch(editableValue, (v) => {
        if (typeof value.value === 'object' && [FieldType.Card].includes(props.type)) {
            //@ts-ignore
            value.value[computedLang.value] = v;
        } else {
            value.value = v;
        }

        if (props.type === FieldType.Number) reAssignNumericValue(v);
    }, { deep: true });


    let validationTimeout: number | undefined;
    watch(value, (v) => {
        if (ready.value && computedEditable.value) {
            emits('update:modelValue', v);
            if (props.type === FieldType.Select) {
                if (typeof props.optionsConfig?.filter === 'function') {
                    buildVisibleOptions(searchString.value, false);
                }
            }

            if (validationTimeout) clearTimeout(validationTimeout);

            validationTimeout = setTimeout(() => {
                doValidation();
            }, 150);
        }
    }, { deep: true });

    watch(isValid, (v) => {
        emits('update:valid', v);
    });

    const enabledPropsOptionsWatcher = ref(true);
    watch(enabledPropsOptionsWatcher, (v) => {
        if (!v) nextTick(() => {
            enabledPropsOptionsWatcher.value = true;
        });
    });

    watch(optionsHaystack, (v) => {
        if (typeof props.events?.updatedOptions === 'function') {
            enabledPropsOptionsWatcher.value = false;
            props.events.updatedOptions({
                options: v,
            });
        }
        emits('update:options', v);
    });

    watch(() => props.options, (v, oldValue) => {
        if (!enabledPropsOptionsWatcher.value) return;

        let checker = new DataState({
            opts: oldValue,
        });
        checker.increment({ opts: v });
        if (!checker.changed()) return;
        optionsHaystack.value = prepareOptions(v, props.prop);
        if (props.type === FieldType.Select) {
            buildVisibleOptions(searchString.value, false);
        } else {
            buildVisibleOptions(editableValue.value, false);
        }
        pickedOptions.value = [];
        updatePickedOption();
    }, { deep: true });

    const doValidation = async () => {

        localValidationStatus.value = [];

        const remoteValidation = await doRemoteValidation();
        const localValidation = doLocalValidation();

        const validationStatus = [...remoteValidation, ...localValidation];

        let validStatus = validationStatus.filter(v => v.status === ValidationStatus.Ko).length === 0;

        isFormValid.value = validStatus;

        // if (!initialValidation && props.validation?.trigger === FieldAutoValidationTrigger.Blur && (!hadFirstBlur.value || !hadFirstFocus.value)) {
        //     return;
        // }

        if (props.type === FieldType.Range) return;

        localValidationStatus.value = validationStatus;

        isValid.value = validStatus;
        emits('validation-status', validationStatus);
    };

    const doLocalValidation = () => {

        let r = [];

        //@ts-ignore
        let min = typeof props.min === 'undefined' ? 0 : parseFloat(props.min),
            //@ts-ignore
            max = typeof props.max === 'undefined' ? 0 : parseFloat(props.max);

        if (props.type === FieldType.Number && typeof props.min !== 'undefined' && typeof props.max !== 'undefined') {
            if (editableValue.value < min || editableValue.value > max) {
                r.push(FieldValidation.createNumBetween(min, max, ValidationStatus.Ko));
                isValid.value = false;
                return r;
            }
        }

        // Check if mandatory and return if empty
        if (props.mandatory) {
            switch (props.type) {
                case FieldType.Select:
                    if (props.multiple && pickedOptions.value.length === 0) {
                        r.push(FieldValidation.createEmpty(ValidationStatus.Ko));
                    } else if (!props.multiple && !editableValue.value) {
                        r.push(FieldValidation.createEmpty(ValidationStatus.Ko));
                    }
                    break;

                case FieldType.Html:
                    let content = trim(stripTags(editableValue.value));
                    if (content.length === 0) {
                        r.push(FieldValidation.createEmpty(ValidationStatus.Ko));
                    }
                    break;

                default:
                    if (![FieldType.Number].includes(props.type) && editableValue.value === '') {
                        r.push(FieldValidation.createEmpty(ValidationStatus.Ko));
                    }
            }

            if (r.length > 0) return r;
        }

        if (min > 0) {
            if (props.type !== FieldType.Number && editableValue.value.length < min) {
                r.push(FieldValidation.createMinStr(min, ValidationStatus.Ko));

            } else if (editableValue.value < min) {
                r.push(FieldValidation.createMinNum(min, ValidationStatus.Ko));
            }
        }

        if (max > 0) {
            if (props.type !== FieldType.Number && editableValue.value.length > max) {
                r.push(FieldValidation.createMaxStr(max, ValidationStatus.Ko));

            } else if (editableValue.value > max) {
                r.push(FieldValidation.createMaxNum(max, ValidationStatus.Ko));
            }
        }

        if (props.type === FieldType.Email) {
            if (!isEmail(editableValue.value)) {
                r.push(FieldValidation.createEmail(ValidationStatus.Ko));
            }
        }

        if (textFieldTypes.includes(props.type)) {
            validateAmountOfNumbers(r, editableValue.value, props.validation?.minNumbers, props.validation?.maxNumbers);
            validateAmountOfUpperChars(r, editableValue.value, props.validation?.minUpperChars, props.validation?.maxUpperChars);
            validateAmountOfLowerChars(r, editableValue.value, props.validation?.minLowerChars, props.validation?.maxLowerChars);
            validateAmountOfChars(r, editableValue.value, props.validation?.minChars, props.validation?.maxChars);
            validateAmountOfSpecialChars(r, editableValue.value, props.validation?.minSpecialChars, props.validation?.maxSpecialChars);
        }

        if (props.validation?.checkEqualTo && editableValue.value !== props.validation?.checkEqualTo) {
            r.push(FieldValidation.createEqualTo(props.validation?.checkEqualTo, ValidationStatus.Ko));
        }

        return r;
    };

    const buildVisibleOptions = (query: string, ableToShowOptions: boolean = true) => {
            if (optionsHaystack.value.length === 0) {
                visibleOptions.value = [];
                return;
            }

            switch (props.type) {
                case FieldType.Select:
                    if (props.searchable) {
                        visibleOptions.value = filterOptions(optionsHaystack.value, query, true, props.optionsConfig?.filter);
                    } else {
                        visibleOptions.value = JSON.parse(JSON.stringify(optionsHaystack.value));
                    }
                    isLoading.value = false;
                    if (ableToShowOptions) showOptions.value = (typeof props.optionsConfig?.http?.resource !== 'undefined' && props.optionsConfig?.http?.resource !== '') || visibleOptions.value.length > 0;

                    updatePickedOption();
                    return;

                case FieldType.Text:
                case FieldType.Search:
                    visibleOptions.value = filterOptions(optionsHaystack.value, query, false, props.optionsConfig?.filter);
                    isLoading.value = false;
                    if (ableToShowOptions) showOptions.value = (typeof props.optionsConfig?.http?.resource !== 'undefined' && props.optionsConfig?.http?.resource !== '') || visibleOptions.value.length > 0;
                    return;
            }
        },
        fetchOptions = async (query: string, ableToShowOptions: boolean = true) => {
            if (!computedEditable.value && (!props.optionsConfig?.autoloadResource && !optionsAutoLoaded.value)) return;
            if ([
                FieldType.Tel,
                FieldType.Date,
                FieldType.DateTime,
                FieldType.Time,
                FieldType.Color,
                FieldType.File,
                FieldType.Html,
                FieldType.Image,
                FieldType.Password,
                FieldType.Range,
                FieldType.Textarea,
            ].includes(props.type)) return;

            isLoading.value = false;
            if (props.optionsConfig?.autoloadResource && !optionsAutoLoaded.value) {
                optionsAutoLoading.value = true;
            }

            if (typeof props.optionsConfig?.http?.resource !== 'undefined' && props.optionsConfig?.http?.resource !== '') {
                isLoading.value = true;
                let resourceData: LktObject = {};
                if (typeof props.optionsConfig?.http?.data === 'object') {
                    resourceData = { ...props.optionsConfig.http.data };
                }
                if (Settings.searchKeyForResource !== '') resourceData[Settings.searchKeyForResource] = query;
                if (props.optionsConfig?.http?.events?.onStart && typeof props.optionsConfig?.http?.events?.onStart === 'function') {
                    props.optionsConfig.http.events.onStart();
                }
                const results: HTTPResponse = await httpCall(props.optionsConfig?.http?.resource, resourceData);
                if (props.optionsConfig?.http?.events?.onEnd && typeof props.optionsConfig?.http?.events?.onEnd === 'function') {
                    props.optionsConfig.http.events.onEnd(results);
                }
                const isValidData = Array.isArray(results.data) && results.data.length > 0;
                isLoading.value = false;
                if (isValidData) {
                    optionsHaystack.value = receiveOptions(optionsHaystack.value, results.data as Option[], props.prop);
                    buildVisibleOptions(query, ableToShowOptions);

                    if (props.optionsConfig?.autoloadResource && !optionsAutoLoaded.value) {
                        if (props.optionsConfig?.autoloadResource === 'feed') {
                            if (props.multiple) {
                                visibleOptions.value.forEach(opt => {
                                    onClickOption(opt);
                                });
                            } else if (visibleOptions.value.length > 0) {
                                onClickOption(visibleOptions.value[0]);
                            }
                        }
                        optionsAutoLoaded.value = true;
                        optionsAutoLoading.value = false;
                    }

                    if (typeof props.events?.loadOptionsEnd === 'function') {
                        props.events?.loadOptionsEnd({
                            options: <Array<OptionConfig>>optionsHaystack.value,
                            httpResponse: results,
                        });
                    }

                    emits('options-loaded', results.data);
                }

            } else {
                buildVisibleOptions(query, ableToShowOptions);
            }
        },
        navigateOptions = (event: KeyboardEvent) => {
            let amountOfOptions = visibleOptions.value.length - 1;
            if (amountOfOptions === -1) return;

            const key = event.key ?? '';

            if (focusing.value) {

                if (['ArrowDown', 'ArrowUp', 'Enter'].includes(key)) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                if (key === 'ArrowDown') {
                    ++focusedOptionIndex.value;
                    if (focusedOptionIndex.value > amountOfOptions) focusedOptionIndex.value = 0;
                    //@ts-ignore
                    let el = optionList.value?.querySelector('[data-index="' + focusedOptionIndex.value + '"]');
                    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });

                } else if (key === 'ArrowUp') {
                    --focusedOptionIndex.value;
                    if (focusedOptionIndex.value < 0) focusedOptionIndex.value = amountOfOptions;

                    //@ts-ignore
                    let el = optionList.value?.querySelector('[data-index="' + focusedOptionIndex.value + '"]');
                    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });

                } else if (key === 'Enter') {
                    if (focusedOptionIndex.value > -1) {
                        onClickOption(visibleOptions.value[focusedOptionIndex.value]);
                    }
                }
            }
        };

    const computedCanRenderValidations = computed(() => {
        if (localValidationStatus.value.length === 0) return false;

        if (props.validation?.trigger === FieldAutoValidationTrigger.Blur && (!hadFirstBlur.value || !hadFirstFocus.value)) {
            return false;
        }

        return true;
    });

    const
        doUndo = () => {
            if (props.type === FieldType.Html) {
                if (inputElement.value) {
                    //@ts-ignore
                    inputElement.value.setValue(originalEditableValue.value);
                }
                return;
            } else if ([FieldType.Date, FieldType.DateTime].includes(props.type)) {
                value.value = originalValue.value;
                return;
            } else if (props.type === FieldType.File) {
                value.value = originalValue.value;
                visibleFileName.value = originalFileName.value;
                return;

            } else if (props.type === FieldType.Select) {
                editableValue.value = props.multiple
                    ? JSON.parse(JSON.stringify(originalEditableValue.value))
                    : originalEditableValue.value;
                //@todo: if props.canTag, should reset options
                pickedOptions.value = [];
                updatePickedOption();
                return;
            }

            editableValue.value = originalEditableValue.value;
        },
        doClear = () => {
            if (props.type === FieldType.Html) {
                if (inputElement.value) {
                    //@ts-ignore
                    inputElement.value.setValue('');
                }
                return;
            } else if ([FieldType.Date, FieldType.DateTime].includes(props.type)) {
                value.value = '';
                return;
            } else if (props.type === FieldType.File) {
                value.value = '';
                visibleFileName.value = '';
                return;
            } else if (props.type === FieldType.Select) {
                editableValue.value = props.multiple ? [] : '';
                pickedOptions.value = [];
                updatePickedOption();
                return;
            }
            editableValue.value = '';
        },
        getValue = () => editableValue.value,
        onKeyUp = ($event: KeyboardEvent) => {

            if (fieldTypesWithOptions.includes(props.type)) {
                fetchOptions(editableValue.value);
                navigateOptions($event);

            } else if (props.type === FieldType.Select) {
                navigateOptions($event);
            }
            emits('keyup', $event);
        },
        turnOnSelectSearchMode = () => {
            if (inputElement.value) {
                //@ts-ignore
                inputElement.value.keepFocused();
            }
        },
        onClickDropdownButton = () => {
            if (showOptions.value) {
                if (props.type === FieldType.Select) {
                    onBlurSelectInput();
                    return;
                }

                return onBlur();
            }
            if (props.type === FieldType.Select) {
                onFocusSelectInput();
                return;
            }
            return onFocus();
        },
        onClickOption = (option: Option, tagging: boolean = false) => {

            if (option.disabled) return;

            if (props.multiple) {
                let k = -1;

                if (props.optionValueType === 'option') {
                    //@ts-ignore
                    k = getInValueOptionIndex(option, editableValue.value.map(opt => opt.value));
                } else {
                    //@ts-ignore
                    k = getInValueOptionIndex(option, editableValue.value);
                }

                if (k === -1) {
                    if (props.optionValueType === 'option') {
                        //@ts-ignore
                        editableValue.value.push(option.value);
                    } else {
                        //@ts-ignore
                        editableValue.value.push(String(option.value));
                    }
                    if (!tagging) pickedOptions.value.push(option);

                } else if (!tagging) {
                    //@ts-ignore
                    editableValue.value.splice(k, 1);
                    pickedOptions.value.splice(k, 1);
                }
                turnOnSelectSearchMode();
                if (typeof props.events?.clickOption === 'function') {
                    props.events?.clickOption({ option });
                }
                emits('selected-option', option);

            } else {
                focusedOptionIndex.value = -1;
                if (props.optionValueType === 'option') {
                    //@ts-ignore
                    editableValue.value = option;
                } else {
                    //@ts-ignore
                    editableValue.value = String(option.value);
                }
                pickedOptions.value.splice(0, 1, option);
                showOptions.value = false;
                searchMode.value = false;
                if (typeof props.events?.clickOption === 'function') {
                    props.events?.clickOption({ option });
                }
                emits('selected-option', option);
            }
        },
        onKeyDown = ($event: KeyboardEvent) => emits('keydown', $event),
        onFocus = ($event?: FocusEvent) => {
            hadFirstFocus.value = true;
            focusing.value = true;
            doValidation();
            emits('focus', $event);
        },
        onBlur = ($event?: Event) => {
            setTimeout(() => {
                if (props.searchable && searchMode.value) {
                    return;
                }

                if (props.multiple) {
                    showOptions.value = true;
                    focusing.value = true;
                    return;
                }

                hadFirstBlur.value = true;
                focusedOptionIndex.value = -1;
                showOptions.value = false;
                focusing.value = false;
                doValidation();
                emits('blur', $event);
            }, 100);
        },
        onFocusBooleanInput = (event: FocusEvent) => {
            hadFirstFocus.value = true;
            focusing.value = true;
            emits('focus', event);
        },
        onBlurBooleanInput = (event: Event) => {
            hadFirstBlur.value = true;
            focusing.value = false;
            emits('blur', event);
        },
        onNavigateSelectInput = (event: KeyboardEvent) => {
            navigateOptions(event);
        },
        onSearchSelectInput = (query: string) => {
            searchString.value = query;
            fetchOptions(query);
        },
        onTagSelectInput = (query: string) => {
            let option = new Option({
                value: query,
                label: query,
            });

            let pickedIndex = -1;
            if (props.optionValueType === 'option') {
                //@ts-ignore
                pickedIndex = getInValueOptionIndex(option, editableValue.value.map(opt => opt.value));
            } else {
                //@ts-ignore
                pickedIndex = getInValueOptionIndex(option, editableValue.value);
            }
            searchString.value = '';
            if (pickedIndex === -1) {
                optionsHaystack.value.push(option);
                visibleOptions.value.push(option);
                pickedOptions.value.push(option);
                onClickOption(option, true);
            }
        },
        onUntagSelectInput = (option: Option) => {

            let hasToUntag = true;
            while (hasToUntag) {
                let pickedIndex = -1;
                if (props.optionValueType === 'option') {
                    //@ts-ignore
                    pickedIndex = getInValueOptionIndex(option, editableValue.value.map(opt => opt.value));
                } else {
                    //@ts-ignore
                    pickedIndex = getInValueOptionIndex(option, editableValue.value);
                }

                if (pickedIndex >= 0) {
                    optionsHaystack.value.splice(
                        optionsHaystack.value.findIndex(opt => opt.value == option.value),
                        1,
                    );

                    visibleOptions.value.splice(
                        visibleOptions.value.findIndex(opt => opt.value == option.value),
                        1,
                    );

                    pickedOptions.value.splice(
                        pickedOptions.value.findIndex(opt => opt.value == option.value),
                        1,
                    );

                    editableValue.value.splice(pickedIndex, 1);
                } else {
                    hasToUntag = false;
                }
            }

            searchString.value = '';
        },
        onFocusSelectInput = () => {
            hadFirstFocus.value = true;
            focusing.value = true;

            if (!props.optionsConfig?.http?.resource && visibleOptions.value.length === 0) {
                showOptions.value = false;
                return;
            }

            showOptions.value = true;

            doValidation();
            fetchOptions(searchString.value, false);

            if (props.searchable) turnOnSelectSearchMode();

            emits('focus');
        },
        onBlurSelectInput = () => {
            hadFirstBlur.value = true;
            focusing.value = false;
            emits('blur');
        },
        onChange = ($event: any) => {
            emits('change', $event, editableValue.value);
        },
        onClick = ($event: Event) => {
            emits('click', $event);
        },
        onClickInfo = ($event: any) => emits('click-info', $event),
        onClickError = ($event: any) => emits('click-error', $event),
        onClickSubtract = () => {
            let step = props.step ?? 1;
            if (typeof step === 'string') step = parseFloat(step);
            let amountOfDecimals = String(step).split('.')[0].length;
            if (!props.min || editableValue.value > props.min) {
                editableValue.value = parseFloat((parseFloat(editableValue.value) - step).toFixed(amountOfDecimals));
            }
        },
        onClickIncrease = () => {
            let step = props.step ?? 1;
            if (typeof step === 'string') step = parseFloat(step);
            let amountOfDecimals = String(step).split('.')[0].length;
            if (!props.max || editableValue.value < props.max) {
                editableValue.value = parseFloat((parseFloat(editableValue.value) + step).toFixed(amountOfDecimals));
            }
        },
        onClickSwitchEdition = () => {
            if (computedEditable.value) focus();
        },
        onUploadSuccess = (r: HTTPResponse) => {
            openToast(<ToastConfig>{
                text: LktSettings.defaultUploadSuccessText,
                details: LktSettings.defaultUploadSuccessDetails,
                icon: LktSettings.defaultUploadSuccessIcon,
                positionX: ToastPositionX.Right,
            });
            emits('upload-success', r);
        },
        onUploadError = (r: HTTPResponse) => {
            openToast(<ToastConfig>{
                text: LktSettings.defaultUploadErrorText,
                details: LktSettings.defaultUploadErrorDetails,
                icon: LktSettings.defaultUploadErrorIcon,
                positionX: ToastPositionX.Right,
            });
            emits('upload-error', r);
        },
        onUploading = () => {
            emits('uploading');
        },
        onPickedFiles = (fileEntities: Array<FileEntity>) => {
            emits('picked-files', fileEntities);
        },
        reAssignNumericValue = (n: string | number) => {

            if (!props.enableAutoNumberFix) return false;

            let N = Number(n);
            let ensured = ensureNumberBetween(N, MinimumValue.value, MaximumValue.value);

            if (N !== ensured) {
                editableValue.value = ensured;
                return true;
            }
            return false;
        };

    defineExpose({
        Identifier,
        reset: doUndo,
        focus,
        value: getValue,
        isMandatory: () => props.mandatory,
        isFormValid: () => {
            return isFormValid.value;
        },
        isValid: () => {
            return isValid.value;
        },
        click: () => {
            switch (props.type) {
                case FieldType.File:
                    //@ts-ignore
                    return inputElement.value?.click();
                    break;
            }
            //@ts-ignore
            container.value.click();
        },
    });

    const hasCustomEditSlot = computed(() => props.editSlot !== '' && typeof Settings.customEditSlots[props.editSlot] !== 'undefined'),
        customEditSlot = computed(() => Settings.customEditSlots[props.editSlot]);

    onMounted(() => {
        optionsHaystack.value = prepareOptions(props.options, props.prop);
        buildVisibleOptions('', false);
        updatePickedOption();

        if (props.type === FieldType.Select) {
            if (props.multiple) {
                searchMode.value = true;
            }

            if (props.optionsConfig?.autoloadResource) {
                fetchOptions('', false);
            }
        }

        doValidation();
        ready.value = true;
    });

    const computedMainComponent = computed(() => {
            if (booleanFieldTypes.includes(props.type) && !computedIsDisabled.value) return 'label';
            return 'div';
        }),
        computedMainAttrs = computed(() => {
            if (booleanFieldTypes.includes(props.type)) return {
                'for': Identifier,
            };
            return {};
        });

    const computedReadValue = computed(() => {
        switch (props.type) {
            case FieldType.Select:
                return pickedOptions.value;

            case FieldType.Date:
            case FieldType.DateTime:
                //@ts-ignore
                return getVisibleDateValue(value.value, computedDateReadFormat.value);

            case FieldType.File:
            case FieldType.Image:
                return value.value;

            default:
                return editableValue.value;
        }
    });

    const computedCanRender = computed(() => {
            if (typeof props.canRender === 'function') return props.canRender({
                prop: props.prop
            });
            if (typeof props.canRender === 'boolean') return props.canRender;
            return true;
        }),
        computedCanDisplay = computed(() => {
            if (typeof props.canDisplay === 'function') return props.canDisplay({
                prop: props.prop
            });
            if (typeof props.canDisplay === 'boolean') return props.canDisplay;
            return true;
        });
</script>

<template>
    <div
        v-if="computedCanRender"
        v-show="computedCanDisplay"
        class="lkt-field"
        :class="classes"
        :data-show-ui="showInfoUi"
        :data-labeled="!!!slots.label"
        ref="container"
    >
        <slot v-if="!!slots.label" name="label" />
        <label v-if="!!!slots.label && computedLabel !== '' && !booleanFieldTypes.includes(type)"
               :for="Identifier"
               class="lkt-field--label"
               v-html="computedLabel" />

        <div class="lkt-field-content">

            <div v-if="computedHasFeaturedButton" class="lkt-field--atn-btn-container">
                <password-button
                    v-if="featuredButton === 'password' && computedShowPasswordReveal"
                    v-model="showPasswordIcon"
                    is-featured
                />

                <i18n-button
                    v-if="computedShowI18n && fieldFeaturedButton === 'i18n' && canI18n"
                    v-model="value"
                    is-featured
                    :type="type" />

                <lkt-button
                    v-if="computedShowSubtractStep && fieldFeaturedButton === 'subtract'"
                    v-bind="<ButtonConfig>{
                        class: 'lkt-field--info-btn',
                        icon: 'lkt-icn-less',
                        disabled: editableValue === MinimumValue,
                    }"
                    @click="onClickSubtract"
                />
            </div>

            <div
                v-if="computedIcon && (!computedEditable || ![FieldType.Time, FieldType.Date, FieldType.DateTime].includes(type))"
                class="lkt-field--icon">
                <i :class="computedIcon" />
            </div>

            <component
                v-if="computedEditable"
                :is="computedMainComponent"
                v-bind="computedMainAttrs"
                class="lkt-field-main">
                <template v-if="slots['edit']">
                    <div v-on:click="onClick">
                        <slot name="edit" v-bind:value="value" :title="readModeTitle" :data="slotData" />
                    </div>
                </template>
                <div v-else-if="hasCustomEditSlot" v-on:click="onClick">
                    <component v-bind:is="customEditSlot"
                               v-bind:value="value" :title="readModeTitle" :data="slotData" />
                </div>

                <boolean-input
                    v-else-if="booleanFieldTypes.includes(type)"
                    v-model="editableValue"
                    ref="inputElement"
                    :id="Identifier"
                    :name="name"
                    :type="type"
                    :label="computedLabel"
                    :editable="computedEditable"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    @focus="onFocusBooleanInput"
                    @blur="onBlurBooleanInput"
                />

                <multiple-color-input
                    v-else-if="type === FieldType.Color && multiple"
                    v-model="editableValue"
                    ref="inputElement"
                    :edit-mode="computedEditable"
                    :min="MinimumValue"
                    :max="MaximumValue"
                />

                <color-input
                    v-else-if="type === FieldType.Color"
                    v-model="editableValue"
                    @change="onChange"
                    ref="inputElement" />

                <file-input
                    v-else-if="computedIsFile || computedIsImage"
                    v-model="value"
                    v-model:file-name="visibleFileName"
                    ref="inputElement"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :resource="fileUploadHttp?.resource"
                    :resource-data="fileUploadHttp?.data"
                    :name="name"
                    :placeholder="computedPlaceholder"
                    :accept="computedAccept"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :is-image="type === FieldType.Image"
                    :file-browser-config="fileBrowserConfig"
                    @change="onChange"
                    @uploading="onUploading"
                    @upload-success="onUploadSuccess"
                    @upload-error="onUploadError"
                    @picked-files="onPickedFiles"
                />

                <date-input
                    v-else-if="[FieldType.Date, FieldType.DateTime].includes(type)"
                    v-model="value"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :lang="computedLang"
                    :name="name"
                    :icon="computedIcon"
                    :is-date-time="FieldType.DateTime === type"
                />

                <time-input
                    v-else-if="type === FieldType.Time"
                    v-model="value"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :lang="computedLang"
                    :name="name"
                    :icon="computedIcon"
                />

                <select-input
                    v-else-if="type === FieldType.Select"
                    ref="inputElement"
                    v-model="editableValue"
                    v-model:show-options="showOptions"
                    :searchable="searchable"
                    :search-mode="searchMode"
                    :search-string="searchString"
                    :multiple="multiple"
                    :can-tag="canTag"
                    :options-text="optionsConfig?.text"
                    :options-icon="optionsConfig?.icon"
                    :options-class="optionsConfig?.class"
                    :option-slot="optionSlot"
                    :options-modal="optionsConfig?.modal"
                    :options-download="optionsConfig?.download"
                    :options-label-formatter="optionsConfig?.labelFormatter"
                    :options-modal-data="optionsConfig?.modalData"
                    :picked-options="pickedOptions"
                    :editable="computedEditable"
                    :focusing="focusing"
                    :search-placeholder="computedSearchPlaceholder"
                    :multiple-display-edition="multipleDisplayEdition"
                    :prop="prop"
                    :max="MaximumValue"
                    @focus="onFocusSelectInput"
                    @blur="onBlurSelectInput"
                    @navigate="onNavigateSelectInput"
                    @search="onSearchSelectInput"
                    @change="onChange"
                    @tag="onTagSelectInput"
                    @untag="onUntagSelectInput"
                />
                <calc-input
                    ref="inputElement"
                    v-else-if="type === FieldType.Calc"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :name="name"
                    :editable="computedEditable"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :options="optionsHaystack"
                    @focus="onFocusBooleanInput"
                    @blur="onBlurBooleanInput"
                />

                <search-input
                    ref="inputElement"
                    v-else-if="type === FieldType.Search"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :name="name"
                    :editable="computedEditable"
                    :focusing="focusing"
                    :had-first-focus="hadFirstFocus"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :options-resource="optionsConfig?.http?.resource"
                    :container="container"
                    @focus="onFocusBooleanInput"
                    @blur="onBlurBooleanInput"
                />

                <multiple-card-input
                    v-else-if="type === FieldType.Card && props.multiple"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :name="name"
                    :editable="computedEditable"
                    :focusing="focusing"
                    :had-first-focus="hadFirstFocus"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :options-resource="optionsConfig?.http?.resource"
                    :modal="computedModal"
                    :modal-key="calculatedModalKey"
                    :modal-data="computedModalData"
                    :item-type="calculatedItemType"
                >
                    <template v-if="slots['item-' + calculatedItemType]" v-slot:item="{item}">
                        <slot
                            :name="'item-' + calculatedItemType"
                            :item="item"
                        />
                    </template>
                    <template v-else-if="slots.item" v-slot:item="{item}">
                        <slot
                            name="item"
                            :item="item"
                        />
                    </template>
                </multiple-card-input>

                <card-input
                    v-else-if="type === FieldType.Card"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :name="name"
                    :editable="computedEditable"
                    :focusing="focusing"
                    :had-first-focus="hadFirstFocus"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :options-resource="optionsConfig?.http?.resource"
                    :modal="computedModal"
                    :modal-key="calculatedModalKey"
                    :modal-data="computedModalData"
                    :item-type="calculatedItemType"
                >
                    <template v-if="slots['item-' + calculatedItemType]" v-slot:item="{item}">
                        <slot
                            :name="'item-' + calculatedItemType"
                            :item="item"
                        />
                    </template>
                    <template v-else-if="slots.item" v-slot:item="{item}">
                        <slot
                            name="item"
                            :item="item"
                        />
                    </template>
                </card-input>

                <input
                    v-else-if="computedInputElement === 'input'"
                    v-model="editableValue"
                    :ref="(el:any) => inputElement = el"
                    :value="editableValue"
                    :type="computedInputType"
                    :name="name"
                    :id="Identifier"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :placeholder="computedPlaceholder"
                    :tabindex="tabindex"
                    :autocomplete="autocompleteText"
                    :min="MinimumValue"
                    :max="MaximumValue"
                    :step="step"
                    v-on:keyup="onKeyUp"
                    v-on:keydown="onKeyDown"
                    v-on:focus="onFocus"
                    v-on:blur="onBlur"
                    v-on:click="onClick"
                    v-on:change="onChange"
                />
                <textarea
                    v-else-if="computedInputElement === 'textarea'"
                    v-model="editableValue"
                    :ref="(el:any) => inputElement = el"
                    :name="name"
                    :id="Identifier"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :placeholder="computedPlaceholder"
                    :tabindex="tabindex"
                    :autocomplete="autocompleteText"
                    v-on:keyup="onKeyUp"
                    v-on:keydown="onKeyDown"
                    v-on:focus="onFocus"
                    v-on:blur="onBlur"
                    v-on:click="onClick"
                    v-on:change="onChange"
                />
                <html-input
                    ref="inputElement"
                    v-else-if="type === FieldType.Html"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="<number>tabindex"
                    :name="name"
                    :lang="computedLang"
                    :editable="computedEditable"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    @focus="onFocus"
                    @blur="onBlur"
                />
            </component>

            <lkt-field-value
                v-if="!computedEditable"
                :value="computedReadValue"
                :type="type"
                :label="computedLabel"
                :title="readModeTitle"
                :file-name="visibleFileName"
                :value-slot="valueSlot"
                :empty-value-slot="emptyValueSlot"
                :slot-data="slotData"
                :download="calculatedDownload"
                :multiple="multiple"
                :multipleDisplay="multipleDisplay"
                :modal="computedModal"
                :modal-key="calculatedModalKey"
                :modal-data="computedModalData"
                :option-slot="optionSlot"
                :options-download="optionsConfig?.download"
                :options-modal="optionsConfig?.modal"
                :options-modal-data="optionsConfig?.modalData"
                :options-icon="optionsConfig?.icon"
                :options-text="optionsConfig?.text"
                :options-class="optionsConfig?.class"
                :options-label-formatter="optionsConfig?.labelFormatter"
                :options-resource="optionsConfig?.http?.resource"
                :options-resource-data="optionsConfig?.http?.data"
                :read-mode-config="readModeConfig"
                :prop="prop"
                @click="onClick"
            >
                <template v-if="slots['value']" #value>
                    <slot
                        :name="value"
                        :value="value"
                        :title="readModeTitle"
                        :data="slotData" />
                </template>
            </lkt-field-value>

            <div v-if="showInfoUi" class="lkt-field--info-nav">
                <undo-button v-show="computedShowUndoInNav" @click="doUndo" />
                <clear-button v-show="computedShowClearInNav" @click="doClear" />

                <lkt-button
                    v-if="type === FieldType.Number"
                    v-show="computedShowSubtractStepInNav"
                    v-bind="<ButtonConfig>{
                        class: 'lkt-field--info-btn',
                        icon: 'lkt-icn-less',
                        disabled: editableValue === MinimumValue,
                    }"
                    @click="onClickSubtract"
                />
                <lkt-button
                    v-if="type === FieldType.Number"
                    v-show="computedShowIncreaseStep"
                    v-bind="<ButtonConfig>{
                        class: 'lkt-field--info-btn',
                        icon: 'lkt-icn-more',
                        disabled: editableValue === MaximumValue,
                    }"
                    @click="onClickIncrease"
                />

                <lkt-button
                    v-if="computedShowError"
                    :title="errorMessage"
                    class="lkt-field--info-btn"
                    icon="lkt-icn-attention"
                    @click="onClickError"
                />
                <lkt-button
                    v-if="computedShowInfo"
                    class="lkt-field--info-btn"
                    icon="lkt-icn-info"
                    @click="onClickInfo"
                    tooltip
                    show-tooltip-on-hover
                    :show-tooltip-on-hover-delay="500"
                    hide-tooltip-on-leave
                >
                    <template #tooltip>
                        {{ infoMessage }}
                    </template>
                </lkt-button>

                <file-upload-button
                    v-if="computedEditable && computedShowFileUploadInNav"
                    :config="fileUploadButton"
                    :file-upload-http="fileUploadHttp"
                />

                <password-button
                    v-if="type === FieldType.Password"
                    v-show="computedShowPasswordRevealInNav"
                    v-model="showPasswordIcon"
                />

                <i18n-button
                    v-show="computedShowI18nInNav"
                    v-model="value"
                    :type="type"
                />

                <edition-button
                    v-if="computedEditable && computedShowSwitchEditionInNav"
                    v-model="computedEditable"
                    @click="onClickSwitchEdition"
                />

                <lkt-button
                    v-if="customButtonText || customButtonClass"
                    :text="customButtonText"
                    class="lkt-field--info-btn lkt-field--custom-btn"
                    :icon="customButtonClass"
                />

                <dropdown-button
                    v-if="computedEditable"
                    v-show="computedShowDropdownButton"
                    @click="onClickDropdownButton"
                />

                <ellipsis-actions-button
                    v-if="infoButtonEllipsis"
                    :show-undo="computedShowUndo"
                    :show-clear="computedShowClear"
                    :show-password="computedShowPasswordReveal"
                    :show-edition="allowReadModeSwitch"
                    v-model:show-password-check="showPasswordIcon"
                    v-model:show-edition-check="computedEditable"
                    @undo="doUndo"
                    @clear="doClear"
                />
            </div>
        </div>

        <lkt-field-validations
            v-if="computedEditable && computedCanRenderValidations"
            :items="localValidationStatus"
            :stack="validation?.stack" />

        <lkt-tooltip
            v-if="computedEditable && fieldTypesWithOptions.includes(type)"
            ref="dropdownEl"
            v-model="showOptions"
            v-bind="<TooltipConfig>{
                class: 'lkt-field--dropdown',
                referrer: container,
                referrerWidth: true,
                locationX: TooltipLocationX.LeftCorner,
                locationY: TooltipLocationY.Bottom,
                ...tooltipConfig
            }"
        >
            <div v-if="showOptions">
                <lkt-loader v-if="isLoading" />
                <ul class="lkt-field--dropdown-options" v-if="!isLoading" ref="optionList">
                    <li v-for="(option, i) in visibleOptions"
                        :class="{
                                'is-active': optionIsActive(option, value, multiple),
                                'is-focused': i === focusedOptionIndex,
                                'is-disabled': option.disabled,
                            }"
                        :data-index="i"
                        @click="() => onClickOption(option)">
                        <template v-if="slots.option">
                            <slot name="option"
                                  :option="option"
                                  :data="slotData"
                                  :modal="optionsConfig?.modal"
                                  :modal-data="optionsConfig?.modalData"
                                  :download="optionsConfig?.download"
                                  :editable="computedEditable"
                            />
                        </template>
                        <template v-else>
                            <dropdown-option
                                :option="option"
                                :option-slot="optionSlot"
                                :icon="optionsConfig?.icon"
                                :text="optionsConfig?.text"
                                :modal="optionsConfig?.modal"
                                :modal-data="optionsConfig?.modalData"
                                :download="optionsConfig?.download"
                                :label-formatter="optionsConfig?.labelFormatter"
                                :editable="computedEditable"
                            />
                        </template>
                    </li>
                </ul>
            </div>
        </lkt-tooltip>
    </div>
</template>