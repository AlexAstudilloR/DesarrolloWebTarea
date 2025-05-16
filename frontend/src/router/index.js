import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import List from '../views/List.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/registro', component: Register },
  { path: '/lista', component: List },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
