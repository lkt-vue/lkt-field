import { LktObject } from 'lkt-vue-kernel';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Element {
    type: 'customTag' | 'image' | 'text';
    component?: string;
    props?: Record<string, any>;
    text?: string;
    config?: LktObject;
    children?: Element[];
}
declare const _default: DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: () => Element[];
        required: true;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "delete-element": (...args: any[]) => void;
    "update-text": (...args: any[]) => void;
    "add-text": (...args: any[]) => void;
    "add-element": (...args: any[]) => void;
    "elements-reordered": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: {
        type: () => Element[];
        required: true;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onDelete-element"?: ((...args: any[]) => any) | undefined;
    "onUpdate-text"?: ((...args: any[]) => any) | undefined;
    "onAdd-text"?: ((...args: any[]) => any) | undefined;
    "onAdd-element"?: ((...args: any[]) => any) | undefined;
    "onElements-reordered"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
