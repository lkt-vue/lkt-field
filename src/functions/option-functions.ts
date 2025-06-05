import { extractPropValue, LktObject, LktSettings, Option, OptionConfig, ValidOptionValue } from 'lkt-vue-kernel';
import { __ } from 'lkt-i18n';
import { Component } from 'vue';

export const prepareOptions = (options: any, prop: LktObject): Option[] => {
    if (typeof options === 'string') {
        options = extractPropValue(options, prop);
        if (typeof options === 'string' && options.startsWith('__:')) {
            let key = options.substring(3);

            let haystack = __(key),
                r = [];
            for (let k in haystack) r.push({value: k, label: haystack[k]});

            if (LktSettings.i18nOptionsFormatter[key]) {
                r = LktSettings.i18nOptionsFormatter[key](r);
            }
            return prepareOptions(r, prop);
        }
    }

    if (!Array.isArray(options) || options.length === 0) return [];
    return removeDuplicatedOptions(options.map(opt => {
        if (typeof opt === 'object') return new Option(opt);
        if (typeof opt === 'string' || typeof opt === 'number') {
            return new Option({
                label: String(opt),
                value: opt,
            })
        }
        return undefined;
    })
        .filter((opt: Option|undefined) => typeof opt !== 'undefined')
    )
        ;
};

export const removeDuplicatedOptions = (options: Option[]):Option[] => {
    return options.reduce((acc: Option[], current: Option): Option[] => {
        const x = acc.find((item: Option) => item.value === current.value);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);
}

export const filterOptions = (options: Option[], query: string = '', includeEquals: boolean = true, customFilter: Function|undefined = undefined) => {
    if (query === '' && typeof customFilter !== 'function') return options;

    let r = options;

    const q = String(query).toLowerCase();

    if (q !== '') {
        r = r.filter((z: Option) => {
            let label = String(z.label).toLowerCase();
            return label.indexOf(q) !== -1
                && (includeEquals || label !== q);
        });
    }

    if (typeof customFilter === 'function') {
        r = r.filter((z: OptionConfig) => customFilter(z));
    }

    return r;
};

export const findOptionByValue = (options: Option[], query: ValidOptionValue) => {
    if (query === '') return undefined;

    return options.find((z: Option) => {
        if (Array.isArray(query)) return query.includes(z.value);
        return z.value == query;
    });
};

export const receiveOptions = (currentOptions: Option[], receivedOptions: Option[], prop: LktObject) => {
    return removeDuplicatedOptions([...prepareOptions(receivedOptions, prop), ...currentOptions]);
};

export const optionIsActive = (option: OptionConfig, value: ValidOptionValue | ValidOptionValue[], isMultiple: boolean) => {
    if (isMultiple) {
        if (Array.isArray(value)) {
            let r = value.findIndex((v) => {
                return v == option.value;
            });
            if (typeof r == 'undefined') return false;
            return r > -1;
        }
        return false;
    }
    return option.value == value;
};

export const getInValueOptionIndex = (option: OptionConfig, value: ValidOptionValue[]): number => {
    //@ts-ignore
    let r = value.findIndex((v) => {
        return v == option.value;
    });
    if (typeof r === 'undefined') r = -1;
    return r;
};

export const handleOptionClickSingle = (args: {
    option: OptionConfig,
    value: OptionConfig|ValidOptionValue
    pickedOptions: Array<OptionConfig>
    optionValueType: string | 'option'
    focusedOptionIndex: number
    showOptions: boolean
    searchMode: boolean
    callback?: Function
}) => {
    if (args.option.disabled) return false;

    args.focusedOptionIndex = -1;
    if (args.optionValueType === 'option') {
        args.value = args.option;
    } else {
        args.value = String(args.option.value);
    }
    args.pickedOptions.splice(0, 1, args.option);
    args.showOptions = false;
    args.searchMode = false;

    if (typeof args.callback === 'function') {
        args.callback({ option: args.option });
    }

    return true;
}

export const handleOptionClickMultiple = (args: {
    option: OptionConfig,
    value: Array<OptionConfig|ValidOptionValue>
    pickedOptions: Array<OptionConfig>
    tagMode: boolean
    searchMode: boolean
    optionValueType: string | 'option'
    searchField?: Component|null
    callback?: Function
    keepFocused?: Function
}) => {
    if (args.option.disabled) return false;

    let k = -1;

    if (args.optionValueType === 'option') {
        k = getInValueOptionIndex(args.option, args.value.map(opt => opt.value));
    } else {
        k = getInValueOptionIndex(args.option, <Array<ValidOptionValue>>args.value);
    }

    if (k === -1) {
        if (args.optionValueType === 'option') {
            args.value.push(args.option);
        } else {
            args.value.push(String(args.option.value));
        }
        if (!args.tagMode) args.pickedOptions.push(args.option);

    } else if (!args.tagMode) {
        args.value.splice(k, 1);
        args.pickedOptions.splice(k, 1);
    }

    if (typeof args.keepFocused === 'function') {
        //@ts-ignore
        args.keepFocused();
    }
    else if (args.searchMode && args.searchField) {
        //@ts-ignore
        args.searchField.keepFocused();
    }

    if (typeof args.callback === 'function') {
        args.callback({ option: args.option });
    }

    return true;
}