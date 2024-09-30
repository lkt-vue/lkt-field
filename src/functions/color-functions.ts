import {LktObject} from "lkt-ts-interfaces";

export class LktColor {
    r: number = 0;
    g: number = 0;
    b: number = 0;
    a: number = 255;

    constructor(data: LktObject) {
        for (let k in data) {
            if (this.hasOwnProperty(k)) this[k] = data[k];
        }
    }
}

export const calculateColorValue = (r, g, b, a) => {
    let red = parseInt(r).toString(16).padStart(2, '0').toUpperCase(),
        green = parseInt(g).toString(16).padStart(2, '0').toUpperCase(),
        blue = parseInt(b).toString(16).padStart(2, '0').toUpperCase(),
        color = '#' + red + green + blue
    ;

    if (a == 255) return color;

    let alpha = parseInt(a).toString(16).padStart(2, '0').toUpperCase();
    return color + alpha;
}

export const decodeHexColor = (color: string): LktColor => {
    let r = parseInt(Number('0x' + color.substring(1, 3)), 10);
    let g = parseInt(Number('0x' + color.substring(3, 5)), 10);
    let b = parseInt(Number('0x' + color.substring(5, 7)), 10);
    let a = 255;

    if (color.length === 9) {
        a = parseInt(Number('0x' + color.substring(5, 7)), 10);
    }

    return new LktColor({r, g, b, a});
}

export const getContrastFontColor = (color: LktColor) => {
    // Counting the perceptive luminance - human eye favors green color...
    let luminance = (0.299 * color.r + 0.587 * color.g + 0.114 * color.b) / color.a;

    if (luminance > 0.5) return '#000000'; // bright colors - black font

    return '#ffffff'; // dark colors - white font
}