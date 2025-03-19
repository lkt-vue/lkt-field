import { App, Component, Plugin } from 'vue';

import LktField, { default as libComponent } from './lib-components/LktField.vue';
import 'suneditor/dist/css/suneditor.min.css';
import '../styles/common-styles.css';
import '../styles/select-styles.css';
import '../styles/dropdown-styles.css';
import '../styles/editor-styles.css';
import '../styles/switch-styles.css';
import '../styles/file-styles.css';
import '../styles/color-styles.css';
import '../styles/buttons-styles.css';
import '../styles/range-styles.css';
import '../styles/read-mode-styles.css';
import '../styles/calendar-styles.css';
import '../styles/calc-styles.css';
import '../styles/palette-styles.css';
import '../styles/state-styles.css';
import '../styles/tags-styles.css';
import '../styles/helper-styles.css';
import { Settings } from './settings/Settings';
import { addModal } from 'lkt-modal';
import LktTextLanguageEditModal from './components/modals/LktTextLanguageEditModal.vue';
import { FieldConfig } from 'lkt-vue-kernel';
import LktBoxElementModal from '@/components/modals/LktBoxElementModal.vue';
import LktAccordionElementModal from '@/components/modals/LktAccordionElementModal.vue';
import LktIconElementModal from '@/components/modals/LktIconElementModal.vue';
import LktImageElementModal from '@/components/modals/LktImageElementModal.vue';
import LktAddElementModal from '@/components/modals/LktAddElementModal.vue';
import LktElementLayoutConfigModal from '@/components/modals/LktElementLayoutConfigModal.vue';

export { setTextValueSlot, setTextEditSlot } from './functions/settings-functions';

const LktFieldPlugin: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-field') === undefined) {
            app.component('lkt-field', libComponent);

            // Register modals
            addModal('lkt-field-language-edit', LktTextLanguageEditModal);
            addModal('lkt-field-add-element-config', LktAddElementModal);
            addModal('lkt-field-box-element-config', LktBoxElementModal);
            addModal('lkt-field-accordion-element-config', LktAccordionElementModal);
            addModal('lkt-field-icon-element-config', LktIconElementModal);
            addModal('lkt-field-image-element-config', LktImageElementModal);
            addModal('lkt-field-element-layout-config', LktElementLayoutConfigModal);
        }
    },
};

export default LktFieldPlugin;

export { LktField };

export { Field, Option } from 'lkt-vue-kernel';

export const setFieldEmptySlot = (component?: string | Component) => {
    Settings.defaultEmptyValueSlot = component;
};

export const setFieldOptionSlot = (name: string, component?: string | Component) => {
    Settings.optionSlots[name] = component;
};

export const setFieldUndoText = (text: string) => Settings.undoText = text;
export const setFieldClearText = (text: string) => Settings.clearText = text;
export const setFieldI18nText = (text: string) => Settings.i18nText = text;
export const setFieldSwitchEditionOnText = (text: string) => Settings.switchEditionOnText = text;
export const setFieldSwitchEditionOffText = (text: string) => Settings.switchEditionOffText = text;
export const setFieldShowPasswordOnText = (text: string) => Settings.showPasswordOnText = text;
export const setFieldShowPasswordOffText = (text: string) => Settings.showPasswordOffText = text;
export const setFieldDateReadFormat = (format: string) => Settings.dateReadFormat = format;
export const setFieldDefaultDateReadFormat = (format: string) => Settings.defaultDateReadFormat = format;


export const setFieldValidationMessage = (code: string, message: string, stack: string = 'default') => {
    if (!stack) stack = 'default';
    if (!Settings.validationMessages[stack]) Settings.validationMessages[stack] = {};
    Settings.validationMessages[stack][code] = message;
};

export const setFieldValidationIconSlot = (component: string | Component) => {
    Settings.validationIconSlot = component;
    return true;
};

export const setFieldNumberFormat = (
    decimals: number = 2,
    decimalSeparator: string = '.',
    thousandsSeparator: string = '.',
    removeDecimalsIfZero: boolean = true,
    lang: string = '',
) => {
    if (lang !== '') {
        Settings.langNumberFormat[lang].amountOfDecimals = decimals;
        Settings.langNumberFormat[lang].decimalSeparator = decimalSeparator;
        Settings.langNumberFormat[lang].thousandsSeparator = thousandsSeparator;
        Settings.langNumberFormat[lang].removeDecimalsIfZero = removeDecimalsIfZero;
        return true;
    }
    Settings.amountOfDecimals = decimals;
    Settings.decimalSeparator = decimalSeparator;
    Settings.thousandsSeparator = thousandsSeparator;
    Settings.removeDecimalsIfZero = removeDecimalsIfZero;
    return true;
};

export const setReadTextMaxLength = (length: number) => {
    Settings.readTextMaxLength = length;
};


export const setModalPerItemType = (itemType: string, modal: string) => {
    Settings.modalPerItemType[itemType] = modal;
};

declare module 'vue' {
    export interface GlobalComponents {
        LktField: typeof LktField & {
            props: FieldConfig;
        };
    }
}