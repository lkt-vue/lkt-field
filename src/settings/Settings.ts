import { LktObject } from 'lkt-vue-kernel';
import { Component } from 'vue';

export class Settings {
    static defaultEmptyValueSlot: string | Component | undefined = '';
    static customValueSlots: LktObject = {};
    static customEditSlots: LktObject = {};

    static searchKeyForResource: string = 'query';

    static optionSlots: LktObject = {};

    static defaultDateIcon: string = 'lkt-icn-calendar-empty-outline';
    static defaultNumberFeaturedButton: string = 'subtract';

    static undoText: string = '';
    static clearText: string = '';
    static i18nText: string = '';
    static switchEditionOnText: string = '';
    static switchEditionOffText: string = '';
    static showPasswordOnText: string = '';
    static showPasswordOffText: string = '';

    static dateReadFormat = '';
    static dateTimeReadFormat = '';
    static defaultDateReadFormat = 'Y-m-d';
    static defaultDateTimeReadFormat = 'Y-m-d H:i';

    static langDateReadFormat: LktObject = {
        en: 'Y-m-d',
        es: 'd/m/Y',
    };

    static langDateTimeReadFormat: LktObject = {
        en: 'Y-m-d H:i',
        es: 'd/m/Y H:i',
    };

    static acceptTypes: LktObject = {
        file: '*/*',
        image: 'image/*',
    };

    static validationIconSlot: string|Component = '';

    static validationMessages: LktObject = {
        default: {
            'ok-http-response': '',
            'ko-http-response': '',
            'ko-num-between': '',
            'ko-min-str': '',
            'ko-min-num': '',
            'ko-max-str': '',
            'ko-max-num': '',
            'ko-email': '',
            'ko-empty': '',
            'ko-min-numbers': '',
            'ko-max-numbers': '',
            'ko-min-chars': '',
            'ko-max-chars': '',
            'ko-min-upper-chars': '',
            'ko-max-upper-chars': '',
            'ko-min-lower-chars': '',
            'ko-max-lower-chars': '',
            'ko-min-special-chars': '',
            'ko-max-special-chars': '',
        },
    };

    static amountOfDecimals?: number = undefined;
    static decimalSeparator: string = '.';
    static thousandsSeparator: string = '';
    static removeDecimalsIfZero: boolean = true;

    static langNumberFormat: LktObject = {
        en: {
            amountOfDecimals: 2,
            decimalSeparator: '.',
            thousandsSeparator: ',',
            removeDecimalsIfZero: true,
        },
        es: {
            amountOfDecimals: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            removeDecimalsIfZero: true,
        },
    };

    static readTextMaxLength?: number = undefined;
    
    static modalPerItemType: LktObject = {};
}

