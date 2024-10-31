import { RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import ButtonDemo from './views/ButtonDemo.vue';
import InputDemo from './views/InputDemo.vue';
import TagDemo from './views/TagDemo.vue';
import MessageDemo from './views/MessageDemo.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/components/button',
    component: ButtonDemo,
  },
  {
    path: '/components/input',
    component: InputDemo,
  },
  {
    path: '/components/tag',
    component: TagDemo,
  },
  {
    path: '/components/message',
    component: MessageDemo,
  },
];

export default routes;