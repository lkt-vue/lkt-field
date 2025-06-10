import { AnchorConfig, FieldReadModeConfig, FieldType, LktObject, MultipleOptionsDisplay, OptionsConfig } from 'lkt-vue-kernel';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    type?: FieldType;
    value: any;
    isLoading?: boolean;
    label?: string;
    title?: string;
    fileName?: string;
    valueSlot?: string;
    emptyValueSlot?: string;
    slotData?: LktObject;
    download?: string | Function;
    anchor?: AnchorConfig | Function;
    multiple?: boolean;
    multipleDisplay?: MultipleOptionsDisplay;
    modal?: string;
    modalKey?: string;
    modalData?: LktObject;
    optionSlot?: string;
    optionsDownload?: string | Function;
    optionsModal?: string | Function;
    optionsModalData?: LktObject | Function;
    optionsIcon?: string | Function;
    optionsText?: string | Function;
    optionsClass?: string | Function;
    optionsLabelFormatter?: Function;
    prop?: LktObject;
    readModeConfig?: FieldReadModeConfig;
    optionsConfig: OptionsConfig;
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
    modalKey: string;
    modalData: LktObject;
    prop: LktObject;
    emptyValueSlot: string;
    optionSlot: string;
    valueSlot: string;
    slotData: LktObject;
    multiple: boolean;
    multipleDisplay: MultipleOptionsDisplay;
    download: string | Function;
    isLoading: boolean;
    optionsDownload: string | Function;
    optionsModal: string | Function;
    optionsModalData: LktObject | Function;
    optionsIcon: string | Function;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
