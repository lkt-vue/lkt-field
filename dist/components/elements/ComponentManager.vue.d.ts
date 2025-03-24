import { FieldElementConfig } from 'lkt-vue-kernel';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: () => FieldElementConfig[];
        required: true;
    };
    layoutSelector: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "add-text": (...args: any[]) => void;
    "add-element": (...args: any[]) => void;
    "elements-reordered": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: {
        type: () => FieldElementConfig[];
        required: true;
    };
    layoutSelector: {
        type: StringConstructor;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onAdd-text"?: ((...args: any[]) => any) | undefined;
    "onAdd-element"?: ((...args: any[]) => any) | undefined;
    "onElements-reordered"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {
    tableRef: unknown;
}, HTMLDivElement>;
export default _default;
