import { FieldType } from '../enums/FieldType';
import { MultipleDisplayType } from '../enums/MultipleDisplayType';
import { LktObject } from 'lkt-ts-interfaces';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    type?: FieldType;
    value: any;
    label?: string;
    title?: string;
    fileName?: string;
    valueSlot?: string;
    emptyValueSlot?: string;
    slotData?: LktObject;
    download?: string | Function;
    multiple?: boolean;
    multipleDisplay?: MultipleDisplayType;
    modal?: string;
    modalKey?: string;
    modalData?: LktObject;
    optionSlot?: string;
    optionsDownload?: string | Function;
    optionsModal?: string | Function;
    optionsModalData?: LktObject | Function;
    optionsIcon?: string | Function;
    optionsLabelFormatter?: Function;
    optionsResource?: string;
    optionsResourceData?: LktObject;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        value?(_: {
            value: any;
            title: string;
            data: LktObject;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    type: FieldType;
    title: string;
    modal: string;
    modalData: LktObject;
    optionSlot: string;
    download: string | Function;
    emptyValueSlot: string;
    valueSlot: string;
    slotData: LktObject;
    multiple: boolean;
    multipleDisplay: MultipleDisplayType;
    optionsDownload: string | Function;
    optionsModal: string | Function;
    optionsModalData: LktObject | Function;
    optionsIcon: string | Function;
    optionsResource: string;
    optionsResourceData: LktObject;
    modalKey: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
