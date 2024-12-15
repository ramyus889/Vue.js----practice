import './style.css';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import Aura from '@primevue/themes/aura';
import { MotionPlugin } from '@vueuse/motion';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

import CustomButton from '../src/component/CustomComponents/CustomButton.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes.js';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

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
app.component('UsePrimeButton', Button);
app.component('UseButton', CustomButton);
app.use(ToastService);
app.use(MotionPlugin);
app.use(createPinia());
app.use(autoAnimatePlugin);
app.mount('#app');
