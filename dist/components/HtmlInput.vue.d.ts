import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: string;
    name: string;
    id: string;
    lang: string;
    editable: boolean;
    focusing: boolean;
    disabled: boolean;
    readonly: boolean;
    tabindex: number;
};
declare const _default: DefineComponent<__VLS_Props, {
    doSetValue: (contents: string) => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
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
    input: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
