import { extractPropValue, LktObject, LktSettings, Option, OptionConfig } from 'lkt-vue-kernel';
import { ValidOptionValue } from 'lkt-vue-kernel';
import { __ } from 'lkt-i18n';

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
    return removeDuplicatedOptions([...currentOptions, ...prepareOptions(receivedOptions, prop)]);
};

export const optionIsActive = (option: Option, value: ValidOptionValue | ValidOptionValue[], isMultiple: boolean) => {
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

export const getInValueOptionIndex = (option: Option, value: ValidOptionValue[]): number => {
    //@ts-ignore
    let r = value.findIndex((v) => {
        return v == option.value;
    });
    if (typeof r === 'undefined') r = -1;
    return r;
};