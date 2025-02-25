import {MultiValueObject} from "../interfaces/MultiValueObject";
import { LktObject, Option } from 'lkt-vue-kernel';

export type ValidFieldValue =
    string
    | number
    | boolean
    | MultiValueObject
    | LktObject
    | Option[];