import { Settings } from '../settings/Settings';
import { FieldReportLevel, FieldValidation, ValidationCode, ValidationStatus } from 'lkt-vue-kernel';

export const validateAmountOfNumbers = (status: FieldValidation[], reportLevel: FieldReportLevel,  value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(min),
            val = value.replace(/\D+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinNumbers(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMinNumbers(constraint, ValidationStatus.Ok));
        }
    }

    if (typeof max !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(max),
            val = value.replace(/\D+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxNumbers(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMinNumbers(constraint, ValidationStatus.Ok));
        }
    }
};

export const validateAmountOfUpperChars = (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(min),
            val = value.replace(/[^A-Z]+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinUpperChars(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMinUpperChars(constraint, ValidationStatus.Ok));
        }
    }

    if (typeof max !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(max),
            val = value.replace(/[^A-Z]+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxUpperChars(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMaxUpperChars(constraint, ValidationStatus.Ok));
        }
    }
};

export const validateAmountOfLowerChars = (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(min),
            val = value.replace(/[A-Z]+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinLowerChars(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMinLowerChars(constraint, ValidationStatus.Ok));
        }
    }

    if (typeof max !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(max),
            val = value.replace(/[A-Z]+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxLowerChars(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMaxLowerChars(constraint, ValidationStatus.Ok));
        }
    }
};

export const validateAmountOfChars = (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(min),
            val = value.replace(/\d+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinChars(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMinChars(constraint, ValidationStatus.Ok));
        }
    }

    if (typeof max !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(max),
            val = value.replace(/\d+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxChars(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMaxChars(constraint, ValidationStatus.Ok));
        }
    }
};

export const validateAmountOfSpecialChars = (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => {
    if (typeof min !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(min),
            val = value.replace(/\d+/g, '').replace(/[a-zA-Z]+/g, '');

        if (val.length < constraint) {
            status.push(FieldValidation.createMinSpecialChars(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMinSpecialChars(constraint, ValidationStatus.Ok));
        }
    }

    if (typeof max !== 'undefined') {
        //@ts-ignore
        let constraint = parseInt(max),
            val = value.replace(/\d+/g, '').replace(/[a-zA-Z]+/g, '');

        if (val.length > constraint) {
            status.push(FieldValidation.createMaxSpecialChars(constraint, ValidationStatus.Ko));
        } else if (reportLevel === FieldReportLevel.All) {
            status.push(FieldValidation.createMaxSpecialChars(constraint, ValidationStatus.Ok));
        }
    }
};


export const getCodeMessage = (code?: ValidationCode|string, stack: string = 'default'): string => {
    if (!code) return '';
    let r = Settings.validationMessages[stack] && Settings.validationMessages[stack][code]
        ? Settings.validationMessages[stack][code]
        : '';
    if (!r) r = '';
    return r;
};