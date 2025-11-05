import { LktObject, OptionConfig, OptionsConfig, TooltipConfig, ValidOptionValue } from 'lkt-vue-kernel';

export interface RadioInputProps {
    modelValue: OptionConfig | ValidOptionValue | Array<OptionConfig|ValidOptionValue>
    searchable: boolean
    searchMode: boolean
    isLoading: boolean
    isDayOfWeek: boolean
    multiple: boolean
    options: any
    optionsConfig: OptionsConfig
    optionSlot?: string
    pickedOptions: OptionConfig[]
    showOptions: boolean
    editable: boolean
    focusing: boolean
    searchPlaceholder: string
    multipleDisplayEdition: string
    prop?: LktObject
    max?: number
    tooltip?: TooltipConfig
    optionValueType: string,
    events?: LktObject
    referrer?: any
}