import axios from 'axios';
import { Message } from 'element-ui/types/element-ui';
const service = axios.create({
  // baseURL: 'http://jsonplaceholder.typicode.com',
  // baseURL: 'http://127.0.0.1:3000',
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use((config) => {
  return config;
});

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response) {
      if (err.response.status === 400) {
        console.log('网络请求失败');
        Message({
          message: '网络请求失败',
          type: 'error',
        });
      } else if (err.response.status === 401) {
        console.log('未登录');
        Message({
          message: '未登录',
          type: 'error',
        });
      } else if (err.response.status === 403) {
        console.log('登录失效');
        Message({
          message: '登录失效',
          type: 'error',
        });
      }
    }
  }
);

export default service;
