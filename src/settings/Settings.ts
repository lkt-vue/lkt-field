import {LktObject} from "lkt-ts-interfaces";

export class Settings {
    static defaultEmptyValueSlot: string = '';
    static customValueSlots: LktObject = {};
    static customEditSlots: LktObject = {};

    static undoText: string = '';
    static clearText: string = '';
    static switchEditionOnText: string = '';
    static switchEditionOffText: string = '';
    static showPasswordOnText: string = '';
    static showPasswordOffText: string = '';
}