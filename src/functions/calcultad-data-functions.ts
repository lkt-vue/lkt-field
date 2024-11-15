import { LktObject } from 'lkt-ts-interfaces';
import { ValidFieldValue } from '../types/ValidFieldValue';

export const extractPropValue = (needle: string|Function, haystack: LktObject): string|Function => {
    if (typeof needle === 'string' && needle.startsWith('prop:')) {
        return haystack[needle.substring(5)];
    }
    return needle;
}

export const extractEditableValue = (value: ValidFieldValue, lang: string) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
        return value[lang];
    }
    return value;
}