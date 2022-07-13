import request from '@/utils/request';

// 登录
export const login = (data) => {
  return request({
    method: 'post',
    url: '/login',
    data,
  });
};