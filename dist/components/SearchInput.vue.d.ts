import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: string;
    name: string;
    id: string;
    optionsResource: string;
    editable: boolean;
    focusing: boolean;
    hadFirstFocus: boolean;
    disabled: boolean;
    readonly: boolean;
    tabindex: number;
    container: HTMLElement;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    focus: (...args: any[]) => void;
    blur: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    input: HTMLInputElement;
    dropdownEl: unknown;
}, any>;
export default _default;
