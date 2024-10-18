import {LktObject} from "lkt-ts-interfaces";

export class Settings {
    static defaultEmptyValueSlot: string = '';
    static customValueSlots: LktObject = {};
    static customEditSlots: LktObject = {};

    static undoText: string = '';
    static clearText: string = '';
    static i18nText: string = '';
    static switchEditionOnText: string = '';
    static switchEditionOffText: string = '';
    static showPasswordOnText: string = '';
    static showPasswordOffText: string = '';

    static dateReadFormat = '';
    static defaultDateReadFormat = 'Y-m-d';

    static langDateReadFormat = {
        en: 'Y-m-d',
        es: 'd/m/Y',
    }

    static acceptTypes = {
        file: '*/*',
        image: 'image/*',
    }
}