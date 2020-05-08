import request from '@/utils/request';

export async function queryCurrent() {
  return request('/Jupiter2/user/login', {
    method: 'GET',
    credentials: 'include'
  });
}

