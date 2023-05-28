import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login.vue';
import Main from '@/pages/Main.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/main', component: Main },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
