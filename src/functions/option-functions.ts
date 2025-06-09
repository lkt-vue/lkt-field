import {
    extractPropValue,
    LktObject,
    LktSettings,
    Option,
    OptionConfig,
    OptionsConfig,
    ValidOptionValue,
} from 'lkt-vue-kernel';
import { __ } from 'lkt-i18n';
import { Component, Ref } from 'vue';

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

export const canDisplayOption = (option: OptionConfig, query: string = '', includeEquals: boolean = true, customFilter: Function|undefined = undefined): boolean => {
    if (query === '' && typeof customFilter !== 'function') return true;

    const q = String(query).toLowerCase();

    let label = String(option.label).toLowerCase();
    if (!(label.indexOf(q) !== -1 && (includeEquals || label !== q))) return false;
    if (typeof customFilter === 'function' && !customFilter(option)) return false;
    return true;
};

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
    value: Ref<OptionConfig|ValidOptionValue>
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
        args.value.value = args.option;
    } else {
        args.value.value = String(args.option.value);
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
    value: Ref<Array<OptionConfig|ValidOptionValue>>
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
        k = getInValueOptionIndex(args.option, args.value.value.map(opt => opt.value));
    } else {
        k = getInValueOptionIndex(args.option, <Array<ValidOptionValue>>args.value.value);
    }

    if (k === -1) {
        if (args.optionValueType === 'option') {
            args.value.value.push(args.option);
        } else {
            args.value.value.push(String(args.option.value));
        }
        if (!args.tagMode) args.pickedOptions.push(args.option);

    } else if (!args.tagMode) {
        args.value.value.splice(k, 1);
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

export const syncPickedOptions = (args: {
    value: Ref<OptionConfig|ValidOptionValue|Array<OptionConfig|ValidOptionValue>>
    options: Array<OptionConfig>
    pickedOptions: Array<OptionConfig>
    multiple: boolean
    optionValueType: string | 'option'
}) => {
    if (args.multiple) {
        let l = args.options.length;
        for (let i = 0; i < l; ++i) {
            let option = args.optionValueType === 'option'
                ? findOptionByValue(args.options, args.value.value[i].value)
                : findOptionByValue(args.options, args.value.value[i])
            ;

            if (typeof option !== 'undefined') {
                if (args.pickedOptions.length === 0) {
                    args.pickedOptions.push(option);
                } else {
                    args.pickedOptions.splice(i, 1, option);
                }
            }
        }

        return;
    }

    let option = args.optionValueType === 'option'
        ? findOptionByValue(args.options, args.value.value.map((opt: OptionConfig) => opt.value))
        : findOptionByValue(args.options, args.value.value)
    ;

    if (typeof option !== 'undefined') {
        if (args.pickedOptions.length === 0) {
            args.pickedOptions.push(option);
        } else {
            args.pickedOptions.splice(0, 1, option);
        }
    }
}

/**
 * Returns false if nothing to do, true if successfully updated pointer, or an OptionConfig if selected
 * @param args
 */
export const handleDropdownOptionsKeyboardNavigation = (args: {
    event: KeyboardEvent,
    options: Ref<Array<OptionConfig>>
    focusing: boolean,
    container: Ref<HTMLElement|null>
    focusedIndex: Ref<number>
    optionsConfig: OptionsConfig
    query: string
}): boolean|OptionConfig => {

    let amountOfOptions = args.options.value.length - 1;
    if (amountOfOptions === -1) return false;

    const key = args.event.key ?? '';

    if (args.focusing) {

        // Event handle
        if (['ArrowDown', 'ArrowUp', 'Enter'].includes(key)) {
            args.event.preventDefault();
            args.event.stopPropagation();
        }

        if (key === 'ArrowDown') {
            ++args.focusedIndex.value;
            if (args.focusedIndex.value > amountOfOptions) args.focusedIndex.value = 0;

            let option = <OptionConfig>args.options.value[args.focusedIndex.value];

            while (!canDisplayOption(option, args.query, true, args.optionsConfig.filter) && args.focusedIndex.value < amountOfOptions) {
                ++args.focusedIndex.value;
                option = <OptionConfig>args.options.value[args.focusedIndex.value];
            }


            let el = args.container.value?.querySelector('[data-index="' + args.focusedIndex.value + '"]');
            if (el) el.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
            return true;

        } else if (key === 'ArrowUp') {
            --args.focusedIndex.value;
            if (args.focusedIndex.value < 0) args.focusedIndex.value = amountOfOptions;

            let option = <OptionConfig>args.options.value[args.focusedIndex.value];

            while (!canDisplayOption(option, args.query, args.optionsConfig?.filter) && args.focusedIndex.value > 0) {
                --args.focusedIndex.value;
                option = <OptionConfig>args.options.value[args.focusedIndex.value];
            }

            let el = args.container.value?.querySelector('[data-index="' + args.focusedIndex.value + '"]');
            if (el) el.scrollIntoView({ behavior: 'instant', block: 'start', inline: 'nearest' });
            return true;

        } else if (key === 'Enter') {
            if (args.focusedIndex.value > -1) {
                return <OptionConfig>args.options.value[args.focusedIndex.value]
            }
        }
    }

    return false;
}

export const createTag = (args: {
    value: Ref<Array<OptionConfig|ValidOptionValue>>
    query: string,
    optionValueType: string | 'option'
    options: Ref<Array<OptionConfig>>
    pickedOptions: Array<OptionConfig>
}) => {

    let option = new Option({
        value: args.query,
        label: args.query,
    });

    let index = args.optionValueType === 'option'
        ? getInValueOptionIndex(option, args.value.value.map(opt => opt.value))
        : getInValueOptionIndex(option, args.value.value)
    ;

    if (index === -1) {
        args.value.value.push(args.optionValueType === 'option' ? option : option.value);
        args.options.value.push(option);
        args.pickedOptions.push(option);
        return true;
    }

    return false;
}

export const removeTag = (args: {
    value: Ref<Array<OptionConfig|ValidOptionValue>>
    option: OptionConfig,
    optionValueType: string | 'option'
    options: Ref<Array<OptionConfig>>
    pickedOptions: Array<OptionConfig>
}) => {

    let hasToUntag = true;
    while (hasToUntag) {

        let index = args.optionValueType === 'option'
            ? getInValueOptionIndex(args.option, args.value.value.map(opt => opt.value))
            : getInValueOptionIndex(args.option, args.value.value)
        ;

        if (index >= 0) {
            args.options.value.splice(
                args.options.value.findIndex(opt => opt.value == args.option.value),
                1,
            );
            args.pickedOptions.splice(
                args.pickedOptions.findIndex(opt => opt.value == args.option.value),
                1,
            );

            args.value.value.splice(index, 1);
        } else {
            hasToUntag = false;
        }
    }
    return true;
}

export const pickFirstOption = (args: {
    value: Ref<Array<OptionConfig|ValidOptionValue>>
    optionValueType: string | 'option'
    multiple: boolean
    query: string
    optionsConfig: OptionsConfig
    options: Ref<Array<OptionConfig>>
    pickedOptions: Array<OptionConfig>
}) => {
    let index = 0, amountOfOptions = args.options.value.length;
    let option = <OptionConfig>args.options.value[index];

    while (!canDisplayOption(option, args.query, true, args.optionsConfig?.filter) && index < amountOfOptions) {
        ++index;
        option = <OptionConfig>args.options.value[index];
    }

    if (args.optionValueType === 'option') {
        if (args.multiple) {
            args.value.value.push(option)
        } else {
            args.value.value = option;
        }

    } else {
        if (args.multiple) {
            args.value.value.push(option.value)
        } else {
            args.value.value = option.value;
        }
    }

    if (args.multiple) {
        args.pickedOptions.push(option);
    } else {
        args.pickedOptions.splice(0, 1, option);
    }
}