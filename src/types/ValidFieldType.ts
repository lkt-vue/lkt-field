import {FieldType} from "../enums/FieldType";

export type ValidFieldType =
    FieldType.Text
    | FieldType.Email
    | FieldType.Tel
    | FieldType.Password
    | FieldType.Search
    | FieldType.Number
    | FieldType.Color
    | FieldType.Range
    | FieldType.Textarea
    | FieldType.Html
    | FieldType.Date
    | FieldType.File
    | FieldType.Image
;