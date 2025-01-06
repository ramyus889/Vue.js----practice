import './style.css';

import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes.js';

const app = createApp(App);

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  components,
  directives
});

const router = createRouter({
  history: createWebHistory(),
  routes
});

app.use(vuetify);
app.use(router);
app.use(MotionPlugin);
app.use(createPinia());
app.mount('#app');
