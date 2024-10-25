import {LktObject} from "lkt-ts-interfaces";
import { Component } from 'vue';

export class Settings {
    static defaultEmptyValueSlot: string|Component|undefined = '';
    static customValueSlots: LktObject = {};
    static customEditSlots: LktObject = {};

    static searchKeyForResource: string = 'query';

    static optionSlots: LktObject = {};

    static defaultDateIcon: string = 'lkt-field-icon-calendar-empty';
    static defaultNumberFeaturedButton: string = 'subtract';

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