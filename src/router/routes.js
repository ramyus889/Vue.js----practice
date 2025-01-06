import UseHome from '@/component/UseHome.vue';
import UseHome2 from '../component/UseHome2.vue';

export const routeUrl = [
  {
    path: '/'
  },
  {
    path: '/main'
  }
];

export const routes = [
  {
    path: `${routeUrl[0].path}`,
    component: UseHome
  },
  {
    path: `${routeUrl[1].path}`,
    component: UseHome2
  }
];
