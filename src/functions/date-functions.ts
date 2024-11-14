import { date } from 'lkt-date-tools';

export const isValidDateObject = (date: any) => {
    return !(Object.prototype.toString.call(date) === '[object Date]' && isNaN(date));
}

export const getVisibleDateValue = (value: string|Date, format: string) => {
    if (typeof value === 'string') {
        value = new Date(value);
    }

    if (isValidDateObject(value)) return date(format, value);
    return '';
}