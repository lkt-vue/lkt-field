import { LktObject, Option, OptionConfig, OptionsConfig, ValidOptionValue } from 'lkt-vue-kernel';
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
    value: Ref<OptionConfig | ValidOptionValue | Array<OptionConfig | ValidOptionValue>>;
    options: Array<OptionConfig>;
    pickedOptions: Array<OptionConfig>;
    multiple: boolean;
    optionValueType: string | "option";
}) => void;
/**
 * Returns false if nothing to do, true if successfully updated pointer, or an OptionConfig if selected
 * @param args
 */
export declare const handleDropdownOptionsKeyboardNavigation: (args: {
    event: KeyboardEvent;
    options: Ref<Array<OptionConfig>>;
    focusing: boolean;
    container: Ref<HTMLElement | null>;
    focusedIndex: Ref<number>;
    optionsConfig: OptionsConfig;
    query: string;
}) => boolean | OptionConfig;
export declare const createTag: (args: {
    value: Ref<Array<OptionConfig | ValidOptionValue>>;
    query: string;
    optionValueType: string | "option";
    options: Ref<Array<OptionConfig>>;
    pickedOptions: Array<OptionConfig>;
}) => boolean;
export declare const removeTag: (args: {
    value: Ref<Array<OptionConfig | ValidOptionValue>>;
    option: OptionConfig;
    optionValueType: string | "option";
    options: Ref<Array<OptionConfig>>;
    pickedOptions: Array<OptionConfig>;
}) => boolean;
export declare const pickFirstOption: (args: {
    value: Ref<Array<OptionConfig | ValidOptionValue>>;
    optionValueType: string | "option";
    multiple: boolean;
    options: Ref<Array<OptionConfig>>;
    pickedOptions: Array<OptionConfig>;
}) => void;
