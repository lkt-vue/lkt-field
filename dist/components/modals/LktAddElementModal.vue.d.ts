import { LktObject } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    modalName: string;
    modalKey: string;
    zIndex: number;
    items: LktObject[];
    element: LktObject;
    onUpdate: Function;
    onAppend: Function;
    index: number;
    addingChildren?: boolean;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    modalKey: string;
    modalName: string;
    zIndex: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
