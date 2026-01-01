import {
    extractPropValue,
    LktObject,
    LktSettings,
    OptionConfig,
    OptionsConfig,
    ValidOptionValue,
} from 'lkt-vue-kernel';
import { __ } from 'lkt-i18n';
import { Component, Ref } from 'vue';

export const prepareOptions = (options: any, prop: LktObject): OptionConfig[] => {
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
        if (typeof opt === 'object') return opt;
        if (typeof opt === 'string' || typeof opt === 'number') {
            return <OptionConfig>{
                label: String(opt),
                value: opt,
            }
        }
        return undefined;
    })
        .filter((opt: OptionConfig|undefined) => typeof opt !== 'undefined')
    )
        ;
};

export const removeDuplicatedOptions = (options: OptionConfig[]):OptionConfig[] => {

    return options.reduce((acc: OptionConfig[], current: OptionConfig): OptionConfig[] => {
        const x = acc.find((item: OptionConfig) => item.value === current.value);
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

export const filterOptions = (options: OptionConfig[], query: string = '', includeEquals: boolean = true, customFilter: Function|undefined = undefined) => {
    if (query === '' && typeof customFilter !== 'function') return options;

    let r = options;

    const q = String(query).toLowerCase();

    if (q !== '') {
        r = r.filter((z: OptionConfig) => {
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

export const findOptionByValue = (options: OptionConfig[], query: ValidOptionValue) => {
    if (query === '') return undefined;

    return options.find((z: OptionConfig) => {
        if (Array.isArray(query)) return query.includes(z.value);
        return z.value == query;
    });
};

export const receiveOptions = (currentOptions: OptionConfig[], receivedOptions: OptionConfig[], prop: LktObject) => {
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

export const getInValueOptionIndexes = (option: OptionConfig, value: ValidOptionValue[]): number[] => {
    let filtered = value?.filter((v) => v == option.value) ?? [];
    return filtered.map(v => value.indexOf(v));
};

export const getInPickedOptionOptionIndexes = (option: OptionConfig, value: OptionConfig[]): number[] => {
    let filtered = value?.filter((v) => v.value == option.value) ?? [];
    return filtered.map(v => value.indexOf(v));
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
    optionsConfig?: OptionsConfig
}) => {
    if (args.option.disabled) return false;

    args.focusedOptionIndex = -1;
    if (args.optionValueType === 'option') {
        args.value.value = args.option;
    } else {
        if (args.optionsConfig?.typeCasting === 'int') {
            //@ts-ignore
            args.value.value = parseInt(args.option.value);
        } else {
            args.value.value = String(args.option.value);
        }
    }
    args.pickedOptions.splice(0, 1, args.option);
    args.showOptions = false;
    args.searchMode = false;

    if (typeof args.callback === 'function') {
        args.callback({ option: args.option });
    }

    return true;
}



export const _handlePrimitiveOptionClickForMultipleValue = (args: {
    option: OptionConfig,
    value: Ref<Array<ValidOptionValue>>
    pickedOptions: Ref<Array<OptionConfig>>
    dropdownOptions: Array<OptionConfig>
    tagMode: boolean
    searchMode: boolean
    optionValueType: string | 'option'
    searchField?: Component|null
    callback?: Function
    keepFocused?: Function
    optionsConfig?: OptionsConfig
}): number => {

    let already = false,
        j: number[] = [];
    args.value.value?.forEach((v, i) => {
        if (v == args.option.value) {
            already = true;
            j.push(i);
        }
    })

    if (already) {
        if (args.tagMode) return 3;
        j.forEach(i => {
            args.value.value.splice(i, 1);
        })
        return 1;

    } else {
        let v = args.option.value;
        if (args.optionsConfig?.typeCasting === 'int') {
            //@ts-ignore
            v = parseInt(v);
        } else {
            v = String(v);
        }
        args.value.value.push(v);
        return 2;
    }
};

export const _handleObjectOptionClickForMultipleValue = (args: {
    option: OptionConfig,
    value: Ref<Array<OptionConfig>>
    pickedOptions: Ref<Array<OptionConfig>>
    dropdownOptions: Array<OptionConfig>
    tagMode: boolean
    searchMode: boolean
    optionValueType: string | 'option'
    searchField?: Component|null
    callback?: Function
    keepFocused?: Function
    optionsConfig?: OptionsConfig
}): number => {

    let already = false,
        j: number[] = [];

    args.value.value?.forEach((v, i) => {
        if (v.value == args.option.value) {
            already = true;
            j.push(i);
        }
    })

    if (already) {
        if (args.tagMode) return 3;
        j.forEach(i => {
            args.value.value.splice(i, 1);
        })
        return 1;
    } else {
        args.value.value.push(args.option);
        return 2;
    }
};

export const handleOptionClickMultiple = (args: {
    option: OptionConfig,
    value: Ref<Array<OptionConfig|ValidOptionValue>>
    pickedOptions: Ref<Array<OptionConfig>>
    dropdownOptions: Array<OptionConfig>
    tagMode: boolean
    searchMode: boolean
    optionValueType: string | 'option'
    searchField?: Component|null
    callback?: Function
    keepFocused?: Function
    optionsConfig?: OptionsConfig
}) => {
    if (args.option.disabled) return false;

    let status;

    if (args.optionValueType === 'option') {
        status = _handleObjectOptionClickForMultipleValue(args);
    } else {
        status = _handlePrimitiveOptionClickForMultipleValue(args);
    }

    if (status !== 3) {
        syncPickedOptions({
            value: args.value,
            options: args.dropdownOptions,
            pickedOptions: args.pickedOptions,
            multiple: true,
            optionValueType: args.optionValueType,
            optionsConfig: args.optionsConfig,
        });
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
    pickedOptions: Ref<Array<OptionConfig>>
    multiple: boolean
    optionValueType: string | 'option'
    optionsConfig?: OptionsConfig
}) => {
    if (args.multiple) {
        let l = args.options.length;
        for (let i = 0; i < l; ++i) {
            let option = args.optionValueType === 'option'
                ? findOptionByValue(args.options, args.value.value[i]?.value)
                : (args.optionsConfig?.typeCasting === 'int'
                        ? findOptionByValue(args.options, parseInt(args.value.value[i]))
                        : findOptionByValue(args.options, args.value.value[i])
                )
            ;

            if (typeof option !== 'undefined') {
                if (args.pickedOptions.value.length === 0) {
                    args.pickedOptions.value.push(option);
                } else {
                    args.pickedOptions.value.splice(i, 1, option);
                }
            }
        }

        return;
    }

    let option = args.optionValueType === 'option'
        ? findOptionByValue(args.options, args.value.value?.value)
        : (args.optionsConfig?.typeCasting === 'int'
                ? findOptionByValue(args.options, parseInt(args.value.value))
                : findOptionByValue(args.options, args.value.value)
        )
    ;

    if (typeof option !== 'undefined') {
        if (args.pickedOptions.value.length === 0) {
            args.pickedOptions.value.push(option);
        } else {
            args.pickedOptions.value.splice(0, 1, option);
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


            let el = typeof args.container.value?.querySelector === 'function' && args.container.value?.querySelector('[data-index="' + args.focusedIndex.value + '"]');
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

            let el = typeof args.container.value?.querySelector === 'function' && args.container.value?.querySelector('[data-index="' + args.focusedIndex.value + '"]');
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

    let option = <OptionConfig>{
        value: args.query,
        label: args.query,
    };

    let index = args.optionValueType === 'option'
        ? getInValueOptionIndex(option, args.value.value?.value)
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
            ? getInValueOptionIndex(args.option, args.value.value?.value)
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

export const getOptionItemContainerClass = (
    option: OptionConfig,
    index: number,
    focusedOptionIndex: number,
    isEditable: boolean,
    multiple: boolean,
) => {
    let r = [];
    if (optionIsActive(option, isEditable, multiple)) r.push('is-active');
    if (focusedOptionIndex === index) r.push('is-focused');
    if (option.disabled) r.push('is-disabled')
    return r.join(' ');
}