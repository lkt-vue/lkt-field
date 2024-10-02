import {App, Component, defineCustomElement, Plugin} from 'vue';
import LktFieldValidation from 'lkt-field-validation';

import { default as textField } from './lib-components/LktFieldText.vue';

export {setTextValueSlot, setTextEditSlot} from './functions/settings-functions';

import "../fonts/fontello/css/lkt-fields.css";
import "../styles/common-styles.css";
import "../styles/select-styles.css";
import "../styles/editor-styles.css";
import "../styles/switch-styles.css";
import "../styles/file-styles.css";
import "../styles/color-styles.css";
import "../styles/range-styles.css";
import "../styles/read-mode-styles.css";
import "../styles/calendar-styles.css";
import "../styles/palette-styles.css";
import "../styles/state-styles.css";
import "../styles/helper-styles.css";
import {Settings} from "./settings/Settings";
import LktModal, {addModal} from "lkt-modal";
import LktButton from "lkt-button";
import LktTooltip from "lkt-tooltip";
import LktTextLanguageEditModal from "./components/modals/LktTextLanguageEditModal.vue";

const LktFieldText: Plugin = {
  install: (app: App) => {
    // Register library components
    if (app.component('lkt-modal') === undefined) app.use(LktModal);
    if (app.component('lkt-button') === undefined) app.use(LktButton);
    if (app.component('lkt-tooltip') === undefined) app.use(LktTooltip);

    // Register plugin components
    if (app.component('lkt-field-text') === undefined) app.component('lkt-field-text', textField);
    if (app.component('lkt-field-validations') === undefined) app.use(LktFieldValidation);

    // Register modals
    addModal('lkt-field-language-edit', LktTextLanguageEditModal);
  },
};

export default LktFieldText;

export const setDefaultTextEmptyValueSlot = (str: string, component?: string|Component) => {
  Settings.defaultEmptyValueSlot = str;

  if (component) Settings.customValueSlots[str] = component;
}

export const setFieldUndoText = (text: string) => Settings.undoText = text;
export const setFieldClearText = (text: string) => Settings.clearText = text;
export const setFieldI18nText = (text: string) => Settings.i18nText = text;
export const setFieldSwitchEditionOnText = (text: string) => Settings.switchEditionOnText = text;
export const setFieldSwitchEditionOffText = (text: string) => Settings.switchEditionOffText = text;
export const setFieldShowPasswordOnText = (text: string) => Settings.showPasswordOnText = text;
export const setFieldShowPasswordOffText = (text: string) => Settings.showPasswordOffText = text;
