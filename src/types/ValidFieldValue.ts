import {MultiValueObject} from "../interfaces/MultiValueObject";
import { LktObject } from 'lkt-ts-interfaces';

export type ValidFieldValue =
    string
    | number
    | boolean
    | MultiValueObject
    | LktObject;