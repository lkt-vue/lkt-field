<script lang="ts" setup>
    // Emits
    import { generateRandomString, isEmail as checkIsEmail, stripTags } from 'lkt-string-tools';
    import { computed, nextTick, onMounted, ref, useSlots, watch } from 'vue';
    import { createLktEvent } from 'lkt-events';
    import { Settings } from '../settings/Settings';
    import { LktObject } from 'lkt-ts-interfaces';
    //@ts-ignore
    import { httpCall, HTTPResponse } from 'lkt-http-client';
    import { __, currentLanguage } from 'lkt-i18n';
    import { FieldValidation } from 'lkt-field-validation';
    import UndoButton from '../components/buttons/UndoButton.vue';
    import ClearButton from '../components/buttons/ClearButton.vue';
    import PasswordButton from '../components/buttons/PasswordButton.vue';
    import EditionButton from '../components/buttons/EditionButton.vue';
    import EllipsisActionsButton from '../components/buttons/EllipsisActionsButton.vue';
    import I18nButton from '../components/buttons/I18nButton.vue';
    import { ValidFieldType } from '../types/ValidFieldType';
    import { FieldType } from '../enums/FieldType';
    import { calculateColorValue, decodeHexColor, getContrastFontColor } from '../functions/color-functions';
    import { ensureNumberBetween } from '../functions/numeric-functions';


    import suneditor from 'suneditor';
    import plugins from 'suneditor/src/plugins';

    // How to import language files (default: en)
    import * as lang from 'suneditor/src/lang';
    import { editorOptions } from '../constants/editor-constants';
    import { ValidFieldValue } from '../types/ValidFieldValue';
    import LktCalendar from '../components/calendar/LktCalendar.vue';
    import { date } from 'lkt-date-tools';
    import { Option } from '@/instances/Option';
    import {
        filterOptions, findOptionByValue,
        getInValueOptionIndex,
        optionIsActive,
        prepareOptions,
        receiveOptions,
    } from '@/functions/option-functions';
    import { isValidDateObject } from '@/functions/date-functions';
    import { FieldTypesWithOptions } from '@/constants/field-type-constants';
    import DropdownButton from '@/components/buttons/DropdownButton.vue';
    import DropdownOption from '@/components/dropdown/DropdownOption.vue';

    const emits = defineEmits(['update:modelValue', 'update:valid', 'keyup', 'keydown', 'focus', 'blur', 'click', 'click-info', 'click-error', 'validation', 'validating', 'options-loaded']);

    // Slots
    const slots = useSlots();

    // Props
    const props = withDefaults(defineProps<{
        modelValue: ValidFieldValue
        type: ValidFieldType
        valid?: boolean
        placeholder?: string
        searchPlaceholder?: string
        label?: string
        labelIcon?: string
        labelIconAtEnd?: boolean
        palette?: string
        name?: string
        autocomplete?: boolean
        disabled?: boolean
        readonly?: boolean
        readMode?: boolean
        allowReadModeSwitch?: boolean
        tabindex?: number
        mandatory?: boolean
        showPassword?: boolean
        canClear?: boolean
        canUndo?: boolean
        canI18n?: boolean
        mandatoryMessage?: string
        infoMessage?: string
        errorMessage?: string
        min?: number | string | undefined
        max?: number | string | undefined
        step?: number | string
        enableAutoNumberFix?: boolean
        emptyValueSlot?: string
        optionSlot?: string
        valueSlot?: string
        editSlot?: string
        slotData?: LktObject
        resource?: string
        resourceData?: LktObject
        validationResource?: string
        validationResourceData?: LktObject
        autoValidation?: boolean
        autoValidationType?: 'focus' | 'blur' | 'always'
        validationStack?: string
        minNumbers: number | string | undefined,
        maxNumbers: number | string | undefined,
        minChars: number | string | undefined,
        maxChars: number | string | undefined,
        minUpperChars: number | string | undefined,
        maxUpperChars: number | string | undefined,
        minLowerChars: number | string | undefined,
        maxLowerChars: number | string | undefined,
        minSpecialChars: number | string | undefined,
        maxSpecialChars: number | string | undefined,
        checkEqualTo: number | string | undefined,
        featuredButton?: string
        infoButtonEllipsis?: boolean
        fileName?: string
        customButtonText?: string
        customButtonClass?: string
        options?: Option[],
        multiple?: boolean,
        searchable?: boolean,
        autoloadOptionsResource?: boolean,
        optionsModal?: string,
        optionsIcon?: string,
        optionsResource?: string,
        optionsResourceData?: LktObject,

    }>(), {
        modelValue: '',
        type: 'text',
        placeholder: '',
        searchPlaceholder: '',
        label: '',
        palette: '',
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
        options: [],
        multiple: false,
        searchable: false,
        autoloadOptionsResource: false,
        optionsModal: '',
        optionsIcon: '',
        optionsResource: '',
        optionsResourceData: () => ({}),
    });

    // Constant data
    const Identifier = generateRandomString(16);

    const Type = ref(props.type);

    // Components refs
    const inputElement = ref(null);

    let baseValidationStatus: string[] = [];

    const decodeColor = (value: string) => {
        if (Type.value === FieldType.Color) {
            if ([0, 1].includes(value.length)) {
                pickedColorRed.value = 0;
                pickedColorGreen.value = 0;
                pickedColorBlue.value = 0;
                pickedColorAlpha.value = 255;

            } else if ([7, 9].includes(value.length)) {
                let decoded = decodeHexColor(value);

                pickedColorRed.value = decoded.r;
                pickedColorGreen.value = decoded.g;
                pickedColorBlue.value = decoded.b;
                pickedColorAlpha.value = decoded.a;
            }
        }
        return value;
    };

    // Reactive data
    const originalValue = ref(props.modelValue),
        pickedColorRed = ref(255),
        pickedColorGreen = ref(255),
        pickedColorBlue = ref(255),
        pickedColorAlpha = ref(255),
        pickedDate = ref(undefined),
        value = ref(decodeColor(props.modelValue)),
        isValid = ref(props.valid),
        showPasswordIcon = ref(false),
        focusing = ref(false),
        hadFirstBlur = ref(false),
        hadFirstFocus = ref(false),
        editor = ref(null),
        editorTimeout = ref(undefined),
        localValidationStatus = ref(baseValidationStatus),
        editable = ref(!props.readMode),
        originalFileName = ref(props.fileName),
        visibleFileName = ref(props.fileName);


    const dropdownEl = ref(<Element | ComponentPublicInstance | null>null);
    const container = ref(<Element | ComponentPublicInstance | null>null);
    const searchField = ref(<Element | ComponentPublicInstance | null>null);
    const selectButton = ref(<Element | ComponentPublicInstance | null>null);
    const optionList = ref(<Element | ComponentPublicInstance | null>null);
    const showOptions = ref(false);
    const isLoading = ref(false);
    const searchString = ref('');
    const focusedOptionIndex = ref(-1);
    const justFocusedTimeout = ref(undefined);
    const pickedOption = ref(undefined);
    const searchMode = ref(false);

    const computedLang = computed(() => currentLanguage.value);
    const computedDateReadFormat = computed(() => {
        computedLang.value; // Call in order to force prop to re-compute
        if (Settings.dateReadFormat) return Settings.dateReadFormat;
        if (Settings.langDateReadFormat[computedLang.value]) return Settings.langDateReadFormat[computedLang.value];
        if (Settings.defaultDateReadFormat) return Settings.defaultDateReadFormat;
        return 'Y-m-d';
    });

    const visibleDateValue = ref('');

    const assignEditableValue = () => {
        if (typeof value.value === 'object') return value.value[computedLang.value];
        return value.value;
    };

    const editableValue = ref(assignEditableValue());
    const originalEditableValue = ref(assignEditableValue());

    const optionsHaystack = ref(prepareOptions(props.options)),
        visibleOptions = ref([]);

    const updatePickedOption = () => {
        if (Type.value === FieldType.Text) {
            visibleOptions.value = filterOptions(optionsHaystack.value, editableValue.value);
            pickedOption.value = findOptionByValue(optionsHaystack.value, editableValue.value);
        }
        else if (Type.value === FieldType.Select) {
            visibleOptions.value = filterOptions(optionsHaystack.value, searchString.value);
            pickedOption.value = findOptionByValue(optionsHaystack.value, editableValue.value);
        }
    }

    const computedIsColor = computed(() => Type.value === FieldType.Color);
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
        amountOfIcons = computed(() => {
            let r = 0;

            if (computedShowUndoInNav.value) ++r;
            if (computedShowClearInNav.value) ++r;
            if (computedShowPasswordRevealInNav.value) ++r;
            if (computedShowI18nInNav.value) ++r;
            if (computedShowSwitchEditionInNav.value) ++r;
            if (visibleOptions.value.length > 0) ++r;
            if (props.customButtonText || props.customButtonClass) ++r;

            if (r > 0 && Type.value === FieldType.Textarea) return 1;
            if (r > 0 && Type.value === FieldType.Html) return 1;
            if (r > 0 && props.infoButtonEllipsis) return 1;

            return r;
        }),
        computedHasFeaturedButton = computed(() => {
            return computedShowI18n.value && props.featuredButton === 'i18n'
                || computedShowPasswordReveal.value && props.featuredButton === 'password';
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
            if (props.palette) r.push(`lkt-field--${props.palette}`);
            if (changed.value) r.push('is-changed');
            if (props.disabled) r.push('is-disabled');
            if (computedHasFeaturedButton.value) r.push('with-atn-btn');
            if (showInfoUi.value) r.push('with-info-btn');
            if (props.mandatory && editable.value) r.push('is-mandatory-field');
            if (focusing.value) r.push('has-focus');
            if (showOptions.value) r.push('show-options');

            if (Type.value !== FieldType.Range && props.autoValidation && hadFirstFocus.value && hadFirstBlur.value) {
                if (localValidationStatus.value.length > 0) r.push('is-invalid');
                else r.push('is-valid');
            }

            if ([FieldType.Textarea, FieldType.Html].includes(Type.value)) r.push('is-lg');
            if ([FieldType.Image].includes(Type.value)) r.push('is-xl');

            if (amountOfIcons.value > 0) r.push(`has-icons`, `has-icons-${amountOfIcons.value}`);
            r.push(editable.value ? 'is-editable' : 'is-read');

            if (Type.value !== FieldType.Range) {
                r.push(isValid.value ? 'is-valid' : 'is-error');
                r.push(isFilled.value ? 'is-filled' : 'is-empty');
            }

            return r.join(' ');
        }),
        readModeTitle = computed(() => {
            if (typeof editableValue.value === 'number') return editableValue.value.toString();
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

        computedShowUndo = computed(() => props.canUndo && changed.value && editable.value),
        computedShowClear = computed(() => props.canClear && isFilled.value && editable.value),
        computedShowI18n = computed(() => props.canI18n && typeof value.value === 'object' && editable.value),
        computedShowPasswordReveal = computed(() => Type.value === FieldType.Password && props.showPassword && isFilled.value && editable.value),

        computedShowUndoInNav = computed(() => computedShowUndo.value && !props.infoButtonEllipsis),
        computedShowClearInNav = computed(() => computedShowClear.value && !props.infoButtonEllipsis),
        computedShowPasswordRevealInNav = computed(() => computedShowPasswordReveal.value && !props.infoButtonEllipsis && props.featuredButton !== 'password'),
        computedShowI18nInNav = computed(() => computedShowI18n.value && !props.infoButtonEllipsis && props.featuredButton !== 'i18n'),
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
        value.value = v;
        if (Type.value !== FieldType.Date) {
            editableValue.value = assignEditableValue();
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
        if (Type.value === FieldType.Date) {
            let date = new Date(v);

            if (isValidDateObject(date)) {
                pickedDate.value = date;
            } else {
                value.value = '';
                return;
            }

        }
        emits('update:modelValue', v);
        doRemoteValidation();
        doLocalValidation();
    }, { deep: true });

    watch(isValid, (v) => {
        emits('update:valid', v);
    });
    watch(pickedDate, (v) => {
        if (typeof v === 'undefined') {
            value.value = '';

        } else {
            value.value = date('Y-m-d', v);
        }
        setVisibleDateValue();
    }, { deep: true });

    watch(() => props.options, (v) => {
        optionsHaystack.value = prepareOptions(v);
        if (Type.value === FieldType.Select) {
            buildVisibleOptions(searchString.value, false);
        } else {
            buildVisibleOptions(editableValue.value, false);
        }
    })

    const setVisibleDateValue = () => {
        if (isValidDateObject(pickedDate.value)) {
            visibleDateValue.value = date(computedDateReadFormat.value, pickedDate.value);

        } else {
            visibleDateValue.value = '';
        }
    };

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

            if (Type.value === FieldType.Email && props.mandatory && editableValue.value === '') {
                localValidationStatus.value.push(FieldValidation.createEmpty('ko'));

            } else if (Type.value === FieldType.Email && !checkIsEmail(editableValue.value)) {
                localValidationStatus.value.push(FieldValidation.createEmail('ko'));
            }

            if (Type.value !== FieldType.Number) {
                if (typeof props.minNumbers !== 'undefined') {
                    let constraint = parseInt(props.minNumbers),
                        val = editableValue.value.replace(/\D+/g, '');

                    if (val.length < constraint) {
                        localValidationStatus.value.push(FieldValidation.createMinNumbers(constraint, 'ko'));
                    }
                }

                if (typeof props.maxNumbers !== 'undefined') {
                    let constraint = parseInt(props.maxNumbers),
                        val = editableValue.value.replace(/\D+/g, '');

                    if (val.length > constraint) {
                        localValidationStatus.value.push(FieldValidation.createMaxNumbers(constraint, 'ko'));
                    }
                }

                if (typeof props.minUpperChars !== 'undefined') {
                    let constraint = parseInt(props.minUpperChars),
                        val = editableValue.value.replace(/[^A-Z]+/g, '');

                    if (val.length < constraint) {
                        localValidationStatus.value.push(FieldValidation.createMinUpperChars(constraint, 'ko'));
                    }
                }

                if (typeof props.maxUpperChars !== 'undefined') {
                    let constraint = parseInt(props.maxUpperChars),
                        val = editableValue.value.replace(/[^A-Z]+/g, '');

                    if (val.length > constraint) {
                        localValidationStatus.value.push(FieldValidation.createMaxUpperChars(constraint, 'ko'));
                    }
                }

                if (typeof props.minLowerChars !== 'undefined') {
                    let constraint = parseInt(props.minLowerChars),
                        val = editableValue.value.replace(/[A-Z]+/g, '');

                    if (val.length < constraint) {
                        localValidationStatus.value.push(FieldValidation.createMinLowerChars(constraint, 'ko'));
                    }
                }

                if (typeof props.maxLowerChars !== 'undefined') {
                    let constraint = parseInt(props.maxLowerChars),
                        val = editableValue.value.replace(/[A-Z]+/g, '');

                    if (val.length > constraint) {
                        localValidationStatus.value.push(FieldValidation.createMaxLowerChars(constraint, 'ko'));
                    }
                }

                if (typeof props.minChars !== 'undefined') {
                    let constraint = parseInt(props.minChars),
                        val = editableValue.value.replace(/\d+/g, '');

                    if (val.length < constraint) {
                        localValidationStatus.value.push(FieldValidation.createMinChars(constraint, 'ko'));
                    }
                }

                if (typeof props.maxChars !== 'undefined') {
                    let constraint = parseInt(props.maxChars),
                        val = editableValue.value.replace(/\d+/g, '');

                    if (val.length > constraint) {
                        localValidationStatus.value.push(FieldValidation.createMaxChars(constraint, 'ko'));
                    }
                }

                if (typeof props.minSpecialChars !== 'undefined') {
                    let constraint = parseInt(props.minSpecialChars),
                        val = editableValue.value.replace(/\d+/g, '').replace(/[a-zA-Z]+/g, '');

                    if (val.length < constraint) {
                        localValidationStatus.value.push(FieldValidation.createMinSpecialChars(constraint, 'ko'));
                    }
                }

                if (typeof props.maxSpecialChars !== 'undefined') {
                    let constraint = parseInt(props.maxSpecialChars),
                        val = editableValue.value.replace(/\d+/g, '').replace(/[a-zA-Z]+/g, '');

                    if (val.length > constraint) {
                        localValidationStatus.value.push(FieldValidation.createMaxSpecialChars(constraint, 'ko'));
                    }
                }
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
            if (!editable.value && !props.autoloadOptionsResource) return;
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
            if (props.optionsResource !== '') {
                isLoading.value = true;
                if (Settings.searchKeyForResource !== '') props.optionsResourceData[Settings.searchKeyForResource] = query;
                const results: HTTPResponse = await httpCall(props.optionsResource, props.optionsResourceData);
                const isValidData = Array.isArray(results.data) && results.data.length > 0;
                if (isValidData) {
                    optionsHaystack.value = receiveOptions(optionsHaystack.value, results.data);
                }
                buildVisibleOptions(query, ableToShowOptions);
                if (isValidData) {
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
                    let el = optionList.value.querySelector('[data-index="' + focusedOptionIndex.value + '"]');
                    if (el) el.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});

                } else if (key === 'ArrowUp') {
                    --focusedOptionIndex.value;
                    if (focusedOptionIndex.value < 0) focusedOptionIndex.value = amountOfOptions;

                    let el = optionList.value.querySelector('[data-index="' + focusedOptionIndex.value + '"]');
                    if (el) el.scrollIntoView({behavior: "instant", block: "start", inline: "nearest"});

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
                if (editor.value) {
                    editor.value.setContents(originalEditableValue.value);
                }
                return;
            } else if (Type.value === FieldType.Date) {
                pickedDate.value = new Date(originalValue.value);
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
                if (editor.value) {
                    editor.value.setContents('');
                }
                return;
            } else if (Type.value === FieldType.Date) {
                pickedDate.value = undefined;
                value.value = '';
                return;
            } else if (Type.value === FieldType.File) {
                value.value = '';
                visibleFileName.value = '';
                return;
            }
            editableValue.value = '';
        },
        getValue = () => editableValue.value,
        onKeyUp = ($event: KeyboardEvent) => {
            doLocalValidation();
            if ([FieldType.Text, FieldType.Select].includes(Type.value)) {
                fetchOptions(editableValue.value);
                navigateOptions($event);

            } else if (Type.value === FieldType.Select) {
                // fetchOptions(searchString.value);
                navigateOptions($event);
            }
            emits('keyup', $event, createLktEvent(Identifier, { value: editableValue.value }));
        },
        onSearchFieldKeyUp = ($event: KeyboardEvent) => {
            if (['ArrowDown', 'ArrowUp', 'Enter'].includes($event.key)) {
                navigateOptions($event);
            } else {
                fetchOptions(searchString.value);
            }
        },
        onSearchFieldBlur = ($event: KeyboardEvent) => {
            setTimeout(() => {
                showOptions.value = false;
                searchMode.value = false;
            }, 100);
            onBlur();
        },
        onClickSelect = () => {
            if (!props.optionsResource && visibleOptions.value.length === 0) {
                showOptions.value = false;
                return;
            }
            if (typeof justFocusedTimeout.value === 'undefined') {
                showOptions.value = !showOptions.value;
            }
        },
        turnOnSelectSearchMode = () => {
            focusing.value = true;
            searchMode.value = true;

            nextTick(() => {
                if (searchField.value) {
                    //@ts-ignore
                    searchField.value.focus();
                }
            });
        },
        onClickSelectButton = () => {
            if (!props.searchable) return onClickSelect();
            turnOnSelectSearchMode();
        },
        onClickDropdownButton = () => {
            if (showOptions.value) {
                if (Type.value === FieldType.Select) {
                    onBlur();
                    return onClickSelectButton();
                }

                return onBlur();
            }
            if (Type.value === FieldType.Select) {
                onFocus();
                return onClickSelectButton();
            }
            return onFocus();
        },
        onClickOption = (option: Option) => {
            if (props.multiple) {
                //@ts-ignore
                let k = getInValueOptionIndex(option);
                if (k === -1) {
                    //@ts-ignore
                    editableValue.value.push(String(option.value));
                } else {
                    //@ts-ignore
                    editableValue.value.splice(k, 1);
                }
            } else {
                focusedOptionIndex.value = -1;
                editableValue.value = String(option.value);
                pickedOption.value = option;
                showOptions.value = false;
                searchMode.value = false;
            }
        },
        onKeyDown = ($event: KeyboardEvent) => emits('keydown', $event, createLktEvent(Identifier, { value: editableValue.value })),
        onFocus = ($event: FocusEvent) => {
            if (Type.value === FieldType.Select) {
                if (!focusing.value) {
                    justFocusedTimeout.value = setTimeout(() => {
                        clearTimeout(justFocusedTimeout.value);
                        justFocusedTimeout.value =  undefined;
                    }, 200);
                } else {
                    clearTimeout(justFocusedTimeout.value);
                }

                if (props.searchable && !searchMode.value) {
                    turnOnSelectSearchMode();
                }
            }
            hadFirstFocus.value = true;
            focusing.value = true;
            doLocalValidation();

            showOptions.value = (visibleOptions.value.length > 0 || props.optionsResource !== '') && FieldTypesWithOptions.includes(Type.value);
            if (showOptions.value && Type.value === FieldType.Select) {
                fetchOptions(searchString.value, false);
            }
            emits('focus', $event, createLktEvent(Identifier, { value: editableValue.value }));
        },
        onFocusSelectButton = ($event: FocusEvent) => {
            if ($event) {
                onFocus($event);
                onClickSelectButton();
            }
        },
        onBlur = ($event: Event) => {
            hadFirstBlur.value = true;
            doLocalValidation();
            focusedOptionIndex.value = -1;
            setTimeout(() => {
                if (props.searchable && searchMode.value) {
                    return;
                }
                showOptions.value = false;
                focusing.value = false
            }, 100)
            emits('blur', $event, createLktEvent(Identifier, { value: editableValue.value }));
        },
        onChange = ($event: any) => {
            if (computedIsFile.value || computedIsImage.value) {
                let input = $event.target;
                // @ts-ignore
                if (input.files && input.files[0]) {
                    visibleFileName.value = input.files[0].name;
                    const reader = new FileReader();
                    reader.onload = (event: ProgressEvent) => {
                        // @ts-ignore
                        value.value = event.target.result;
                        if (props.resource) {
                            uploading.value = true;
                            emits('uploading');
                            let params = JSON.parse(JSON.stringify(props.resourceData));
                            // @ts-ignore
                            params.files = input.files[0];

                            httpCall(props.resource, params).then((r: HTTPResponse) => {
                                // @todo check with uploaded file
                                // @ts-ignore
                                value.value = r.data;
                                uploading.value = false;
                                emits('upload-success', r);
                            }).catch(r => {
                                uploading.value = false;
                                emits('upload-error', r);
                            });
                        }
                    };
                    // @ts-ignore
                    reader.readAsDataURL(input.files[0]);
                }
            }
        },
        onClick = ($event: Event) => {
            emits('click', $event, createLktEvent(Identifier, { value: editableValue.value }));
        },
        onClickInfo = ($event: any) => emits('click-info', $event, createLktEvent(Identifier, { value: editableValue.value })),
        onClickError = ($event: any) => emits('click-error', $event, createLktEvent(Identifier, { value: editableValue.value })),
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

    const hasCustomValueSlot = computed(() => {
            if (!(Type.value === FieldType.Text && optionsHaystack.value.length > 0)) {
                if (editableValue.value === '' || (Type.value === 'date' && visibleDateValue.value === '')) {
                    return (props.emptyValueSlot !== '' && typeof Settings.customValueSlots[props.emptyValueSlot] !== 'undefined') || (Settings.defaultEmptyValueSlot && typeof Settings.defaultEmptyValueSlot !== 'undefined');
                }

            }
            return props.valueSlot !== '' && typeof Settings.customValueSlots[props.valueSlot] !== 'undefined';
        }),
        customValueSlot = computed(() => {
            if (!(Type.value === FieldType.Text && optionsHaystack.value.length > 0)) {
                if (editableValue.value === '' || (Type.value === 'date' && visibleDateValue.value === '')) {
                    return Settings.customValueSlots[props.emptyValueSlot] ?? Settings.defaultEmptyValueSlot;
                }
            }

            return Settings.customValueSlots[props.valueSlot];
        }),
        hasCustomEditSlot = computed(() => props.editSlot !== '' && typeof Settings.customEditSlots[props.editSlot] !== 'undefined'),
        customEditSlot = computed(() => Settings.customEditSlots[props.editSlot]);

    const optionSlot = computed(() => {
        if (!props.optionSlot) return undefined;
        if (typeof Settings.optionSlots[props.optionSlot] === 'undefined') return undefined;
        return Settings.optionSlots[props.optionSlot];
    })

    const computedComplementaryColor = computed(() => {
        if (!computedIsColor.value) return '';
        return getContrastFontColor(decodeHexColor(editableValue.value));
    });

    const onRgbaChanged = ($event) => {
        editableValue.value = calculateColorValue(
            pickedColorRed.value,
            pickedColorGreen.value,
            pickedColorBlue.value,
            pickedColorAlpha.value,
        );
    };

    const onColorChange = ($event) => {
        decodeColor(editableValue.value);
    };

    watch(pickedColorRed, onRgbaChanged);
    watch(pickedColorGreen, onRgbaChanged);
    watch(pickedColorBlue, onRgbaChanged);
    watch(pickedColorAlpha, onRgbaChanged);

    const computedColorStyles = computed(() => {
        if (!computedIsColor.value) return {};

        if (editableValue.value === '' || editableValue.value === '#') {
            return {};
        }

        return {
            background: editableValue.value,
            '--lkt-btn-bg': editableValue.value,

            color: computedComplementaryColor.value,
            '--lkt-btn-color': computedComplementaryColor.value,
        };
    });

    const computedColorStylesHex = computed(() => {
        if (!computedIsColor.value) return {};

        if (editableValue.value === '' || editableValue.value === '#') {
            return {};
        }

        return {
            '--lkt-field-bg-input': editableValue.value,
            '--lkt-field-color': computedComplementaryColor.value,
        };
    });

    onMounted(() => {
        updatePickedOption();

        if (Type.value === FieldType.Date) {
            pickedDate.value = new Date(value.value);
            setVisibleDateValue();

        } else if (Type.value === FieldType.Html) {

            const updateValueFromEditor = (content) => {
                if (editorTimeout.value) clearTimeout(editorTimeout.value);

                editorTimeout.value = setTimeout(() => {
                    let strippedContent = stripTags(content);
                    if (strippedContent === '') editableValue.value = '';
                    else editableValue.value = content;
                }, 100);
            };

            let options = {
                lang: lang[computedLang.value] ? lang[computedLang.value] : lang.en,
                plugins: {
                    ...plugins,
                },
                ...editorOptions,
            };

            editor.value = suneditor.create(Identifier, options);

            editor.value.onChange = (content) => {
                updateValueFromEditor(content);

                if (props.disabled) editor.value.disabled();
                else editor.value.enabled();
            };

            editor.value.onKeyUp = (event, core) => {
                updateValueFromEditor(core.getContents());
            };

            editor.value.onBlur = () => {
                focusing.value = false;
            };

            editor.value.onClick = () => {
                focusing.value = true;
            };
        }
    });
