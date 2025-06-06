import { ItemSlotComponentConfig, LktObject, OptionConfig, OptionsConfig } from 'lkt-vue-kernel';

export interface DropdownOptionProps extends ItemSlotComponentConfig {
    item: OptionConfig
    data: {
        previewMode?: boolean,
        optionSlot?: string
        isTag?: boolean
        optionsConfig: OptionsConfig
        prop: LktObject
    }
}