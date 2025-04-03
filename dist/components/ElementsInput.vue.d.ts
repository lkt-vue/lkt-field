import { FileBrowserConfig, WebElementConfig } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: WebElementConfig[];
    layoutSelector?: string;
    fileBrowserConfig?: FileBrowserConfig;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: WebElementConfig[];
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    containerRef: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
