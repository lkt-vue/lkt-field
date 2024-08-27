import { Component, Plugin } from 'vue';
export { setTextValueSlot, setTextEditSlot } from './functions/settings-functions';
import "../fonts/fontello/css/lkt-fields.css";
import "../styles/common-styles.css";
import "../styles/select-styles.css";
import "../styles/switch-styles.css";
import "../styles/file-styles.css";
import "../styles/read-mode-styles.css";
import "../styles/palette-styles.css";
import "../styles/state-styles.css";
import "../styles/helper-styles.css";
declare const LktFieldText: Plugin;
export default LktFieldText;
export declare const setDefaultTextEmptyValueSlot: (str: string, component?: string | Component) => void;
