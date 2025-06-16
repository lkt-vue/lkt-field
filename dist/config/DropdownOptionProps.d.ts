import { ItemSlotComponentConfig, LktObject, OptionConfig, OptionsConfig, ValidOptionValue } from 'lkt-vue-kernel';
export interface DropdownOptionProps extends ItemSlotComponentConfig {
    item: OptionConfig;
    data: {
        previewMode?: boolean;
        optionSlot?: string;
        isTag?: boolean;
        optionsConfig: OptionsConfig;
        prop: LktObject;
        query?: string;
        editableValue?: OptionConfig | ValidOptionValue | Array<OptionConfig | ValidOptionValue>;
        multiple?: boolean;
        focusedOptionIndex?: number;
    };
}
