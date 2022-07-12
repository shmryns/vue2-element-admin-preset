import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: () => import('../views/login'),
  },
  {
    path: '*',
    component: () => import('../views/404'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
