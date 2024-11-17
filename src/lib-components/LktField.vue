<script lang="ts" setup>
    import { formatNumber, generateRandomString, isEmail as checkIsEmail, stripTags } from 'lkt-string-tools';
    import { ComponentPublicInstance, computed, nextTick, onMounted, ref, useSlots, watch } from 'vue';
    import { Settings } from '../settings/Settings';
    import { httpCall, HTTPResponse } from 'lkt-http-client';
    import { __, currentLanguage } from 'lkt-i18n';
    import { FieldValidation } from 'lkt-field-validation';
    import UndoButton from '../components/buttons/UndoButton.vue';
    import ClearButton from '../components/buttons/ClearButton.vue';
    import PasswordButton from '../components/buttons/PasswordButton.vue';
    import EditionButton from '../components/buttons/EditionButton.vue';
    import EllipsisActionsButton from '../components/buttons/EllipsisActionsButton.vue';
    import I18nButton from '../components/buttons/I18nButton.vue';
    import { FieldType } from '../enums/FieldType';
    import { ensureNumberBetween } from '../functions/numeric-functions';
    import { Option } from '../instances/Option';
    import {
        filterOptions,
        findOptionByValue,
        getInValueOptionIndex,
        optionIsActive,
        prepareOptions,
        receiveOptions,
    } from '../functions/option-functions';
    import { getVisibleDateValue } from '../functions/date-functions';
    import {
        BooleanFieldTypes,
        FieldTypesWithOptions,
        FieldTypesWithoutClear,
        FieldTypesWithoutUndo,
        TextFieldTypes,
    } from '../constants/field-type-constants';
    import DropdownButton from '../components/buttons/DropdownButton.vue';
    import DropdownOption from '../components/dropdown/DropdownOption.vue';
    import ColorInput from '../components/color/ColorInput.vue';
    import {
        validateAmountOfChars,
        validateAmountOfLowerChars,
        validateAmountOfNumbers,
        validateAmountOfSpecialChars,
        validateAmountOfUpperChars,
    } from '../functions/validation-functions';
    import { MultipleDisplayType } from '../enums/MultipleDisplayType';
    import BooleanInput from '../components/BooleanInput.vue';
    import HtmlInput from '../components/HtmlInput.vue';
    import SelectInput from '../components/SelectInput.vue';
    import CalcInput from '../components/CalcInput.vue';
    import { LktFieldConfigType } from '../types/LktFieldConfigType';
    import LktFieldValidations from '../components/validations/LktFieldValidations.vue';
    import SearchInput from '../components/SearchInput.vue';
    import LktFieldValue from '../lib-components/LktFieldValue.vue';
    import FileInput from '../components/FileInput.vue';
    import DateInput from '../components/DateInput.vue';
    import { extractEditableValue, extractPropValue } from '../functions/calcultad-data-functions';

    // Emits
    const emits = defineEmits(['update:modelValue', 'update:valid', 'keyup', 'keydown', 'focus', 'blur', 'click', 'change', 'click-info', 'click-error', 'validation', 'validating', 'options-loaded', 'selected-option']);

    // Slots
    const slots = useSlots();

    // Props
    const props = withDefaults(defineProps<LktFieldConfigType>(), {
        modelValue: '',
        type: FieldType.Text,
        placeholder: '',
        searchPlaceholder: '',
        label: '',
        name: generateRandomString(16),
        valid: false,
        autocomplete: true,
        disabled: false,
        readonly: false,
        readMode: false,
        allowReadModeSwitch: false,
        tabindex: undefined,
        mandatory: false,
        showPassword: false,
        canClear: false,
        canStep: true,
        mandatoryMessage: '',
        infoMessage: '',
        errorMessage: '',
        min: undefined,
        max: undefined,
        step: 1,
        enableAutoNumberFix: true,
        emptyValueSlot: '',
        valueSlot: '',
        editSlot: '',
        slotData: () => ({}),
        resource: '',
        resourceData: () => ({}),
        validationResource: '',
        validationResourceData: () => ({}),
        autoValidation: false,
        autoValidationType: 'blur',
        validationStack: 'default',
        minNumbers: undefined,
        maxNumbers: undefined,
        minChars: undefined,
        maxChars: undefined,
        minUpperChars: undefined,
        maxUpperChars: undefined,
        minLowerChars: undefined,
        maxLowerChars: undefined,
        minSpecialChars: undefined,
        maxSpecialChars: undefined,
        checkEqualTo: undefined,
        featuredButton: '',
        infoButtonEllipsis: false,
        fileName: '',
        options: () => [],
        multiple: false,
        multipleDisplay: MultipleDisplayType.List,
        multipleDisplayEdition: MultipleDisplayType.Inline,
        searchable: false,
        autoloadOptionsResource: false,
        optionsDownload: '',
        optionsModal: '',
        optionsModalData: () => ({}),
        optionsIcon: '',
        optionsResource: '',
        optionsResourceData: () => ({}),
        icon: '',
        modal: '',
        modalKey: '',
        modalData: () => ({}),
        prop: () => ({}),
    });

    // Constant data
    const Identifier = generateRandomString(16);

    // Calculated data
    const calculatedModalKey = extractPropValue(props.modalKey, props.prop);
    let calculatedIcon = extractPropValue(props.icon, props.prop);
    const calculatedDownload = extractPropValue(props.download, props.prop);

    const Type = ref(props.type);

    // Components refs
    const inputElement = ref(null);
    let fieldFeaturedButton = props.featuredButton;

    let _val = props.modelValue;
    if (Type.value === 'select' && props.multiple) {
        if (!_val || !Array.isArray(_val)) _val = [];

    } else if (BooleanFieldTypes.includes(Type.value)) {
        if (typeof _val !== 'boolean') _val = false;

    } else if (Type.value === FieldType.Date && !calculatedIcon) {
        calculatedIcon = Settings.defaultDateIcon;

    } else if (Type.value === FieldType.Number && props.canStep && fieldFeaturedButton === '') {
        fieldFeaturedButton = Settings.defaultNumberFeaturedButton;
    }

    // Reactive data
    const originalValue = ref(_val),
        value = ref(_val),
        isValid = ref(props.valid),
        showPasswordIcon = ref(false),
        focusing = ref(false),
        hadFirstBlur = ref(false),
        hadFirstFocus = ref(false),
        localValidationStatus = ref(<FieldValidation[]>[]),
        editable = ref(!props.readMode),
        originalFileName = ref(props.fileName),
        visibleFileName = ref(props.fileName);

    const dropdownEl = ref(<Element | ComponentPublicInstance | null>null),
        container = ref(<Element | ComponentPublicInstance | null>null),
        optionList = ref(<Element | ComponentPublicInstance | null>null);

    const showOptions = ref(false),
        isLoading = ref(false),
        ready = ref(false);

    const searchString = ref('');
    const focusedOptionIndex = ref(-1);
    const pickedOptions = ref(<Option[]>[]);
    const searchMode = ref(false);
    const optionsAutoLoaded = ref(false);
    const optionsAutoLoading = ref(false);

    const computedLang = computed(() => currentLanguage.value);
    const computedDateReadFormat = computed(() => {
        computedLang.value; // Call in order to force prop to re-compute
        if (Settings.dateReadFormat) return Settings.dateReadFormat;
        if (Settings.langDateReadFormat[computedLang.value]) return Settings.langDateReadFormat[computedLang.value];
        if (Settings.defaultDateReadFormat) return Settings.defaultDateReadFormat;
        return 'Y-m-d';
    });

    const editableValue = ref(extractEditableValue(value.value, computedLang.value));
    const originalEditableValue = ref(editableValue);

    const optionsHaystack = ref(<Option[]>[]),
        visibleOptions = ref(<Option[]>[]);

    const updatePickedOption = () => {

        const _doUpdate = (query: string) => {
            visibleOptions.value = filterOptions(optionsHaystack.value, query);
            if (props.multiple) {
                for (let k in editableValue.value) {
                    let option = findOptionByValue(optionsHaystack.value, editableValue.value[k]);
                    if (typeof option !== 'undefined') {
                        if (pickedOptions.value.length === 0) {
                            pickedOptions.value.push(option);
                        } else {
                            pickedOptions.value.splice(k, 1, option);
                        }
                    }
                }

                return;
            }

            let option = findOptionByValue(optionsHaystack.value, editableValue.value);
            if (typeof option !== 'undefined') {
                if (pickedOptions.value.length === 0) {
                    pickedOptions.value.push(option);
                } else {
                    pickedOptions.value.splice(0, 1, option);
                }
            }
        };

        if (Type.value === FieldType.Text) {
            _doUpdate(editableValue.value);
        } else if (Type.value === FieldType.Select) {
            _doUpdate(searchString.value);
        }
    };

    const computedIsDate = computed(() => Type.value === FieldType.Date);
    const computedIsFile = computed(() => Type.value === FieldType.File);
    const computedIsImage = computed(() => Type.value === FieldType.Image);

    const computedInputElement = computed(() => {
        if (Type.value === FieldType.Textarea) return 'textarea';
        if (Type.value === FieldType.Html) return 'div';
        return 'input';
    });

    const changed = computed(() => {
            if (Type.value === FieldType.Date) {
                return value.value !== originalValue.value;
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
            if (computedShowDropdownButton.value) ++r;
            if (computedShowSubtractStepInNav.value) ++r;
            if (computedShowIncreaseStep.value) ++r;
            if (props.customButtonText || props.customButtonClass) ++r;

            if (r > 0 && Type.value === FieldType.Textarea) return 1;
            if (r > 0 && Type.value === FieldType.Html) return 1;
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
            if (Type.value === FieldType.Date) {
                return value.value !== '';
            }
            return editableValue.value !== '';
        }),
        computedInputType = computed(() => {
            if (Type.value === FieldType.Password && showPasswordIcon.value === true) return 'text';
            if (Type.value === FieldType.Email) return 'email';
            if (Type.value === FieldType.Password) return 'password';
            if (Type.value === FieldType.Number) return 'number';
            if (Type.value === FieldType.Tel) return 'tel';
            if (Type.value === FieldType.Search) return 'search';
            if (Type.value === FieldType.Color) return 'color';
            if (Type.value === FieldType.Range) return 'range';
            return 'text';
        }),
        classes = computed(() => {
            const r = ['lkt-field'];

            r.push(`is-${Type.value}`);
            if (BooleanFieldTypes.includes(Type.value)) {
                r.push('is-boolean');
                if (editableValue.value) r.push('is-checked');
            }
            if (changed.value) r.push('is-changed');
            if (props.disabled) r.push('is-disabled');
            if (props.multiple) r.push('is-multiple');
            if (computedHasFeaturedButton.value) r.push('with-atn-btn');
            if (showInfoUi.value) r.push('with-info-btn');
            if (props.mandatory && editable.value) r.push('is-mandatory-field');
            if (editable.value && focusing.value) r.push('has-focus');
            if (showOptions.value) r.push('show-options');
            if (props.searchable && searchMode.value) r.push('is-searching');

            if (Type.value !== FieldType.Range && props.autoValidation && hadFirstFocus.value && hadFirstBlur.value) {
                if (localValidationStatus.value.length > 0) r.push('is-invalid');
                else r.push('is-valid');
            }

            if ([FieldType.Textarea, FieldType.Html].includes(Type.value)) r.push('is-lg');
            if ([FieldType.Image].includes(Type.value)) r.push('is-xl');
            if (props.multiple && Type.value === FieldType.Select) r.push('is-lg');

            if (props.multiple) {
                if (editable.value) {
                    r.push(`has-multiple-display-${props.multipleDisplayEdition}`);
                } else {
                    r.push(`has-multiple-display-${props.multipleDisplay}`);
                }
            }

            if (amountOfIcons.value > 0) r.push(`has-icons`, `has-icons-${amountOfIcons.value}`);
            r.push(editable.value ? 'is-editable' : 'is-read');

            if (Type.value !== FieldType.Range) {
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
            if (Type.value === FieldType.Html) return stripTags(editableValue.value);
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

            let label = '';
            if (props.label.startsWith('__:')) {
                label = __(props.label.substring(3));
            } else {
                label = props.label;
            }

            if (props.labelIcon) {
                let icon = '<i class="' + props.labelIcon + '"></i>';
                if (props.labelIconAtEnd) {
                    label += icon;
                } else {
                    label = icon + label;
                }
            }

            return label;
        }),
        computedPlaceholder = computed(() => {
            if (props.placeholder.startsWith('__:')) {
                return __(props.placeholder.substring(3));
            }
            return props.placeholder;
        }),
        computedSearchPlaceholder = computed(() => {
            if (props.searchPlaceholder.startsWith('__:')) {
                return __(props.searchPlaceholder.substring(3));
            }
            return props.searchPlaceholder;
        }),

        computedAccept = computed(() => {
            if (Type.value === FieldType.File) return Settings.acceptTypes.file;
            if (Type.value === FieldType.Image) return Settings.acceptTypes.image;
            return '';
        }),

        computedShowError = computed(() => props.errorMessage),
        computedShowInfo = computed(() => props.infoMessage),

        computedShowSubtractStep = computed(() => props.canStep && editable.value && Type.value === FieldType.Number),
        computedShowSubtractStepInNav = computed(() => props.canStep && editable.value && Type.value === FieldType.Number && fieldFeaturedButton !== 'subtract'),
        computedShowIncreaseStep = computed(() => props.canStep && editable.value && Type.value === FieldType.Number),
        computedShowUndo = computed(() => props.canUndo && changed.value && editable.value && !FieldTypesWithoutUndo.includes(Type.value)),
        computedShowClear = computed(() => props.canClear && isFilled.value && editable.value && !FieldTypesWithoutClear.includes(Type.value)),
        computedShowI18n = computed(() => props.canI18n && typeof value.value === 'object' && editable.value),
        computedShowPasswordReveal = computed(() => Type.value === FieldType.Password && props.showPassword && isFilled.value && editable.value),

        computedShowUndoInNav = computed(() => computedShowUndo.value && !props.infoButtonEllipsis),
        computedShowClearInNav = computed(() => computedShowClear.value && !props.infoButtonEllipsis),
        computedShowPasswordRevealInNav = computed(() => computedShowPasswordReveal.value && !props.infoButtonEllipsis && fieldFeaturedButton !== 'password'),
        computedShowI18nInNav = computed(() => computedShowI18n.value && !props.infoButtonEllipsis && fieldFeaturedButton !== 'i18n'),
        computedShowDropdownButton = computed(() => {
            if (Type.value === FieldType.Calc) return false;
            if (Type.value === FieldType.Search) return false;
            return visibleOptions.value.length > 0 || optionsHaystack.value.length > 0 || props.optionsResource !== '';
        }),
        computedShowSwitchEditionInNav = computed(() => props.allowReadModeSwitch && !props.infoButtonEllipsis)
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
        if (props.validationResource) {
            emits('validating');
            const response: HTTPResponse = await httpCall(props.validationResource, {
                ...props.validationResourceData,
                value: editableValue.value,
            });
            emits('validation', response);
        }
    };


    // Watch data
    watch(() => props.checkEqualTo, (v) => doLocalValidation());
    watch(() => props.readMode, (v) => editable.value = !v);
    watch(() => props.valid, (v) => isValid.value = v);
    watch(() => props.modelValue, (v) => {
        if (Type.value !== FieldType.Date) {
            editableValue.value = extractEditableValue(value.value, computedLang.value);
        }
    });
    watch(editableValue, (v) => {
        if (typeof value.value === 'object') {
            value.value[computedLang.value] = v;
        } else {
            value.value = v;
        }

        if (Type.value === FieldType.Number) reAssignNumericValue(v);
    });
    watch(value, (v) => {
        if (ready.value && editable.value) {
            emits('update:modelValue', v);
            doRemoteValidation();
            doLocalValidation();
        }
    }, { deep: true });

    watch(isValid, (v) => {
        emits('update:valid', v);
    });

    watch(() => props.options, (v) => {
        optionsHaystack.value = prepareOptions(v);
        if (Type.value === FieldType.Select) {
            buildVisibleOptions(searchString.value, false);
        } else {
            buildVisibleOptions(editableValue.value, false);
        }
    });

    const doLocalValidation = () => {
        if (props.autoValidationType === 'blur' && (!hadFirstBlur.value || !hadFirstFocus.value)) {
            return;
        }

        if (Type.value === FieldType.Range) return;

        localValidationStatus.value = [];

        nextTick(() => {
            let min = typeof props.min === 'undefined' ? 0 : parseFloat(props.min),
                max = typeof props.max === 'undefined' ? 0 : parseFloat(props.max);

            if (Type.value === FieldType.Number && typeof props.min !== 'undefined' && typeof props.max !== 'undefined') {
                if (editableValue.value < min || editableValue.value > max) {
                    localValidationStatus.value.push(FieldValidation.createNumBetween(min, max, 'ko'));
                    isValid.value = false;
                    return;
                }
            }

            if (![FieldType.Number, FieldType.Email].includes(Type.value) && props.mandatory && editableValue.value === '') {
                localValidationStatus.value.push(FieldValidation.createEmpty('ko'));

            } else if (Type.value !== FieldType.Email) {

                if (min > 0) {
                    if (Type.value !== FieldType.Number && editableValue.value.length < min) {
                        localValidationStatus.value.push(FieldValidation.createMinStr(min, 'ko'));

                    } else if (editableValue.value < min) {
                        localValidationStatus.value.push(FieldValidation.createMinNum(min, 'ko'));
                    }
                }
            }

            if (max > 0) {
                if (Type.value !== FieldType.Number && editableValue.value.length > max) {
                    localValidationStatus.value.push(FieldValidation.createMaxStr(max, 'ko'));

                } else if (editableValue.value > max) {
                    localValidationStatus.value.push(FieldValidation.createMaxNum(max, 'ko'));
                }
            }

            if (Type.value === FieldType.Email) {
                if (props.mandatory && editableValue.value === '') {
                    localValidationStatus.value.push(FieldValidation.createEmpty('ko'));

                } else if (!checkIsEmail(editableValue.value)) {
                    localValidationStatus.value.push(FieldValidation.createEmail('ko'));
                }
            }

            if (TextFieldTypes.includes(Type.value)) {
                validateAmountOfNumbers(localValidationStatus.value, editableValue.value, props.minNumbers, props.maxNumbers);
                validateAmountOfUpperChars(localValidationStatus.value, editableValue.value, props.minUpperChars, props.maxUpperChars);
                validateAmountOfLowerChars(localValidationStatus.value, editableValue.value, props.minLowerChars, props.maxLowerChars);
                validateAmountOfChars(localValidationStatus.value, editableValue.value, props.minChars, props.maxChars);
                validateAmountOfSpecialChars(localValidationStatus.value, editableValue.value, props.minSpecialChars, props.maxSpecialChars);
            }

            if (props.checkEqualTo && editableValue.value !== props.checkEqualTo) {
                localValidationStatus.value.push(FieldValidation.createEqualTo(props.checkEqualTo, 'ko'));
            }

            isValid.value = localValidationStatus.value.length === 0;
        });
    };

    const buildVisibleOptions = (query: string, ableToShowOptions: boolean = true) => {
            if (optionsHaystack.value.length === 0) {
                visibleOptions.value = [];
                return;
            }

            switch (Type.value) {
                case FieldType.Select:
                    if (props.searchable) {
                        visibleOptions.value = filterOptions(optionsHaystack.value, query, true);
                    } else {
                        visibleOptions.value = optionsHaystack.value;
                    }
                    isLoading.value = false;
                    if (ableToShowOptions) showOptions.value = props.optionsResource !== '' || visibleOptions.value.length > 0;

                    updatePickedOption();
                    return;

                case FieldType.Text:
                case FieldType.Search:
                    visibleOptions.value = filterOptions(optionsHaystack.value, query, false);
                    isLoading.value = false;
                    if (ableToShowOptions) showOptions.value = props.optionsResource !== '' || visibleOptions.value.length > 0;
                    return;
            }
        },
        fetchOptions = async (query: string, ableToShowOptions: boolean = true) => {
            if (!editable.value && (!props.autoloadOptionsResource && !optionsAutoLoaded.value)) return;
            if ([
                FieldType.Tel,
                FieldType.Date,
                FieldType.Color,
                FieldType.File,
                FieldType.Html,
                FieldType.Image,
                FieldType.Password,
                FieldType.Range,
                FieldType.Textarea,
            ].includes(Type.value)) return;

            isLoading.value = false;
            if (props.autoloadOptionsResource && !optionsAutoLoaded.value) {
                optionsAutoLoading.value = true;
            }

            if (props.optionsResource !== '') {
                isLoading.value = true;
                if (Settings.searchKeyForResource !== '') props.optionsResourceData[Settings.searchKeyForResource] = query;
                const results: HTTPResponse = await httpCall(props.optionsResource, props.optionsResourceData);
                const isValidData = Array.isArray(results.data) && results.data.length > 0;
                if (isValidData) {
                    optionsHaystack.value = receiveOptions(optionsHaystack.value, results.data);
                    buildVisibleOptions(query, ableToShowOptions);

                    if (props.autoloadOptionsResource && !optionsAutoLoaded.value) {
                        if (props.autoloadOptionsResource === 'feed') {
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
                    let el = optionList.value?.querySelector('[data-index="' + focusedOptionIndex.value + '"]');
                    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });

                } else if (key === 'ArrowUp') {
                    --focusedOptionIndex.value;
                    if (focusedOptionIndex.value < 0) focusedOptionIndex.value = amountOfOptions;

                    let el = optionList.value?.querySelector('[data-index="' + focusedOptionIndex.value + '"]');
                    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });

                } else if (key === 'Enter') {
                    if (focusedOptionIndex.value > -1) {
                        onClickOption(visibleOptions.value[focusedOptionIndex.value]);
                    }
                }
            }
        };

    const
        doUndo = () => {
            if (Type.value === FieldType.Html) {
                if (inputElement.value) {
                    inputElement.value.setValue(originalEditableValue.value);
                }
                return;
            } else if (Type.value === FieldType.Date) {
                value.value = originalValue.value;
                return;
            } else if (Type.value === FieldType.File) {
                value.value = originalValue.value;
                visibleFileName.value = originalFileName.value;
                return;
            }
            editableValue.value = originalEditableValue.value;
        },
        doClear = () => {
            if (Type.value === FieldType.Html) {
                if (inputElement.value) {
                    inputElement.value.setValue('');
                }
                return;
            } else if (Type.value === FieldType.Date) {
                value.value = '';
                return;
            } else if (Type.value === FieldType.File) {
                value.value = '';
                visibleFileName.value = '';
                return;
            } else if (Type.value === FieldType.Select) {
                editableValue.value = props.multiple ? [] : '';
                pickedOptions.value = [];
                return;
            }
            editableValue.value = '';
        },
        getValue = () => editableValue.value,
        onKeyUp = ($event: KeyboardEvent) => {
            doLocalValidation();
            if (FieldTypesWithOptions.includes(Type.value)) {
                fetchOptions(editableValue.value);
                navigateOptions($event);

            } else if (Type.value === FieldType.Select) {
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
                if (Type.value === FieldType.Select) {
                    onBlurSelectInput();
                    return;
                }

                return onBlur();
            }
            if (Type.value === FieldType.Select) {
                onFocusSelectInput();
                return;
            }
            return onFocus();
        },
        onClickOption = (option: Option) => {
            if (option.disabled) return;

            if (props.multiple) {
                //@ts-ignore
                let k = getInValueOptionIndex(option, editableValue.value);
                if (k === -1) {
                    //@ts-ignore
                    editableValue.value.push(String(option.value));
                    pickedOptions.value.push(option);
                } else {
                    //@ts-ignore
                    editableValue.value.splice(k, 1);
                    pickedOptions.value.splice(k, 1);
                }
                turnOnSelectSearchMode();
                emits('selected-option', option);

            } else {
                focusedOptionIndex.value = -1;
                editableValue.value = String(option.value);
                pickedOptions.value.splice(0, 1, option);
                showOptions.value = false;
                searchMode.value = false;
                emits('selected-option', option);
            }
        },
        onKeyDown = ($event: KeyboardEvent) => emits('keydown', $event),
        onFocus = ($event: FocusEvent) => {
            hadFirstFocus.value = true;
            focusing.value = true;
            doLocalValidation();
            emits('focus', $event);
        },
        onBlur = ($event: Event) => {
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
                doLocalValidation();
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
        onNavigateSelectInput = (event) => {
            navigateOptions(event);
        },
        onSearchSelectInput = (query: string) => {
            searchString.value = query;
            fetchOptions(query);
        },
        onFocusSelectInput = () => {
            hadFirstFocus.value = true;
            focusing.value = true;

            if (!props.optionsResource && visibleOptions.value.length === 0) {
                showOptions.value = false;
                return;
            }

            showOptions.value = true;

            doLocalValidation();
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
            emits('change', $event);
        },
        onClick = ($event: Event) => {
            emits('click', $event);
        },
        onClickInfo = ($event: any) => emits('click-info', $event),
        onClickError = ($event: any) => emits('click-error', $event),
        onClickSubtract = () => {
            let step = props.step ?? 1;
            if (typeof step === 'string') step = parseFloat(step);
            if (!props.min || editableValue.value > props.min) {
                editableValue.value -= step;
            }
        },
        onClickIncrease = () => {
            let step = props.step ?? 1;
            if (typeof step === 'string') step = parseFloat(step);
            if (!props.max || editableValue.value < props.max) {
                editableValue.value += step;
            }
        },
        onClickSwitchEdition = ($event: any) => {
            if (editable.value) focus();
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
    });

    const hasCustomEditSlot = computed(() => props.editSlot !== '' && typeof Settings.customEditSlots[props.editSlot] !== 'undefined'),
        customEditSlot = computed(() => Settings.customEditSlots[props.editSlot]);

    onMounted(() => {
        optionsHaystack.value = prepareOptions(props.options);
        buildVisibleOptions('', false);
        updatePickedOption();

        if (Type.value === FieldType.Select) {
            if (props.multiple) {
                searchMode.value = true;
            }

            if (props.autoloadOptionsResource) {
                fetchOptions('', false);
            }
        }

        ready.value = true;
    });

    const computedMainComponent = computed(() => {
            if (BooleanFieldTypes.includes(Type.value)) return 'label';
            return 'div';
        }),
        computedMainAttrs = computed(() => {
            if (BooleanFieldTypes.includes(Type.value)) return {
                'for': Identifier,
            };
            return {};
        });

    const computedReadValue = computed(() => {
        switch (Type.value) {
            case FieldType.Select:
                return pickedOptions.value;

            case FieldType.Date:
                return getVisibleDateValue(value.value, computedDateReadFormat.value);

            case FieldType.File:
            case FieldType.Image:
                return value.value;

            default:
                return editableValue.value;
        }
    });
