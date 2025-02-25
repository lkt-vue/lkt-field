import { LktObject } from 'lkt-vue-kernel';
import { ValidOptionValue } from '../types/ValidOptionValue';
export declare class Option {
    value: ValidOptionValue;
    label: string;
    data?: LktObject;
    disabled?: boolean;
    group?: string;
    icon?: string;
    modal?: string | Function;
    constructor(data?: LktObject);
}
