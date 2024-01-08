import { App } from 'vue';

import { default as textField } from './lib-components/LktFieldText.vue';

import "./../lkt-field-text.css";

const LktFieldText = {
  install: (app: App) => {
    app.component('lkt-field-text', textField);
  },
};

export default LktFieldText;
