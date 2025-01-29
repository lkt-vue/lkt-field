import { FieldValidation } from '../instances/FieldValidation';
import { ValidationCode } from '../enums/ValidationCode';
export declare const validateAmountOfNumbers: (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const validateAmountOfUpperChars: (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const validateAmountOfLowerChars: (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const validateAmountOfChars: (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const validateAmountOfSpecialChars: (status: FieldValidation[], value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const getCodeMessage: (code?: ValidationCode | string, stack?: string) => string;
