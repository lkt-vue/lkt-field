import { WebElementConfig } from 'lkt-vue-kernel';
import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare const _default: DefineComponent<ExtractPropTypes<{
    modelValue: {
        type: () => WebElementConfig[];
        required: true;
    };
    layoutSelector: {
        type: StringConstructor;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    modelValue: {
        type: () => WebElementConfig[];
        required: true;
    };
    layoutSelector: {
        type: StringConstructor;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {
    containerRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
