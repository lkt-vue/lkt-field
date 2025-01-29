import { Option } from '../instances/Option';
import { ValidOptionValue } from '../types/ValidOptionValue';
import { LktObject } from 'lkt-ts-interfaces';
export declare const prepareOptions: (options: any, prop: LktObject) => Option[];
export declare const filterOptions: (options: Option[], query?: string, includeEquals?: boolean) => Option[];
export declare const findOptionByValue: (options: Option[], query: ValidOptionValue) => Option | undefined;
export declare const receiveOptions: (currentOptions: Option[], receivedOptions: Option[], prop: LktObject) => Option[];
export declare const optionIsActive: (option: Option, value: ValidOptionValue | ValidOptionValue[], isMultiple: boolean) => boolean;
export declare const getInValueOptionIndex: (option: Option, value: ValidOptionValue[]) => number;
