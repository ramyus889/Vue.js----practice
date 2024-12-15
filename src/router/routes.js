import UseHome from '@/component/UseHome.vue';
import UseMain from '@/component/UseMain.vue';

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
    component: UseMain
  }
];
