import { WebElementConfig } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    element: WebElementConfig;
    parentChildren: WebElementConfig[];
    index?: number;
    lang?: string;
    isPreview?: boolean;
    canRenderActions?: boolean;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    index: number;
    isPreview: boolean;
    canRenderActions: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
