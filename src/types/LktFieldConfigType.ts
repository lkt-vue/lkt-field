import { ValidFieldValue } from './ValidFieldValue';
import { FieldType } from '../enums/FieldType';
import { LktObject } from 'lkt-ts-interfaces';
import { Option } from '../instances/Option';
import { MultipleDisplayType } from '../enums/MultipleDisplayType';

export type LktFieldConfigType = {
    modelValue: ValidFieldValue
    type?: FieldType
    valid?: boolean
    placeholder?: string
    searchPlaceholder?: string
    label?: string
    labelIcon?: string
    labelIconAtEnd?: boolean
    name?: string
    autocomplete?: boolean
    disabled?: boolean|Function
    readonly?: boolean
    readMode?: boolean
    allowReadModeSwitch?: boolean
    tabindex?: number
    mandatory?: boolean
    showPassword?: boolean
    canClear?: boolean
    canUndo?: boolean
    canI18n?: boolean
    canStep?: boolean
    canTag?: boolean
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
    minNumbers?: number | string | undefined
    maxNumbers?: number | string | undefined
    minChars?: number | string | undefined
    maxChars?: number | string | undefined
    minUpperChars?: number | string | undefined
    maxUpperChars?: number | string | undefined
    minLowerChars?: number | string | undefined
    maxLowerChars?: number | string | undefined
    minSpecialChars?: number | string | undefined
    maxSpecialChars?: number | string | undefined
    checkEqualTo?: number | string | undefined
    featuredButton?: string
    infoButtonEllipsis?: boolean
    fileName?: string
    customButtonText?: string
    customButtonClass?: string
    options?: string | Option[]
    multiple?: boolean
    multipleDisplay?: MultipleDisplayType
    multipleDisplayEdition?: MultipleDisplayType
    searchable?: boolean
    autoloadOptionsResource?: boolean | 'feed'
    optionsDownload?: string | Function
    optionsModal?: string | Function
    optionsModalData?: LktObject | Function
    optionsIcon?: string | Function
    optionsLabelFormatter?: Function
    optionsResource?: string
    optionsResourceData?: LktObject
    icon?: string | Function
    download?: string | Function
    modal?: string | Function
    modalKey?: string | number | Function
    modalData?: LktObject
    prop?: LktObject
    itemType?: string
    optionValueType?: string
}