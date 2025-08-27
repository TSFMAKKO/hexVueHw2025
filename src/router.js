import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './views/Home.vue';
import Practice1 from './views/Practice1.vue';
import Practice2 from './views/Practice2.vue';
import Practice3 from './views/Practice3.vue';
import Practice4 from './views/Practice4.vue';

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
  {
    path: '/practice2',
    name: 'Practice2',
    component: Practice2,
  },
  {
    path: '/practice3',
    name: 'Practice3',
    component: Practice3,
  },
  {
    path: '/practice4',
    name: 'Practice4',
    component: Practice4,
  },
];

const router = createRouter({
  history: createWebHashHistory("hexVueHw2025"),
  routes,
});

export default router;
