import request from '@/utils/request';

export const getMenu = () => {
  return request({
    method: 'get',
    url: '/api/menu',
  });
};
