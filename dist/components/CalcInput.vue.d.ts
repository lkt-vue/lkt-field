import { Option } from '../instances/Option';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: string;
    options?: Option[];
    editable: boolean;
    focusing: boolean;
    disabled: boolean;
    readonly: boolean;
    tabindex: number;
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
    options: Option[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    container: HTMLDivElement;
    input: HTMLInputElement;
    dropdownEl: unknown;
}, HTMLDivElement>;
export default _default;
