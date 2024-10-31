import { App } from 'vue';
import * as components from './components';

export * from './components';

export default {
  install: (app: App) => {
    for (const key in components) {
      // @ts-ignore
      app.component(key, components[key]);
    }
  },
};