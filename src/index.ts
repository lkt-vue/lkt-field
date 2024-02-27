import { App, Plugin } from 'vue';

import { default as textField } from './lib-components/LktFieldText.vue';

export {setTextValueSlot, setTextEditSlot} from './functions/settings-functions';

import "./../lkt-field-text.css";

const LktFieldText: Plugin = {
  install: (app: App) => {
    // Register plugin components
    if (app.component('lkt-field-text') === undefined) app.component('lkt-field-text', textField);
  },
};

export default LktFieldText;
