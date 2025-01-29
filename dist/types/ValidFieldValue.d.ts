import { MultiValueObject } from '../interfaces/MultiValueObject';
import { LktObject } from 'lkt-ts-interfaces';
import { Option } from '../instances/Option';
export type ValidFieldValue = string | number | boolean | MultiValueObject | LktObject | Option[];
