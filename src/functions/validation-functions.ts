import { Settings } from '../settings/Settings';
import { FieldValidation } from '../instances/FieldValidation';
import { ValidationStatus } from '../enums/ValidationStatus';

export const validateAmountOfNumbers = (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        let constraint = parseInt(min),
            val = value.replace(/\D+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinNumbers(constraint, ValidationStatus.Ko));
        }
    }

    if (typeof max !== 'undefined') {
        let constraint = parseInt(max),
            val = value.replace(/\D+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxNumbers(constraint, ValidationStatus.Ko));
        }
    }
};

export const validateAmountOfUpperChars = (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        let constraint = parseInt(min),
            val = value.replace(/[^A-Z]+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinUpperChars(constraint, ValidationStatus.Ko));
        }
    }

    if (typeof max !== 'undefined') {
        let constraint = parseInt(max),
            val = value.replace(/[^A-Z]+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxUpperChars(constraint, ValidationStatus.Ko));
        }
    }
};

export const validateAmountOfLowerChars = (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        let constraint = parseInt(min),
            val = value.replace(/[A-Z]+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinLowerChars(constraint, ValidationStatus.Ko));
        }
    }

    if (typeof max !== 'undefined') {
        let constraint = parseInt(max),
            val = value.replace(/[A-Z]+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxLowerChars(constraint, ValidationStatus.Ko));
        }
    }
};

export const validateAmountOfChars = (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        let constraint = parseInt(min),
            val = value.replace(/\d+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinChars(constraint, ValidationStatus.Ko));
        }
    }

    if (typeof max !== 'undefined') {
        let constraint = parseInt(max),
            val = value.replace(/\d+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxChars(constraint, ValidationStatus.Ko));
        }
    }
};

export const validateAmountOfSpecialChars = (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        let constraint = parseInt(min),
            val = value.replace(/\d+/g, '').replace(/[a-zA-Z]+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinSpecialChars(constraint, ValidationStatus.Ko));
        }
    }

    if (typeof max !== 'undefined') {
        let constraint = parseInt(max),
            val = value.replace(/\d+/g, '').replace(/[a-zA-Z]+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxSpecialChars(constraint, ValidationStatus.Ko));
        }
    }
};


export const getCodeMessage = (code: string, stack: string = 'default'): string => {
    let r = Settings.validationMessages[stack] && Settings.validationMessages[stack][code]
        ? Settings.validationMessages[stack][code]
        : '';
    if (!r) r = '';
    return r;
};