import { LktObject } from 'lkt-ts-interfaces';
export declare class LktColor {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(data: LktObject);
}
export declare const calculateColorValue: (r: number | string, g: number | string, b: number | string, a: number | string) => string;
export declare const decodeHexColor: (color: string) => LktColor;
export declare const getContrastFontColor: (color: LktColor) => "#000000" | "#ffffff";
