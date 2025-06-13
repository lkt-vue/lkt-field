import { ValidFieldValue, LktObject } from 'lkt-vue-kernel';
import { SelectInputProps } from '../config/SelectInputProps.d.ts';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<SelectInputProps, {
    doClear: () => void;
    doUndo: (originalValue: ValidFieldValue) => void;
    keepFocused: () => void;
    switchShowOptions: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "update:options": (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    "update:showOptions": (...args: any[]) => void;
    "update:pickedOptions": (...args: any[]) => void;
    loaded: (...args: any[]) => void;
    "autoload-start": (...args: any[]) => void;
    "autoload-end": (...args: any[]) => void;
}, string, PublicProps, Readonly<SelectInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:options"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:showOptions"?: ((...args: any[]) => any) | undefined;
    "onUpdate:pickedOptions"?: ((...args: any[]) => any) | undefined;
    onLoaded?: ((...args: any[]) => any) | undefined;
    "onAutoload-start"?: ((...args: any[]) => any) | undefined;
    "onAutoload-end"?: ((...args: any[]) => any) | undefined;
}>, {
    prop: LktObject;
    isAutoCompleteText: boolean;
    autoLoading: boolean;
    localAutoLoad: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    queryField: HTMLInputElement;
    selectButton: unknown;
    dropdownEl: unknown;
    optionList: unknown;
}, any>;
export default _default;
