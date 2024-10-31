import { App } from 'vue';
import Tag from './Tag.vue';

Tag.install = (app: App) => {
  app.component('MTag', Tag);
};

export default Tag;