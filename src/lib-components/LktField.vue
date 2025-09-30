<script lang="ts" setup>
    import { formatNumber, generateRandomString, isEmail, stripTags, trim } from 'lkt-string-tools';
    import { ComponentPublicInstance, computed, nextTick, onMounted, ref, useSlots, watch } from 'vue';
    import { Settings } from '../settings/Settings';
    import { httpCall, HTTPResponse } from 'lkt-http-client';
    import { currentLanguage } from 'lkt-i18n';
    import {
        booleanFieldTypes,
        ButtonConfig,
        ButtonType,
        extractI18nValue,
        extractPropValue,
        Field,
        FieldAutoValidationTrigger,
        FieldConfig,
        FieldReportLevel,
        FieldReportType,
        fieldsWithMultipleMode,
        FieldType,
        fieldTypesWithoutClear,
        fieldTypesWithoutUndo,
        FieldValidation,
        FieldValidationType,
        FileEntity,
        getDefaultValues,
        LktObject,
        LktSettings,
        OptionConfig,
        TableConfig,
        textFieldTypes,
        ToastConfig,
        ToastPositionX,
        ValidationCode,
        ValidationStatus,
    } from 'lkt-vue-kernel';
    import UndoButton from '../components/buttons/UndoButton.vue';
    import ClearButton from '../components/buttons/ClearButton.vue';
    import PasswordButton from '../components/buttons/PasswordButton.vue';
    import EditionButton from '../components/buttons/EditionButton.vue';
    import EllipsisActionsButton from '../components/buttons/EllipsisActionsButton.vue';
    import I18nButton from '../components/buttons/I18nButton.vue';
    import { ensureNumberBetween } from '../functions/numeric-functions';
    import { getVisibleDateValue } from '../functions/date-functions';
    import DropdownButton from '../components/buttons/DropdownButton.vue';
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
    import { appendIconToLabel } from '../functions/calcultad-data-functions';
    import CardInput from '../components/CardInput.vue';
    import MultipleCardInput from '../components/MultipleCardInput.vue';
    import FileUploadButton from '@/components/buttons/FileUploadButton.vue';
    import { openToast } from 'lkt-toast';
    import { DataState } from 'lkt-data-state';
    import TimeInput from '@/components/TimeInput.vue';
    import { SelectInputProps } from '@/config/SelectInputProps.ts';
    import { InternalInputComponent } from '@/enum/InternalInputComponent.ts';
    import { RadioInputProps } from '@/config/RadioInputProps.ts';
    import RadioInput from '@/components/RadioInput.vue';
    import ToggleButtonGroupInput from '@/components/ToggleButtonGroupInput.vue';
    import { ToggleButtonGroupInputProps } from '@/config/ToggleButtonGroupInputProps.ts';

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

    const selectOptionsAutoLoaded = ref(false);
    const selectOptionsAutoLoading = ref(false);

    const computedReportLevel = computed(() => {
        if (props.validation.reportLevel) return props.validation.reportLevel;
        return FieldReportLevel.Error;
    })

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

    if (props.type === FieldType.Table) {
        _val = JSON.parse(JSON.stringify(props.modelValue));
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

    const container = ref(<Element | ComponentPublicInstance | null>null);

    const showOptions = ref(false),
        ready = ref(false);

    const pickedOptions = ref(<OptionConfig[]>[]),
        searchMode = ref(false);

    const computedLang = computed(() => currentLanguage.value);
    const computedDateReadFormat = computed(() => {
        computedLang.value; // Call in order to force prop to re-compute
        if (Settings.dateReadFormat) return Settings.dateReadFormat;
        if (Settings.langDateReadFormat[computedLang.value]) return Settings.langDateReadFormat[computedLang.value];
        if (Settings.defaultDateReadFormat) return Settings.defaultDateReadFormat;
        return 'Y-m-d';
    });

    const editableValue = value;
    const originalEditableValue = ref(typeof editableValue.value === 'object' ? JSON.parse(JSON.stringify(editableValue.value)) : editableValue.value);

    const computedInputElement = computed(() => {
        if (props.type === FieldType.Textarea) return 'textarea';
        if (props.type === FieldType.Html) return 'div';
        return 'input';
    });

    const changed = computed(() => {
            if ([FieldType.Date, FieldType.DateTime].includes(props.type)) {
                return value.value !== originalValue.value;
            } else if (props.type === FieldType.Select || props.type === FieldType.Radio) {
                if (props.multiple) {
                    if (props.optionValueType !== 'option') {
                        let dataState = new DataState({ v: originalEditableValue.value });
                        dataState.increment({ v: editableValue.value });
                        return dataState.changed();
                    }
                }
            } else if (props.type === FieldType.Table) {
                let dataState = new DataState({ v: originalEditableValue.value });
                dataState.increment({ v: editableValue.value });
                return dataState.changed();
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
            if (typeof props.createButton === 'object') ++r;

            if (r > 1 && [
                FieldType.Textarea,
                FieldType.Html,
                FieldType.Table,
                FieldType.Radio,
            ].includes(props.type)) return 1;

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
            if ([FieldType.Select, FieldType.Radio].includes(props.type)) {
                if (props.optionsConfig?.zeroMeansEmpty) return !(value.value === '' || value.value === 0);
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
            if (props.multiple && [FieldType.Select, FieldType.Radio].includes(props.type)) r.push('is-lg');

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
            let val = extractPropValue(props.min, props.prop);

            if (typeof val === 'string') return parseFloat(val);
            if (typeof val === 'number') return val;
            //@ts-ignore
            return false;
        }),
        MaximumValue = computed((): number => {
            let val = extractPropValue(props.max, props.prop);

            if (typeof val === 'string') return parseFloat(val);
            if (typeof val === 'number') return val;
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
            return props.type === FieldType.Select;
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

    const translations = ref(<LktObject>{});
    if (props.canI18n && typeof props.modelValue === 'object' && !Array.isArray(props.modelValue)) {
        translations.value = JSON.parse(JSON.stringify(props.modelValue)) ?? {};
    }

    const translationsDataState = ref(new DataState(translations.value));

    watch(translations, (v) => {

        let stateChecker = new DataState(translationsDataState.value.getOriginalData());
        stateChecker.increment(v);

        if (stateChecker.changed()) {
            emits('update:modelValue', v);

            if (validationTimeout) clearTimeout(validationTimeout);

            validationTimeout = setTimeout(() => {
                doValidation();
            }, 150);
        }
    }, { deep: true });


    // Watch data
    watch(() => props.validation?.checkEqualTo, () => doValidation());
    watch(() => props.valid, (v) => isValid.value = v);
    watch(() => props.modelValue, (v) => {
        if ([FieldType.Card].includes(props.type)) {
            editableValue.value = v;
        } else if (computedInternalInput.value === InternalInputComponent.DateInput) {
            editableValue.value = v;
        } else if (props.canI18n) {
            let stateChecker = new DataState(translations.value);
            stateChecker.increment(v);
            if (stateChecker.changed()) {
                translations.value = JSON.parse(JSON.stringify(v)) ?? {};
            }

        } else {
            editableValue.value = v;
        }
    }, { deep: true });

    watch(editableValue, (v) => {
        if (typeof v === 'object' && !Array.isArray(v) && ![FieldType.Card].includes(props.type)) {
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

            if (typeof props.events?.changed === 'function') {
                props.events.changed({
                    prop: props.prop,
                });
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

    const hasToOverrideValidation = (code: ValidationCode) => {
        if (props.validation.defaultValueOverrides?.includes(code) && props.validation?.defaultValue?.length > 0) {
            return true;
        }

        return false;
    }

    const doValidation = async () => {

        const remoteValidation = await doRemoteValidation();
        const localValidation = doLocalValidation();

        const validationStatus = [...remoteValidation, ...localValidation];

        let validStatus = validationStatus.filter(v => v.status === ValidationStatus.Ko).length === 0;

        isFormValid.value = validStatus;

        // if (!initialValidation && props.validation?.trigger === FieldAutoValidationTrigger.Blur && (!hadFirstBlur.value || !hadFirstFocus.value)) {
        //     return;
        // }

        if (props.type === FieldType.Range) return;

        let crc = new DataState({
            status: localValidationStatus.value
        }).increment(validationStatus);

        // localValidationStatus.value.splice(0, localValidationStatus.value.length);
        if (crc.changed()){
            localValidationStatus.value = validationStatus;
        }

        isValid.value = validStatus;
        emits('validation-status', validationStatus);
    };

    const doLocalValidation = () => {

        let r:Array<FieldValidation> = [];

        let checkedValue = editableValue.value;
        if (props.canI18n) {
            checkedValue = translations[computedLang];
        }

        //@ts-ignore
        let min = MinimumValue.value,
            //@ts-ignore
            max = MaximumValue.value;

        if (props.type === FieldType.Number && typeof props.min !== 'undefined' && typeof props.max !== 'undefined') {
            if (checkedValue < min || checkedValue > max) {
                r.push(FieldValidation.createNumBetween(min, max, ValidationStatus.Ko));
                isValid.value = false;

                if (computedReportLevel.value === FieldReportLevel.Error) return r;
            }
        }

        // Check if mandatory and return if empty
        if (props.mandatory) {
            switch (props.type) {
                case FieldType.Select:
                case FieldType.Radio:
                case FieldType.ToggleButtonGroup:
                    if (props.multiple && pickedOptions.value.length === 0) {
                        if (hasToOverrideValidation(ValidationCode.Empty)) {
                            r = [...r, ...props.validation.defaultValue];
                        } else {
                            r.push(FieldValidation.createEmpty(ValidationStatus.Ko));
                        }
                    } else if (!props.multiple && !checkedValue) {
                        if (hasToOverrideValidation(ValidationCode.Empty)) {
                            r = [...r, ...props.validation.defaultValue];
                        } else {
                            r.push(FieldValidation.createEmpty(ValidationStatus.Ko));
                        }
                    }
                    break;

                case FieldType.Html:
                    let content = trim(stripTags(checkedValue));
                    if (content.length === 0) {
                        if (hasToOverrideValidation(ValidationCode.Empty)) {
                            r = [...r, ...props.validation.defaultValue];
                        } else {
                            r.push(FieldValidation.createEmpty(ValidationStatus.Ko));
                        }
                    }
                    break;

                default:
                    if (![FieldType.Number].includes(props.type) && checkedValue === '') {
                        if (hasToOverrideValidation(ValidationCode.Empty)) {
                            r = [...r, ...props.validation.defaultValue];
                        } else {
                            r.push(FieldValidation.createEmpty(ValidationStatus.Ko));
                        }
                    }
            }

            if (computedReportLevel.value === FieldReportLevel.Error && r.length > 0) return r;
        }

        if (min > 0) {
            if (props.type !== FieldType.Number && checkedValue.length < min) {
                if (hasToOverrideValidation(ValidationCode.MinStringLength)) {
                    r = [...r, ...props.validation.defaultValue];
                } else {
                    r.push(FieldValidation.createMinStr(ValidationStatus.Ko));
                }

            } else if (checkedValue < min) {
                if (hasToOverrideValidation(ValidationCode.MinNumber)) {
                    r = [...r, ...props.validation.defaultValue];
                } else {
                    r.push(FieldValidation.createMinNum(ValidationStatus.Ko));
                }
            }
        }

        if (max > 0) {
            if (props.type !== FieldType.Number && checkedValue.length > max) {
                if (hasToOverrideValidation(ValidationCode.MaxStringLength)) {
                    r = [...r, ...props.validation.defaultValue];
                } else {
                    r.push(FieldValidation.createMaxStr(ValidationStatus.Ko));
                }

            } else if (checkedValue > max) {
                if (hasToOverrideValidation(ValidationCode.MaxNumber)) {
                    r = [...r, ...props.validation.defaultValue];
                } else {
                    r.push(FieldValidation.createMaxNum(ValidationStatus.Ko));
                }
            }
        }

        if (props.type === FieldType.Email) {
            if (!isEmail(checkedValue)) {
                if (hasToOverrideValidation(ValidationCode.Email)) {
                    r = [...r, ...props.validation.defaultValue];
                } else {
                    r.push(FieldValidation.createEmail(ValidationStatus.Ko));
                }
            }
        }

        if (textFieldTypes.includes(props.type)) {
            validateAmountOfNumbers(r, computedReportLevel.value, checkedValue, props.validation?.minNumbers, props.validation?.maxNumbers);
            validateAmountOfUpperChars(r, computedReportLevel.value, checkedValue, props.validation?.minUpperChars, props.validation?.maxUpperChars);
            validateAmountOfLowerChars(r, computedReportLevel.value, checkedValue, props.validation?.minLowerChars, props.validation?.maxLowerChars);
            validateAmountOfChars(r, computedReportLevel.value, checkedValue, props.validation?.minChars, props.validation?.maxChars);
            validateAmountOfSpecialChars(r, computedReportLevel.value, checkedValue, props.validation?.minSpecialChars, props.validation?.maxSpecialChars);
        }

        if (props.validation?.checkEqualTo) {
            let valueToCompare = typeof props.validation?.checkEqualTo === 'function' ? props.validation?.checkEqualTo() : props.validation?.checkEqualTo;

            if (checkedValue !== valueToCompare) {
                r.push(FieldValidation.createEqualTo(valueToCompare, ValidationStatus.Ko));
            }
        }

        return r;
    };

    const ableToRenderValidation = computed(() => {
        if (props.validation?.trigger === false) return false;
        if (props.validation?.trigger === FieldAutoValidationTrigger.Always) return true;
        if (props.validation?.trigger === FieldAutoValidationTrigger.Focus && hadFirstFocus.value) return true;

        return props.validation?.trigger === FieldAutoValidationTrigger.Blur
            && hadFirstBlur.value
            && hadFirstFocus.value;
    })

    const computedValidationGroup = computed(() => {

        if (!ableToRenderValidation.value && props.validation?.defaultValue?.length > 0) {
            return 1;
        }

        if (ableToRenderValidation.value) {
            return 2;
        }

        if (localValidationStatus.value.length === 0) {
            if (props.validation?.defaultValue?.length > 0) {
                return 1;
            }
            return 0;
        }

        return 2;
    })

    const computedValidationStatus = computed(() => {

        switch (computedValidationGroup.value) {
            case 1:
                if (Array.isArray(props.validation?.defaultValue)) {
                    return props.validation?.defaultValue;
                }
                return [];

            case 2:
                return localValidationStatus.value;

            default:
                return [];
        }
    })

    const computedCanRenderValidations = computed(() => {
            if (computedValidationStatus.value.length === 0) return false;
            if (props.validation.report === false || props.validation.report === FieldReportType.Inline) return false;

            if (computedValidationGroup.value === 2 && !ableToRenderValidation.value) {
                return false;
            }

            return true;
        }),
        computedCanRenderValidationsInline = computed(() => {
            if (localValidationStatus.value.length === 0) return false;
            if (props.validation.report === false || props.validation.report === FieldReportType.Message) return false;

            if (!ableToRenderValidation.value) {
                return false;
            }

            return true;
        });

    const
        doUndo = () => {
            switch (computedInternalInput.value) {
                case InternalInputComponent.HtmlInput:
                    if (inputElement.value) {
                        //@ts-ignore
                        inputElement.value.setValue(originalEditableValue.value);
                    }
                    return;

                case InternalInputComponent.DateInput:
                    value.value = originalValue.value;
                    return;

                case InternalInputComponent.FileInput:
                    value.value = originalValue.value;
                    visibleFileName.value = originalFileName.value;
                    return;

                case InternalInputComponent.SelectInput:
                    //@ts-ignore
                    inputElement.value?.doUndo(originalEditableValue.value);
                    return;

                case InternalInputComponent.TableInput:
                    editableValue.value = JSON.parse(JSON.stringify(originalEditableValue.value));
                    return;

                default:
                    editableValue.value = originalEditableValue.value;
            }
        },
        doClear = () => {
            switch (computedInternalInput.value) {
                case InternalInputComponent.HtmlInput:
                    if (inputElement.value) {
                        //@ts-ignore
                        inputElement.value.setValue('');
                    }
                    return;

                case InternalInputComponent.DateInput:
                    value.value = '';
                    return;

                case InternalInputComponent.FileInput:
                    value.value = '';
                    visibleFileName.value = '';
                    return;

                case InternalInputComponent.SelectInput:
                    //@ts-ignore
                    inputElement.value?.doClear();
                    return;

                case InternalInputComponent.TableInput:
                    editableValue.value = [];
                    return;

                default:
                    editableValue.value = '';
            }
        },
        getValue = () => editableValue.value,
        onKeyUp = ($event: KeyboardEvent) => {
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
        onFocusSelectInput = () => {
            hadFirstFocus.value = true;
            focusing.value = true;

            doValidation();

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
            let v = parseFloat(editableValue.value);
            if (isNaN(v)) v = 0;
            if (!MinimumValue.value || v > MinimumValue.value) {
                editableValue.value = parseFloat((v - step).toFixed(amountOfDecimals));
            }
        },
        onClickIncrease = () => {
            let step = props.step ?? 1;
            if (typeof step === 'string') step = parseFloat(step);
            let amountOfDecimals = String(step).split('.')[0].length;
            let v = parseFloat(editableValue.value);
            if (isNaN(v)) v = 0;
            if (!MaximumValue.value || v < MaximumValue.value) {
                editableValue.value = parseFloat((v + step).toFixed(amountOfDecimals));
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
        if (props.type === FieldType.Select) {
            if (props.multiple) {
                searchMode.value = true;
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
            case FieldType.Radio:
            case FieldType.ToggleButtonGroup:
                return pickedOptions.value;

            case FieldType.Date:
            case FieldType.DateTime:
                //@ts-ignore
                return getVisibleDateValue(value.value, computedDateReadFormat.value);

            case FieldType.File:
            case FieldType.Image:
                return value.value;

            default:
                if (props.canI18n) return translations.value[computedLang.value];
                return editableValue.value;
        }
    });

    const computedCanRender = computed(() => {
            if (typeof props.canRender === 'function') return props.canRender({
                prop: props.prop,
            });
            if (typeof props.canRender === 'boolean') return props.canRender;
            return true;
        }),
        computedCanDisplay = computed(() => {
            if (typeof props.canDisplay === 'function') return props.canDisplay({
                prop: props.prop,
            });
            if (typeof props.canDisplay === 'boolean') return props.canDisplay;
            return true;
        });

    const computedInternalInput = computed(() => {
        if (booleanFieldTypes.includes(props.type)) return InternalInputComponent.BooleanInput;
        switch (props.type) {
            case FieldType.Color:
                if (props.multiple) return InternalInputComponent.MultipleColorInput;
                return InternalInputComponent.SingleColorInput;

            case FieldType.Card:
                if (props.multiple) return InternalInputComponent.MultipleCardInput;
                return InternalInputComponent.SingleCardInput;

            case FieldType.File:
            case FieldType.Image:
                return InternalInputComponent.FileInput;

            case FieldType.Date:
            case FieldType.DateTime:
                return InternalInputComponent.DateInput;

            case FieldType.Time:
                return InternalInputComponent.TimeInput;

            case FieldType.Select:
                return InternalInputComponent.SelectInput;

            case FieldType.Calc:
                return InternalInputComponent.CalcInput;

            case FieldType.Search:
                return InternalInputComponent.SearchInput;

            case FieldType.Html:
                return InternalInputComponent.HtmlInput;

            case FieldType.Table:
                return InternalInputComponent.TableInput;

            case FieldType.Radio:
                return InternalInputComponent.RadioInput;

            case FieldType.ToggleButtonGroup:
                return InternalInputComponent.ToggleButtonGroupInput;

            default:
                if (computedInputElement.value === 'input') {
                    if (props.options.length > 0 || (props.optionsConfig?.http && Object.keys(props.optionsConfig?.http).length > 0)) {
                        return InternalInputComponent.SelectInput;
                    }
                    return InternalInputComponent.TextInput;
                }
                if (computedInputElement.value === 'textarea') {
                    return InternalInputComponent.TextareaInput;
                }
        }
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
                    v-if="computedShowI18n && fieldFeaturedButton === 'i18n' && canI18n && container"
                    :translations="translations"
                    is-featured
                    :referrer="container"
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
                    v-else-if="computedInternalInput === InternalInputComponent.BooleanInput"
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
                    v-else-if="computedInternalInput === InternalInputComponent.MultipleColorInput"
                    v-model="editableValue"
                    ref="inputElement"
                    :edit-mode="computedEditable"
                    :min="MinimumValue"
                    :max="MaximumValue"
                />

                <color-input
                    v-else-if="computedInternalInput === InternalInputComponent.SingleColorInput"
                    v-model="editableValue"
                    @change="onChange"
                    ref="inputElement" />

                <file-input
                    v-else-if="computedInternalInput === InternalInputComponent.FileInput"
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
                    v-else-if="computedInternalInput === InternalInputComponent.DateInput"
                    v-model="value"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :lang="computedLang"
                    :name="name"
                    :icon="computedIcon"
                    :is-date-time="FieldType.DateTime === type"
                />

                <time-input
                    v-else-if="computedInternalInput === InternalInputComponent.TimeInput"
                    v-model="value"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :lang="computedLang"
                    :name="name"
                    :icon="computedIcon"
                />

                <select-input
                    v-else-if="computedInternalInput === InternalInputComponent.SelectInput"
                    ref="inputElement"
                    v-model="editableValue"
                    v-model:show-options="showOptions"
                    v-model:picked-options="pickedOptions"
                    v-bind="<SelectInputProps>{
                        searchable,
                        searchMode,
                        multiple,
                        canTag,
                        options,
                        optionsConfig,
                        optionSlot,
                        editable: computedEditable,
                        focusing,
                        searchPlaceholder: computedSearchPlaceholder,
                        multipleDisplayEdition: multipleDisplayEdition,
                        prop,
                        max: MaximumValue,
                        tooltip: tooltipConfig,
                        events,
                        optionValueType,
                        referrer: container,
                        isAutoCompleteText: type !== FieldType.Select,
                    }"
                    @focus="onFocusSelectInput"
                    @blur="onBlurSelectInput"
                    @change="onChange"
                />

                <radio-input
                    v-else-if="computedInternalInput === InternalInputComponent.RadioInput"
                    ref="inputElement"
                    v-model="editableValue"
                    v-model:show-options="showOptions"
                    v-model:picked-options="pickedOptions"
                    v-bind="<RadioInputProps>{
                        searchable,
                        searchMode,
                        multiple,
                        options,
                        optionsConfig,
                        optionSlot,
                        editable: computedEditable,
                        focusing,
                        searchPlaceholder: computedSearchPlaceholder,
                        multipleDisplayEdition: multipleDisplayEdition,
                        prop,
                        max: MaximumValue,
                        tooltip: tooltipConfig,
                        events,
                        optionValueType,
                        referrer: container,
                    }"
                    @focus="onFocusSelectInput"
                    @blur="onBlurSelectInput"
                    @change="onChange"
                />
                <toggle-button-group-input
                    ref="inputElement"
                    v-else-if="computedInternalInput === InternalInputComponent.ToggleButtonGroupInput"
                    v-model="editableValue"
                    v-model:show-options="showOptions"
                    v-model:picked-options="pickedOptions"
                    v-bind="<ToggleButtonGroupInputProps>{
                        searchable,
                        searchMode,
                        multiple,
                        options,
                        optionsConfig,
                        optionSlot,
                        editable: computedEditable,
                        focusing,
                        searchPlaceholder: computedSearchPlaceholder,
                        multipleDisplayEdition: multipleDisplayEdition,
                        prop,
                        max: MaximumValue,
                        tooltip: tooltipConfig,
                        events,
                        optionValueType,
                        referrer: container,
                    }"
                    @focus="onFocusSelectInput"
                    @blur="onBlurSelectInput"
                    @change="onChange"
                />
                <calc-input
                    ref="inputElement"
                    v-else-if="computedInternalInput === InternalInputComponent.CalcInput"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :name="name"
                    :editable="computedEditable"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :options="options"
                    @focus="onFocusBooleanInput"
                    @blur="onBlurBooleanInput"
                />

                <search-input
                    ref="inputElement"
                    v-else-if="computedInternalInput === InternalInputComponent.SearchInput"
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
                    :tooltip="tooltipConfig"
                    @focus="onFocusBooleanInput"
                    @blur="onBlurBooleanInput"
                />

                <multiple-card-input
                    v-else-if="computedInternalInput === InternalInputComponent.MultipleCardInput"
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
                    v-else-if="computedInternalInput === InternalInputComponent.SingleCardInput"
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

                <lkt-table
                    v-else-if="computedInternalInput === InternalInputComponent.TableInput"
                    v-model="editableValue"
                    v-bind="<TableConfig>{
                        ...optionsConfig?.table,
                        editMode: computedEditable,
                    }"
                />

                <input
                    v-else-if="canI18n && computedInternalInput === InternalInputComponent.TextInput"
                    v-model="translations[computedLang]"
                    :ref="(el:any) => inputElement = el"
                    :value="translations[computedLang]"
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

                <input
                    v-else-if="computedInternalInput === InternalInputComponent.TextInput"
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
                    v-else-if="canI18n && computedInternalInput === InternalInputComponent.TextareaInput"
                    v-model="translations[computedLang]"
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
                <textarea
                    v-else-if="computedInternalInput === InternalInputComponent.TextareaInput"
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
                    v-else-if="computedInternalInput === InternalInputComponent.HtmlInput"
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
                :is-loading="selectOptionsAutoLoading"
                :label="computedLabel"
                :title="readModeTitle"
                :file-name="visibleFileName"
                :value-slot="valueSlot"
                :empty-value-slot="emptyValueSlot"
                :slot-data="slotData"
                :download="calculatedDownload"
                :anchor="optionsConfig?.anchor"
                :multiple="multiple"
                :multipleDisplay="multipleDisplay"
                :modal="computedModal"
                :modal-key="calculatedModalKey"
                :modal-data="computedModalData"
                :options-config="optionsConfig"
                :option-slot="optionSlot"
                :options-download="optionsConfig?.download"
                :options-modal="optionsConfig?.modal"
                :options-modal-data="optionsConfig?.modalData"
                :options-icon="optionsConfig?.icon"
                :options-text="optionsConfig?.text"
                :options-class="optionsConfig?.class"
                :options-label-formatter="optionsConfig?.labelFormatter"
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

                <lkt-button
                    v-if="computedShowError"
                    :title="errorMessage"
                    class="lkt-field--danger-btn"
                    icon="lkt-icn-attention"
                    @click="onClickError"
                />

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
                    v-if="computedCanRenderValidationsInline"
                    class="lkt-field--report-btn"
                    icon="lkt-icn-attention"
                    @click="onClickInfo"
                    v-bind="<ButtonConfig>{
                        type: ButtonType.Tooltip,
                        tooltip: {
                            showOnReferrerHover: true,
                            showOnReferrerHoverDelay: 500,
                            hideOnReferrerLeave: true,
                        }
                    }"
                >
                    <template #tooltip>
                        <lkt-field-validations
                            :items="localValidationStatus"
                            :stack="validation?.stack" />
                    </template>
                </lkt-button>
                <lkt-button
                    v-if="computedShowInfo"
                    class="lkt-field--info-btn"
                    icon="lkt-icn-info"
                    @click="onClickInfo"
                    v-bind="<ButtonConfig>{
                        type: ButtonType.Tooltip,
                        tooltip: {
                            showOnReferrerHover: true,
                            showOnReferrerHoverDelay: 500,
                            hideOnReferrerLeave: true,
                        }
                    }"
                >
                    <template #tooltip>
                        <div class="lkt-field--info-msg" v-html="infoMessage" />
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
                    v-if="computedShowI18nInNav && container"
                    :translations="translations"
                    :type="type"
                    :referrer="container"
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

                <lkt-button
                    v-if="typeof createButton === 'object' && createButton && computedEditable"
                    v-bind="{
                        icon: 'lkt-icn-add',
                        ...createButton,
                        modalData: {
                            ...createButton.modalData,
                            events: {
                                onCreate: () => {
                                    if (createButton && typeof createButton?.modalData?.events?.onCreate === 'function') {
                                        createButton?.modalData?.events?.onCreate();
                                    }
                                    if (typeof events?.itemCreated === 'function') {
                                        events?.itemCreated();
                                    }
                                }
                            }
                        }
                    }"
                    class="lkt-field--info-btn"
                />

                <dropdown-button
                    v-if="computedEditable && typeof optionsConfig?.canRenderDropdown === 'undefined' || optionsConfig?.canRenderDropdown === true"
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
            v-if="computedEditable"
            v-show="computedCanRenderValidations"
            :items="computedValidationStatus"
            :config="validation"
            :stack="validation?.stack" />

        <template v-if="ready && (type === FieldType.Select || type === FieldType.Radio || type === FieldType.ToggleButtonGroup)">
            <select-input
                ref="inputElement"
                v-bind="<SelectInputProps>{
                    modelValue: editableValue,
                    pickedOptions,
                    showOptions,
                    searchable,
                    searchMode,
                    multiple,
                    canTag,
                    options,
                    optionsConfig,
                    optionSlot,
                    editable: computedEditable,
                    focusing,
                    searchPlaceholder: computedSearchPlaceholder,
                    multipleDisplayEdition: multipleDisplayEdition,
                    prop,
                    max: MaximumValue,
                    tooltip: tooltipConfig,
                    events,
                    optionValueType,
                    referrer: container,
                    autoLoading: true,
                    localAutoLoad: !optionsConfig?.autoloadResource
                }"
                @focus="onFocusSelectInput"
                @blur="onBlurSelectInput"
                @change="onChange"
                @loaded="selectOptionsAutoLoaded = true"
                @autoload-start="selectOptionsAutoLoading = true"
                @autoload-end="selectOptionsAutoLoading = false"
            />
        </template>
    </div>
</template>