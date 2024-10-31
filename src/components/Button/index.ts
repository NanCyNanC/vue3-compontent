import { App } from 'vue';
import Button from './Button.vue';

Button.install = (app: App) => {
  app.component('MButton', Button);
};

export default Button;