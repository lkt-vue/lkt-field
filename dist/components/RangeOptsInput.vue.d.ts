import { ValidFieldValue, LktObject } from 'lkt-vue-kernel';
import { RangeOptsInputProps } from '../config/RangeOptsInputProps.d.ts';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<RangeOptsInputProps, {
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
}, string, PublicProps, Readonly<RangeOptsInputProps> & Readonly<{
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
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
    optionList: unknown;
}, HTMLDivElement>;
export default _default;
