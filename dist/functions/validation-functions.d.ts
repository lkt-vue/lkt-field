import { FieldReportLevel, FieldValidation, ValidationCode } from 'lkt-vue-kernel';
export declare const validateAmountOfNumbers: (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const validateAmountOfUpperChars: (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const validateAmountOfLowerChars: (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const validateAmountOfChars: (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const validateAmountOfSpecialChars: (status: FieldValidation[], reportLevel: FieldReportLevel, value: string, min: number | string | undefined, max: number | string | undefined) => void;
export declare const getCodeMessage: (code?: ValidationCode | string, stack?: string) => string;
