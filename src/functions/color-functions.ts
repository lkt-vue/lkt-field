import { LktColor } from 'lkt-vue-kernel';

export const calculateColorValue = (r: number | string, g: number | string, b: number | string, a: number | string) => {
    return new LktColor({r,g,b,a}).toString();
};

export const decodeHexColor = (color: string): LktColor => {
    return LktColor.fromHexColor(color);
};

export const getContrastFontColor = (color: LktColor) => {
    return color.getContrastFontColor();
};