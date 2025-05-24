import { FieldType, LktObject } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    type: FieldType;
    insideEllipsis?: boolean;
    isFeatured?: boolean;
    translations: LktObject;
    referrer: any;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    insideEllipsis: boolean;
    isFeatured: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
