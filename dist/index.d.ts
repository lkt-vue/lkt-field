import { Component, Plugin } from 'vue';
import { default as LktField } from './lib-components/LktField.vue';
import { LktFieldConfigType } from './types/LktFieldConfigType.d.ts';
export { setTextValueSlot, setTextEditSlot } from './functions/settings-functions';
declare const LktFieldPlugin: Plugin;
export default LktFieldPlugin;
export { LktField };
export { Option } from './instances/Option';
export { Field } from './instances/Field';
export declare const setFieldEmptySlot: (component?: string | Component) => void;
export declare const setFieldOptionSlot: (name: string, component?: string | Component) => void;
export declare const setFieldUndoText: (text: string) => string;
export declare const setFieldClearText: (text: string) => string;
export declare const setFieldI18nText: (text: string) => string;
export declare const setFieldSwitchEditionOnText: (text: string) => string;
export declare const setFieldSwitchEditionOffText: (text: string) => string;
export declare const setFieldShowPasswordOnText: (text: string) => string;
export declare const setFieldShowPasswordOffText: (text: string) => string;
export declare const setFieldDateReadFormat: (format: string) => string;
export declare const setFieldDefaultDateReadFormat: (format: string) => string;
export declare const setFieldValidationMessage: (code: string, message: string, stack?: string) => void;
export declare const setFieldValidationIconSlot: (component: string | Component) => boolean;
export declare const setFieldNumberFormat: (decimals?: number, decimalSeparator?: string, thousandsSeparator?: string, removeDecimalsIfZero?: boolean, lang?: string) => boolean;
export declare const setReadTextMaxLength: (length: number) => void;
export declare const setModalPerItemType: (itemType: string, modal: string) => void;
declare module 'vue' {
    interface GlobalComponents {
        LktField: typeof LktField & {
            props: LktFieldConfigType;
        };
    }
}
