import { ValidFieldValue } from '../types/ValidFieldValue';
import { Option } from '../instances/Option';
import { LktObject } from 'lkt-ts-interfaces';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: ValidFieldValue;
    searchable: boolean;
    searchMode: boolean;
    multiple: boolean;
    canTag: boolean;
    optionsIcon: string | Function;
    optionSlot?: string;
    optionsModal: string | Function;
    optionsDownload: string | Function;
    optionsLabelFormatter?: Function;
    optionsModalData: LktObject;
    pickedOptions: Option[];
    showOptions: boolean;
    editable: boolean;
    focusing: boolean;
    searchPlaceholder: string;
    multipleDisplayEdition: string;
};
declare const _default: DefineComponent<__VLS_Props, {
    keepFocused: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    search: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    "update:showOptions": (...args: any[]) => void;
    navigate: (...args: any[]) => void;
    tag: (...args: any[]) => void;
    untag: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSearch?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onUpdate:showOptions"?: ((...args: any[]) => any) | undefined;
    onNavigate?: ((...args: any[]) => any) | undefined;
    onTag?: ((...args: any[]) => any) | undefined;
    onUntag?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: ValidFieldValue;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    queryField: HTMLInputElement;
    selectButton: unknown;
}, any>;
export default _default;
