import { Message } from 'element-ui';
import storage from '@/utils/storage';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layout'),
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      auth: true,
    },
  },
  {
    path: '*',
    component: () => import('@/views/404'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.auth && !storage.getItem('token')) {
    Message({
      message: '请先登录',
      type: 'error',
    });
    next('/login');
  } else {
    next();
  }
});

export default router;
