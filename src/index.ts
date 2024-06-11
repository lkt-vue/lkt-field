import {App, Component, Plugin} from 'vue';

import { default as textField } from './lib-components/LktFieldText.vue';

export {setTextValueSlot, setTextEditSlot} from './functions/settings-functions';

import "../style.css";
import {Settings} from "./settings/Settings";

const LktFieldText: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-text') === undefined) app.component('lkt-field-text', textField);
  },
};

export default LktFieldText;

export const setDefaultTextEmptyValueSlot = (str: string, component?: string|Component) => {
  Settings.defaultEmptyValueSlot = str;

  if (component) Settings.customValueSlots[str] = component;
}