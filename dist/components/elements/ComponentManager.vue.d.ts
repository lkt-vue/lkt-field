import { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
interface Element {
    type: 'customTag' | 'image' | 'text';
    component?: string;
    props?: Record<string, any>;
    text?: string;
}
declare const _default: DefineComponent<ExtractPropTypes<{
    elements: {
        type: () => Element[];
        required: true;
    };
}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "delete-element": (...args: any[]) => void;
    "update-text": (...args: any[]) => void;
    "add-text": (...args: any[]) => void;
    "add-element": (...args: any[]) => void;
    "elements-reordered": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    elements: {
        type: () => Element[];
        required: true;
    };
}>> & Readonly<{
    "onDelete-element"?: ((...args: any[]) => any) | undefined;
    "onUpdate-text"?: ((...args: any[]) => any) | undefined;
    "onAdd-text"?: ((...args: any[]) => any) | undefined;
    "onAdd-element"?: ((...args: any[]) => any) | undefined;
    "onElements-reordered"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {
    sortableContainer: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
