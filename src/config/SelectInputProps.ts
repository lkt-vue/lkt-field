import { LktObject, Option, OptionsConfig, TooltipConfig, ValidFieldValue } from 'lkt-vue-kernel';

export interface SelectInputProps {
    modelValue: ValidFieldValue
    searchable: boolean
    searchMode: boolean
    isLoading: boolean
    multiple: boolean
    canTag: boolean
    options: any
    optionsConfig: OptionsConfig
    optionSlot?: string
    pickedOptions: Option[]
    visibleOptions: Option[]
    showOptions: boolean
    editable: boolean
    focusing: boolean
    searchPlaceholder: string
    multipleDisplayEdition: string
    searchString: string
    prop?: LktObject
    max?: number
    tooltip?: TooltipConfig
    optionValueType: string,
    focusedOptionIndex: number,
    events?: LktObject
    referrer?: any
}