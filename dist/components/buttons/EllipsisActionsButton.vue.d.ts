import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    showUndo?: boolean;
    showClear?: boolean;
    showPassword?: boolean;
    showPasswordCheck?: boolean;
    showEdition?: boolean;
    showEditionCheck?: boolean;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    clear: (...args: any[]) => void;
    undo: (...args: any[]) => void;
    "update:showPasswordCheck": (...args: any[]) => void;
    "update:showEditionCheck": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClear?: ((...args: any[]) => any) | undefined;
    onUndo?: ((...args: any[]) => any) | undefined;
    "onUpdate:showPasswordCheck"?: ((...args: any[]) => any) | undefined;
    "onUpdate:showEditionCheck"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
