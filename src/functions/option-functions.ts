import { Option } from '../instances/Option';
import { ValidOptionValue } from '../types/ValidOptionValue';
import { __ } from 'lkt-i18n';

export const prepareOptions = (options: any) => {
    if (typeof options === 'string') {
        if (options.startsWith('__:')) {
            let key = options.substring(3);

            let haystack = __(key),
                r = [];
            for (let k in haystack) r.push({value: k, label: haystack[k]});
            return prepareOptions(r);
        }
    }

    if (!Array.isArray(options)) return [];
    if (options.length === 0) return options;
    return options.map(opt => {
        if (typeof opt === 'object') return new Option(opt);
        if (typeof opt === 'string' || typeof opt === 'number') {
            return new Option({
                label: String(opt),
                value: opt,
            })
        }
        return undefined;
    }).filter(opt => typeof opt !== 'undefined');
};

export const filterOptions = (options: Option[], query: string = '', includeEquals: boolean = true) => {
    if (query === '') return options;

    const q = String(query).toLowerCase();

    return options.filter((z: Option) => {
        let label = String(z.label).toLowerCase();
        return label.indexOf(q) !== -1
            && (includeEquals || label !== q);
    });
};

export const findOptionByValue = (options: Option[], query: ValidOptionValue) => {
    if (query === '') return undefined;

    return options.find((z: Option) => {
        return z.value == query;
    });
};

export const receiveOptions = (currentOptions: Option[], receivedOptions: Option[]) => {
    const set = new Set();
    const temp: Option[] = [...currentOptions, ...prepareOptions(receivedOptions)];
    const r: Option[] = [];
    temp.forEach(z => {
        let k = [z.value, z.label].join('-');
        if (!set.has(k)) {
            r.push(z);
            set.add(k);
        }
    });

    return r;
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