import { LktObject, Option, OptionConfig, ValidOptionValue } from 'lkt-vue-kernel';
import { Component, Ref } from 'vue';
export declare const prepareOptions: (options: any, prop: LktObject) => Option[];
export declare const removeDuplicatedOptions: (options: Option[]) => Option[];
export declare const canDisplayOption: (option: OptionConfig, query?: string, includeEquals?: boolean, customFilter?: Function | undefined) => boolean;
export declare const filterOptions: (options: Option[], query?: string, includeEquals?: boolean, customFilter?: Function | undefined) => Option[];
export declare const findOptionByValue: (options: Option[], query: ValidOptionValue) => Option | undefined;
export declare const receiveOptions: (currentOptions: Option[], receivedOptions: Option[], prop: LktObject) => Option[];
export declare const optionIsActive: (option: OptionConfig, value: ValidOptionValue | ValidOptionValue[], isMultiple: boolean) => boolean;
export declare const getInValueOptionIndex: (option: OptionConfig, value: ValidOptionValue[]) => number;
export declare const handleOptionClickSingle: (args: {
    option: OptionConfig;
    value: Ref<OptionConfig | ValidOptionValue>;
    pickedOptions: Array<OptionConfig>;
    optionValueType: string | "option";
    focusedOptionIndex: number;
    showOptions: boolean;
    searchMode: boolean;
    callback?: Function;
}) => boolean;
export declare const handleOptionClickMultiple: (args: {
    option: OptionConfig;
    value: Ref<Array<OptionConfig | ValidOptionValue>>;
    pickedOptions: Array<OptionConfig>;
    tagMode: boolean;
    searchMode: boolean;
    optionValueType: string | "option";
    searchField?: Component | null;
    callback?: Function;
    keepFocused?: Function;
}) => boolean;
export declare const syncPickedOptions: (args: {
    query: string;
    value: OptionConfig | ValidOptionValue | Array<OptionConfig | ValidOptionValue>;
    options: Array<OptionConfig>;
    pickedOptions: Array<OptionConfig>;
    multiple: boolean;
    optionValueType: string | "option";
}) => void;
