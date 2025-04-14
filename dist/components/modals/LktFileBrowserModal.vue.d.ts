import { FieldType, FileBrowserConfig } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modalName: string;
    modalKey: string;
    zIndex: number;
    type: FieldType;
    fileBrowserConfig?: FileBrowserConfig;
    modelValue: Array<string | number | undefined>;
    onConfirmSelection?: Function;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    modelValue: Array<string | number | undefined>;
    modalKey: string;
    onConfirmSelection: Function;
    modalName: string;
    zIndex: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
