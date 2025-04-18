import { FileBrowserConfig, WebElement } from 'lkt-vue-kernel';
import { Component, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modelValue: WebElement;
    parent?: WebElement;
    parentChildren: WebElement[];
    index?: number;
    lang?: string;
    isPreview?: boolean;
    canRenderActions?: boolean;
    fileBrowserConfig?: FileBrowserConfig;
    parentLayoutComponent?: Component;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    index: number;
    isPreview: boolean;
    canRenderActions: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
