import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Practice1 from './views/Practice1.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/practice1',
    name: 'Practice1',
    component: Practice1,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
