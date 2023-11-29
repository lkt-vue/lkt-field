import { App } from 'vue';

import { default as textField } from './lib-components/LktFieldText.vue';

const LktFieldText = {
  install: (app: App) => {
    app.component('lkt-field-text', textField);
  },
};

export default LktFieldText;
