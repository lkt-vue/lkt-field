import {
    LktObject,
    Option,
    OptionConfig,
    OptionsConfig,
    TooltipConfig,
    ValidOptionValue,
} from 'lkt-vue-kernel';

export interface SelectInputProps {
    modelValue: OptionConfig | ValidOptionValue | Array<OptionConfig|ValidOptionValue>
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
    events?: LktObject
    referrer?: any
    autoLoading?: boolean
}