</script>

<template>
    <div v-bind:class="classes"
         v-bind:data-show-ui="showInfoUi"
         v-bind:data-labeled="!!!slots.label"
         ref="container"
    >
        <slot v-if="!!slots.label" name="label"></slot>
        <label v-if="!!!slots.label && computedLabel !== ''" :for="Identifier" v-html="computedLabel"></label>

        <div class="lkt-field-content">

            <div v-if="computedHasFeaturedButton" class="lkt-field--atn-btn-container">
                <password-button
                    v-if="featuredButton === 'password' && computedShowPasswordReveal"
                    v-model="showPasswordIcon"
                    is-featured
                />

                <i18n-button v-if="computedShowI18n && featuredButton === 'i18n' && canI18n" v-model="value" is-featured
                             :type="Type" />
            </div>

            <div class="lkt-field-main" v-if="editable">
                <template v-if="editable">
                    <template v-if="slots['edit']">
                        <div v-on:click="onClick">
                            <slot name="edit" v-bind:value="value" :title="readModeTitle" :data="slotData"></slot>
                        </div>
                    </template>
                    <div v-else-if="hasCustomEditSlot" v-on:click="onClick">
                        <component v-bind:is="customEditSlot"
                                   v-bind:value="value" :title="readModeTitle" :data="slotData"></component>
                    </div>

                    <template v-else-if="computedIsColor">
                        <lkt-button
                            class="lkt-field--toggle-button"
                            :style="computedColorStyles"
                            :text="editableValue"
                            tooltip
                            tooltip-class="lkt-field-color--alpha--tooltip"
                            tooltip-location-y="bottom"
                            tooltip-location-x="left-corner"
                        >
                            <template #tooltip="{doClose}">
                                <div class="lkt-grid-1">
                                    <div class="lkt-field-color--tooltip--rgba-container">
                                        <div class="lkt-field-color--tooltip--hex-input-container">
                                            <label class="like-lkt-field-label">HEX</label>
                                            <lkt-field
                                                v-model="editableValue"
                                                :style="computedColorStylesHex"
                                                @change="onColorChange"
                                            />
                                        </div>
                                    </div>
                                    <div class="lkt-field-color--tooltip--rgba-container">
                                        <div class="lkt-field-color--tooltip--numeric-input-container">
                                            <label class="like-lkt-field-label">R</label>
                                            <lkt-field
                                                v-model="pickedColorRed"
                                                type="number"
                                                min="0"
                                                max="255"
                                                step="1"
                                            />
                                        </div>
                                        <lkt-field
                                            class="color-range color-range--red"
                                            v-model="pickedColorRed"
                                            type="range"
                                            min="0"
                                            max="255"
                                            step="1"
                                        />
                                    </div>

                                    <div class="lkt-field-color--tooltip--rgba-container">
                                        <div class="lkt-field-color--tooltip--numeric-input-container">
                                            <label class="like-lkt-field-label">G</label>
                                            <lkt-field
                                                v-model="pickedColorGreen"
                                                type="number"
                                                min="0"
                                                max="255"
                                                step="1"
                                            />
                                        </div>
                                        <lkt-field
                                            class="color-range color-range--green"
                                            v-model="pickedColorGreen"
                                            type="range"
                                            min="0"
                                            max="255"
                                            step="1"
                                        />
                                    </div>

                                    <div class="lkt-field-color--tooltip--rgba-container">
                                        <div class="lkt-field-color--tooltip--numeric-input-container">
                                            <label class="like-lkt-field-label">B</label>
                                            <lkt-field
                                                v-model="pickedColorBlue"
                                                type="number"
                                                min="0"
                                                max="255"
                                                step="1"
                                            />
                                        </div>
                                        <lkt-field
                                            class="color-range color-range--blue"
                                            v-model="pickedColorBlue"
                                            type="range"
                                            min="0"
                                            max="255"
                                            step="1"
                                        />
                                    </div>

                                    <div class="lkt-field-color--tooltip--rgba-container">
                                        <div class="lkt-field-color--tooltip--numeric-input-container">
                                            <label class="like-lkt-field-label">A</label>
                                            <lkt-field
                                                v-model="pickedColorAlpha"
                                                type="number"
                                                min="0"
                                                max="255"
                                                step="1"
                                            />
                                        </div>
                                        <lkt-field
                                            class="color-range color-range--alpha"
                                            v-model="pickedColorAlpha"
                                            type="range"
                                            min="0"
                                            max="255"
                                            step="1"
                                        />
                                    </div>
                                </div>
                            </template>
                        </lkt-button>
                    </template>

                    <template v-else-if="computedIsFile || computedIsImage">
                        <input type="file"
                               v-bind:ref="(el:any) => inputElement = el"
                               v-bind:name="name"
                               v-bind:id="Identifier"
                               v-bind:disabled="disabled || !editable"
                               v-bind:readonly="readonly || !editable"
                               v-bind:placeholder="placeholder"
                               v-bind:accept="computedAccept"
                               v-on:change="onChange"
                        >

                        <lkt-button
                            class="lkt-field--toggle-button"
                            :click-ref="inputElement"
                            :text="computedIsFile ? visibleFileName : ''"
                        >
                            <lkt-image
                                v-if="computedIsImage"
                                :src="value"
                                class="lkt-field--image-cover"
                            />
                            <lkt-image
                                v-if="computedIsImage"
                                :src="value"
                                class="lkt-field--image-main"
                            />
                        </lkt-button>
                    </template>

                    <template v-else-if="computedIsDate">
                        <lkt-button
                            class="lkt-field--toggle-button"
                            :text="visibleDateValue"
                            tooltip
                            tooltip-class="lkt-field--date--tooltip"
                            tooltip-location-y="bottom"
                            tooltip-location-x="left-corner"
                        >
                            <template #tooltip="{doClose}">
                                <lkt-calendar v-model="pickedDate" />
                            </template>
                        </lkt-button>
                    </template>

                    <template v-else-if="Type === FieldType.Select">

                        <lkt-tag
                            v-if="searchable && searchMode && pickedOption"
                            :text="optionSlot ? '' : pickedOption?.label"
                        >
                            <template v-if="optionSlot">
                                <component
                                    :is="optionSlot"
                                    :option="pickedOption"
                                />
                            </template>
                        </lkt-tag>

                        <input
                            v-show="searchable && searchMode"
                            v-model="searchString"
                            ref="searchField"
                            :value="searchString"
                            :placeholder="computedSearchPlaceholder"
                            type="text"
                            tabindex="-1"
                            autocomplete="off"
                            @keyup="onSearchFieldKeyUp"
                            @blur="onSearchFieldBlur"
                            @click="onClickSelect"
                        />

                        <lkt-button
                            ref="selectButton"
                            v-show="!searchable || !searchMode"
                            class="lkt-field--toggle-button lkt-field--select-button"
                            :text="pickedOption ? '' : 'Select item'"
                            v-model:open-tooltip="showOptions"
                            @keyup="onKeyUp"
                            @blur="onBlur"
                            @focus="onFocusSelectButton"
                            @click="onClickSelectButton"
                        >
                            <template v-if="optionSlot && pickedOption">
                                <component
                                    :is="optionSlot"
                                    :option="pickedOption"
                                />
                            </template>
                            <dropdown-option
                                v-else-if="pickedOption"
                                :option="pickedOption"
                                :icon="optionsIcon"
                                :modal="optionsModal"
                                :editable="editable"
                            />
                        </lkt-button>
                    </template>

                    <input
                        v-else-if="computedInputElement === 'input'"
                        v-model="editableValue"
                        :ref="(el:any) => inputElement = el"
                        :value="editableValue"
                        :type="computedInputType"
                        :name="name"
                        :id="Identifier"
                        :disabled="disabled"
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
                        :disabled="disabled"
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
                    <div
                        v-else-if="computedInputElement === 'div'"
                        v-html="editableValue"
                        :ref="(el:any) => inputElement = el"
                        :id="Identifier"
                        :tabindex="tabindex"
                        v-on:keyup="onKeyUp"
                        v-on:keydown="onKeyDown"
                        v-on:focus="onFocus"
                        v-on:blur="onBlur"
                        v-on:click="onClick"
                        v-on:change="onChange"
                    />
                </template>
            </div>

            <div v-if="!editable" class="lkt-field--read" v-on:click="onClick">
                <template v-if="slots['value']">
                    <slot
                        name="value"
                        v-bind:value="value"
                        :title="readModeTitle"
                        :data="slotData" />
                </template>
                <component
                    v-else-if="hasCustomValueSlot"
                    v-bind:is="customValueSlot"
                    v-bind:value="value"
                    :title="readModeTitle"
                    :data="slotData" />

                <template v-else>
                    <template v-if="computedIsFile || computedIsImage">
                        <div class="lkt-field-main">
                            <lkt-button
                                class="lkt-field--toggle-button"
                                :text="computedIsFile ? visibleFileName : ''"
                            >
                                <lkt-image
                                    v-if="computedIsImage"
                                    :src="value"
                                    class="lkt-field--image-cover"
                                />
                                <lkt-image
                                    v-if="computedIsImage"
                                    :src="value"
                                    class="lkt-field--image-main"
                                />
                            </lkt-button>
                        </div>
                    </template>
                    <lkt-anchor
                        v-else-if="Type === FieldType.Email"
                        class="lkt-field--read-value"
                        :title="readModeTitle"
                        :to="'mail:' + value">{{ value }}
                    </lkt-anchor>
                    <lkt-anchor
                        v-else-if="Type === FieldType.Tel"
                        class="lkt-field--read-value"
                        :title="readModeTitle"
                        :to="'tel:' + value">{{ value }}
                    </lkt-anchor>
                    <div
                        v-else-if="Type === FieldType.Date"
                        class="lkt-field--read-value"
                        v-html="visibleDateValue" :title="readModeTitle"></div>
                    <div
                        v-else-if="Type === FieldType.Select && optionSlot"
                        class="lkt-field--read-value"
                         :title="readModeTitle">
                        <component
                            :is="optionSlot"
                            :option="pickedOption"
                        />
                    </div>
                    <div
                        v-else-if="Type === FieldType.Select && pickedOption"
                        class="lkt-field--read-value"
                         :title="readModeTitle">
                        <dropdown-option
                            :option="pickedOption"
                            :icon="optionsIcon"
                            :modal="optionsModal"
                            :editable="editable"
                        />
                    </div>
                    <div
                        v-else
                        class="lkt-field--read-value"
                        v-html="value" :title="readModeTitle"></div>
                </template>
            </div>

            <div v-show="showInfoUi" class="lkt-field--info-nav">
                <undo-button v-show="computedShowUndoInNav" @click="doUndo" />
                <clear-button v-show="computedShowClearInNav" @click="doClear" />

                <lkt-button
                    v-show="computedShowError"
                    :title="errorMessage"
                    class="lkt-field--info-btn"
                    icon="lkt-field-icon-warning"
                    @click="onClickError"
                />
                <lkt-button
                    v-show="computedShowInfo"
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
                    v-show="computedShowPasswordRevealInNav"
                    v-model="showPasswordIcon"
                />

                <i18n-button
                    v-show="computedShowI18nInNav"
                    v-model="value"
                    :type="Type"
                />

                <edition-button
                    v-show="computedShowSwitchEditionInNav"
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
                    v-if="editable && (visibleOptions.length > 0 || optionsHaystack.length > 0)"
                    @click="onClickDropdownButton"
                />

                <ellipsis-actions-button
                    v-show="infoButtonEllipsis"
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
            v-if="autoValidation && localValidationStatus.length > 0"
            :items="localValidationStatus"
            :stack="validationStack" :min="min" :max="max" />

        <lkt-tooltip
            v-if="editable"
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
                        }"
                        :data-index="i"
                        @click="() => onClickOption(option)">
                        <template v-if="slots.option">
                            <slot name="option"
                                  :option="option"
                                  :data="slotData"
                            />
                        </template>
                        <component
                            v-else-if="optionSlot"
                            :is="optionSlot"
                            :option="option" />
                        <template v-else>
                            <dropdown-option
                                :option="option"
                                :icon="optionsIcon"
                                :modal="optionsModal"
                                :editable="editable"
                            />
                        </template>
                    </li>
                </ul>
            </div>
        </lkt-tooltip>
    </div>
</template>