import {App, Component, Plugin} from 'vue';
import LktFieldValidation from 'lkt-field-validation';

import { default as textField } from './lib-components/LktFieldText.vue';

export {setTextValueSlot, setTextEditSlot} from './functions/settings-functions';

import "../styles/common-styles.css";
import "../styles/select-styles.css";
import "../styles/switch-styles.css";
import "../styles/read-mode-styles.css";
import "../styles/palette-styles.css";
import "../styles/state-styles.css";
import {Settings} from "./settings/Settings";

const LktFieldText: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-text') === undefined) app.component('lkt-field-text', textField);
    if (app.component('lkt-field-validations') === undefined) app.use(LktFieldValidation);
  },
};

export default LktFieldText;

export const setDefaultTextEmptyValueSlot = (str: string, component?: string|Component) => {
  Settings.defaultEmptyValueSlot = str;

  if (component) Settings.customValueSlots[str] = component;
}