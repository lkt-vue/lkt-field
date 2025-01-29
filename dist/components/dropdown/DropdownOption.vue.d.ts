import { Option } from '../../instances/Option';
import { LktObject } from 'lkt-ts-interfaces';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    option: Option;
    optionSlot?: string;
    editable?: boolean;
    icon?: string | Function;
    modal?: string | Function;
    modalData?: LktObject | Function;
    download?: string | Function;
    labelFormatter?: Function;
    isTag?: boolean;
};
declare const _default: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    "click-icon": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    "onClick-icon"?: ((...args: any[]) => any) | undefined;
}>, {
    icon: string | Function;
    option: Option;
    modal: string | Function;
    modalData: LktObject | Function;
    optionSlot: string;
    editable: boolean;
    download: string | Function;
    isTag: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export default _default;
