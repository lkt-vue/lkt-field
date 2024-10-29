import { LktObject } from 'lkt-ts-interfaces';
import { ValidOptionValue } from '../types/ValidOptionValue';

export class Option {
    value: ValidOptionValue = undefined;
    label: string = '';
    data?: LktObject = {};
    disabled?: boolean = false;
    group?: string = '';
    icon?: string = '';
    modal?: string = '';

    constructor(data: LktObject = {}) {
        for (let k in data) {
            //@ts-ignore
            this[k] = data[k];
        }
    }
}