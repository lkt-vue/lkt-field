import { LktObject } from 'lkt-ts-interfaces';
import { ValidOptionValue } from '../types/ValidOptionValue';

export class Option {
    value: ValidOptionValue = undefined;
    label: string = '';
    data?: LktObject = {};
    disabled?: boolean = false;
    group?: string = '';
    icon?: string = '';

    constructor(data: LktObject = {}) {
        for (let k in data) this[k] = data[k];
    }
}