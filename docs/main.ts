import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import MyVue3UI from '../src/index';
import '../src/styles/index.css';
import './styles/docs.css';
import routes from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(MyVue3UI);
app.mount('#app');