import { FieldType } from '../enums/FieldType';

export const FieldTypesWithOptions = [
    FieldType.Text, FieldType.Search, FieldType.Select
];

export const FieldTypesWithoutClear = [
    FieldType.Switch, FieldType.Check
];

export const FieldTypesWithoutUndo = [
    FieldType.Switch, FieldType.Check
];

export const TextFieldTypesWithOptions = [
    FieldType.Text, FieldType.Search
];

export const BooleanFieldTypes = [
    FieldType.Switch, FieldType.Check
];

export const FieldsWithMultipleMode = [
    FieldType.Select,
    FieldType.Color,
    FieldType.Card,
];

export const TextFieldTypes = [
    FieldType.Text,
    FieldType.Email,
    FieldType.Password,
];