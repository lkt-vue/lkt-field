import { ValidationCode } from '../enums/ValidationCode';
import { ValidationStatus } from '../enums/ValidationStatus';

export class FieldValidation {
    code?: ValidationCode|string = undefined;
    status: ValidationStatus = ValidationStatus.Info;

    min: number = 0;
    max: number = 0;
    equalToValue: number|string|undefined = undefined;

    constructor(code: ValidationCode, status: ValidationStatus) {
        this.code = code;
        this.status = status;
    }

    setMin(n: number) {
        this.min = n;
        return this;
    }

    setMax(n: number) {
        this.max = n;
        return this;
    }

    setEqualToValue(val: number|string) {
        this.equalToValue = val;
        return this;
    }

    static createEmpty(status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.Empty, status);
    }

    static createEmail(status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.Email, status);
    }

    static createMinStr(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MinStringLength, status).setMin(min);
    }

    static createMaxStr(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MaxStringLength, status).setMax(max);
    }

    static createMinNum(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MinNumber, status).setMin(min);
    }

    static createMaxNum(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MaxNumber, status).setMax(max);
    }

    static createNumBetween(min: number, max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MaxNumber, status).setMin(min).setMax(max);
    }

    static createMinNumbers(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MinNumbers, status).setMin(min);
    }

    static createMaxNumbers(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MaxNumbers, status).setMax(max);
    }

    static createMinUpperChars(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MinUpperChars, status).setMin(min);
    }

    static createMaxUpperChars(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MaxUpperChars, status).setMax(max);
    }

    static createMinLowerChars(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MinLowerChars, status).setMin(min);
    }

    static createMaxLowerChars(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MaxLowerChars, status).setMax(max);
    }

    static createMinSpecialChars(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MinSpecialChars, status).setMin(min);
    }

    static createMaxSpecialChars(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MaxSpecialChars, status).setMax(max);
    }

    static createMinChars(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MinChars, status).setMin(min);
    }

    static createMaxChars(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.MaxChars, status).setMax(max);
    }

    static createEqualTo(value: number|string, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation(ValidationCode.EqualTo, status).setEqualToValue(value);
    }
}