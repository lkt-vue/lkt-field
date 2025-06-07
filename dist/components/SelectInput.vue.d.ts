import { SelectInputProps } from '../config/SelectInputProps.d.ts';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { LktObject } from 'lkt-vue-kernel';
declare const _default: DefineComponent<SelectInputProps, {
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
    tag: (...args: any[]) => void;
    untag: (...args: any[]) => void;
    loaded: (...args: any[]) => void;
}, string, PublicProps, Readonly<SelectInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:options"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:showOptions"?: ((...args: any[]) => any) | undefined;
    "onUpdate:pickedOptions"?: ((...args: any[]) => any) | undefined;
    onTag?: ((...args: any[]) => any) | undefined;
    onUntag?: ((...args: any[]) => any) | undefined;
    onLoaded?: ((...args: any[]) => any) | undefined;
}>, {
    prop: LktObject;
    autoLoading: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    queryField: HTMLInputElement;
    selectButton: unknown;
    dropdownEl: unknown;
    optionList: unknown;
}, any>;
export default _default;