</script>

<template>
    <div :class="classes"
         :data-show-ui="showInfoUi"
         :data-labeled="!!!slots.label"
         ref="container"
    >
        <slot v-if="!!slots.label" name="label"></slot>
        <label v-if="!!!slots.label && computedLabel !== '' && !BooleanFieldTypes.includes(Type)"
               :for="Identifier"
               class="lkt-field--label"
               v-html="computedLabel"></label>

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
                    :type="Type" />

                <lkt-button
                    v-if="computedShowSubtractStep && fieldFeaturedButton === 'subtract'"
                    class="lkt-field--atn-btn"
                    icon="lkt-field-icon-minus"
                    @click="onClickSubtract"
                />
            </div>

            <div v-if="calculatedIcon" class="lkt-field--icon">
                <i :class="calculatedIcon" />
            </div>

            <component
                v-if="editable"
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
                    v-else-if="BooleanFieldTypes.includes(Type)"
                    v-model="editableValue"
                    :id="Identifier"
                    :name="name"
                    :type="Type"
                    :label="computedLabel"
                    :editable="editable"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    @focus="onFocusBooleanInput"
                    @blur="onBlurBooleanInput"
                />

                <color-input
                    v-else-if="Type === FieldType.Color"
                    v-model="editableValue" />

                <file-input
                    v-else-if="computedIsFile || computedIsImage"
                    v-model="value"
                    v-model:file-name="visibleFileName"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :resource="resource"
                    :resource-data="resourceData"
                    :name="name"
                    :placeholder="computedPlaceholder"
                    :accept="computedAccept"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :is-image="Type === FieldType.Image"
                    @change="onChange"
                />

                <date-input
                    v-else-if="computedIsDate"
                    v-model="value"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :lang="computedLang"
                    :name="name"
                />

                <select-input
                    v-else-if="Type === FieldType.Select"
                    ref="inputElement"
                    v-model="editableValue"
                    v-model:show-options="showOptions"
                    :searchable="searchable"
                    :search-mode="searchMode"
                    :multiple="multiple"
                    :options-icon="optionsIcon"
                    :option-slot="optionSlot"
                    :options-modal="optionsModal"
                    :options-download="optionsDownload"
                    :options-label-formatter="optionsLabelFormatter"
                    :options-modal-data="optionsModalData"
                    :picked-options="pickedOptions"
                    :editable="editable"
                    :focusing="focusing"
                    :search-placeholder="computedSearchPlaceholder"
                    :multiple-display-edition="multipleDisplayEdition"
                    @focus="onFocusSelectInput"
                    @blur="onBlurSelectInput"
                    @navigate="onNavigateSelectInput"
                    @search="onSearchSelectInput"
                />
                <calc-input
                    ref="inputElement"
                    v-else-if="Type === FieldType.Calc"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :name="name"
                    :editable="editable"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :options="optionsHaystack"
                    @focus="onFocusBooleanInput"
                    @blur="onBlurBooleanInput"
                />

                <search-input
                    ref="inputElement"
                    v-else-if="Type === FieldType.Search"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :name="name"
                    :editable="editable"
                    :focusing="focusing"
                    :had-first-focus="hadFirstFocus"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    :options-resource="optionsResource"
                    :container="container"
                    @focus="onFocusBooleanInput"
                    @blur="onBlurBooleanInput"
                />

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
                    :value="editableValue"
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
                    v-else-if="Type === FieldType.Html"
                    v-model="editableValue"
                    :id="Identifier"
                    :tabindex="tabindex"
                    :name="name"
                    :lang="computedLang"
                    :editable="editable"
                    :focusing="focusing"
                    :disabled="computedIsDisabled"
                    :readonly="readonly"
                    @focus="onFocus"
                    @blur="onBlur"
                />
            </component>

            <lkt-field-value
                v-if="!editable"
                :value="computedReadValue"
                :type="Type"
                :label="computedLabel"
                :title="readModeTitle"
                :file-name="visibleFileName"
                :value-slot="valueSlot"
                :empty-value-slot="emptyValueSlot"
                :slot-data="slotData"
                :download="calculatedDownload"
                :multiple="multiple"
                :multipleDisplay="multipleDisplay"
                :modal="modal"
                :modal-key="calculatedModalKey"
                :modal-data="modalData"
                :option-slot="optionSlot"
                :options-download="optionsDownload"
                :options-modal="optionsModal"
                :options-modal-data="optionsModalData"
                :options-icon="optionsIcon"
                :options-label-formatter="optionsLabelFormatter"
                :options-resource="optionsResource"
                :options-resource-data="optionsResourceData"
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
                    v-if="Type === FieldType.Number"
                    v-show="computedShowSubtractStepInNav"
                    class="lkt-field--info-btn"
                    icon="lkt-field-icon-minus"
                    @click="onClickSubtract"
                />
                <lkt-button
                    v-if="Type === FieldType.Number"
                    v-show="computedShowIncreaseStep"
                    class="lkt-field--info-btn"
                    icon="lkt-field-icon-plus"
                    @click="onClickIncrease"
                />

                <lkt-button
                    v-if="computedShowError"
                    :title="errorMessage"
                    class="lkt-field--info-btn"
                    icon="lkt-field-icon-warning"
                    @click="onClickError"
                />
                <lkt-button
                    v-if="computedShowInfo"
                    class="lkt-field--info-btn"
                    icon="lkt-field-icon-info"
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

                <password-button
                    v-if="Type === FieldType.Password"
                    v-show="computedShowPasswordRevealInNav"
                    v-model="showPasswordIcon"
                />

                <i18n-button
                    v-show="computedShowI18nInNav"
                    v-model="value"
                    :type="Type"
                />

                <edition-button
                    v-if="editable && computedShowSwitchEditionInNav"
                    v-model="editable"
                    @click="onClickSwitchEdition"
                />

                <lkt-button
                    v-if="customButtonText || customButtonClass"
                    :text="customButtonText"
                    class="lkt-field--info-btn lkt-field--custom-btn"
                    :icon="customButtonClass"
                />

                <dropdown-button
                    v-if="editable"
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
                    v-model:show-edition-check="editable"
                    @undo="doUndo"
                    @clear="doClear"
                />
            </div>
        </div>

        <lkt-field-validations
            v-if="editable && autoValidation && localValidationStatus.length > 0"
            :items="localValidationStatus"
            :stack="validationStack" />

        <lkt-tooltip
            v-if="editable && FieldTypesWithOptions.includes(Type)"
            ref="dropdownEl"
            class="lkt-field--dropdown"
            v-model="showOptions"
            :referrer="container"
            referrer-width
            location-x="left-corner"
            location-y="bottom"
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
                                  :modal="optionsModal"
                                  :modal-data="optionsModalData"
                                  :download="optionsDownload"
                                  :editable="editable"
                            />
                        </template>
                        <template v-else>
                            <dropdown-option
                                :option="option"
                                :option-slot="optionSlot"
                                :icon="optionsIcon"
                                :modal="optionsModal"
                                :modal-data="optionsModalData"
                                :download="optionsDownload"
                                :label-formatter="optionsLabelFormatter"
                                :editable="editable"
                            />
                        </template>
                    </li>
                </ul>
            </div>
        </lkt-tooltip>
    </div>
</template>