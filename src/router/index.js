import { Message } from 'element-ui';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; //这个样式必须引入
import storage from '@/utils/storage';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layout'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/welcome'),
        meta: {
          title: '欢迎',
        },
      },
      {
        path: '/mall',
        name: 'mall',
        component: () => import('@/views/mall'),
        meta: {
          title: '商品管理',
        },
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user'),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: '/map1',
        name: 'map1',
        component: () => import('@/views/map1'),
        meta: {
          title: '百度地图',
        },
      },
      {
        path: '/map2',
        name: 'map2',
        component: () => import('@/views/map2'),
        meta: {
          title: '高德地图',
        },
      },
    ],
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

const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (storage.getItem('token')) {
    if (to.path === '/login') {
      Message({
        message: '您已登录',
        type: 'success',
      });
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      Message({
        message: '请先登录',
        type: 'error',
      });
      next('/login'); // 否则全部重定向到登录页
    }
  }
});
router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

export default router;
