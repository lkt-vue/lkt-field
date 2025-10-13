import { FieldType, ItemSlotComponentConfig, LktObject, OptionConfig, OptionsConfig, ValidOptionValue } from 'lkt-vue-kernel';
export interface DropdownOptionProps extends ItemSlotComponentConfig {
    item: OptionConfig;
    data: {
        optionsConfig: OptionsConfig;
        prop: LktObject;
        previewMode?: boolean;
        optionSlot?: string;
        isTag?: boolean;
        query?: string;
        editableValue?: OptionConfig | ValidOptionValue | Array<OptionConfig | ValidOptionValue>;
        multiple?: boolean;
        fieldType?: FieldType;
        focusedOptionIndex?: number;
    };
}
