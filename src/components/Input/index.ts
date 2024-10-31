import { App } from 'vue';
import Input from './Input.vue';

Input.install = (app: App) => {
  app.component('MInput', Input);
};

export default Input;