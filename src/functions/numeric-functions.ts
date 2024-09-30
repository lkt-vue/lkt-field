export const ensureNumberBetween = (n: number|string, min: number|false, max: number|false) => {
    n = Number(n);

    if (min !== false && n < min) n = min;
    if (max !== false && n > max) n = max;

    return n;
}