export const isValidDateObject = (date: any) => {
    return !(Object.prototype.toString.call(date) === '[object Date]' && isNaN(date));
}