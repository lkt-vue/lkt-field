import { Component, DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { FileBrowserConfig, WebElement } from 'lkt-vue-kernel';
type __VLS_Props = {
    modalName: string;
    modalKey: string;
    zIndex: number;
    items: WebElement[];
    element: WebElement;
    onUpdate: Function;
    onAppend: Function;
    index: number;
    addingChildren?: boolean;
    fileBrowserConfig: FileBrowserConfig;
    parentLayoutComponent?: Component;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    modalKey: string;
    modalName: string;
    zIndex: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
