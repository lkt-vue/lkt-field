import { WebElementConfig, FileBrowserConfig } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: WebElementConfig[];
    parent: WebElementConfig;
    layoutSelector?: string;
    lang: string;
    isChild?: boolean;
    isPreview?: boolean;
    fileBrowserConfig?: FileBrowserConfig;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    "add-text": (...args: any[]) => void;
    "add-element": (...args: any[]) => void;
    "elements-reordered": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onAdd-text"?: ((...args: any[]) => any) | undefined;
    "onAdd-element"?: ((...args: any[]) => any) | undefined;
    "onElements-reordered"?: ((...args: any[]) => any) | undefined;
}>, {
    layoutSelector: string;
    isPreview: boolean;
    isChild: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {
    tableRef: unknown;
}, HTMLDivElement>;
export default _default;
