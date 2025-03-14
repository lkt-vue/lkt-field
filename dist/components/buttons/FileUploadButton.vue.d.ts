import { ButtonConfig, HttpCallConfig } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    config: ButtonConfig;
    fileUploadHttp: HttpCallConfig;
    insideEllipsis?: boolean;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    insideEllipsis: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
