import { App } from 'vue';
export { setTextValueSlot, setTextEditSlot } from './functions/settings-functions';
import "./../lkt-field-text.css";
declare const LktFieldText: {
    install: (app: App) => void;
};
export default LktFieldText;
