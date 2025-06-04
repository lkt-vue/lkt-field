import { LktObject, Option, OptionsConfig, ValidFieldValue } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: ValidFieldValue;
    searchable: boolean;
    searchMode: boolean;
    multiple: boolean;
    canTag: boolean;
    optionsConfig: OptionsConfig;
    optionSlot?: string;
    pickedOptions: Option[];
    showOptions: boolean;
    editable: boolean;
    focusing: boolean;
    searchPlaceholder: string;
    multipleDisplayEdition: string;
    searchString: string;
    prop?: LktObject;
    max?: number;
};
declare const _default: DefineComponent<__VLS_Props, {
    keepFocused: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    search: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    "update:showOptions": (...args: any[]) => void;
    "update:pickedOptions": (...args: any[]) => void;
    navigate: (...args: any[]) => void;
    tag: (...args: any[]) => void;
    untag: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSearch?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:showOptions"?: ((...args: any[]) => any) | undefined;
    "onUpdate:pickedOptions"?: ((...args: any[]) => any) | undefined;
    onNavigate?: ((...args: any[]) => any) | undefined;
    onTag?: ((...args: any[]) => any) | undefined;
    onUntag?: ((...args: any[]) => any) | undefined;
}>, {
    prop: LktObject;
    modelValue: ValidFieldValue;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    queryField: HTMLInputElement;
    selectButton: unknown;
}, any>;
export default _default;
