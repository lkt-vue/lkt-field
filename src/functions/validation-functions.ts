import { FieldValidation } from 'lkt-field-validation';

export const validateAmountOfNumbers = (status: string[], value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        let constraint = parseInt(min),
            val = value.replace(/\D+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinNumbers(constraint, 'ko'));
        }
    }

    if (typeof max !== 'undefined') {
        let constraint = parseInt(max),
            val = value.replace(/\D+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxNumbers(constraint, 'ko'));
        }
    }
};