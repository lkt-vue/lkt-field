import { Component, Plugin } from 'vue';
export { setTextValueSlot, setTextEditSlot } from './functions/settings-functions';
import "./../lkt-field-text.css";
declare const LktFieldText: Plugin;
export default LktFieldText;
export declare const setDefaultTextEmptyValueSlot: (str: string, component?: string | Component) => void;
