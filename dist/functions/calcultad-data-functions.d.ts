import { LktObject, ValidFieldValue } from 'lkt-vue-kernel';
export declare const extractPropValue: (needle: string | number | Function | undefined, haystack: LktObject) => undefined | string | number | Function;
export declare const extractEditableValue: (value: ValidFieldValue, lang: string) => any;
