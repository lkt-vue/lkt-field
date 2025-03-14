import { LktColor } from 'lkt-vue-kernel';
export declare const calculateColorValue: (r: number | string, g: number | string, b: number | string, a: number | string) => string;
export declare const decodeHexColor: (color: string) => LktColor;
export declare const getContrastFontColor: (color: LktColor) => "#000000" | "#ffffff";
