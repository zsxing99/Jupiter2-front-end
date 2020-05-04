import request from '@/utils/request';

export async function queryCurrent() {
  return request('/Jupiter2_war/server/api/user/login', {
    method: 'GET',
    credentials: 'include'
  });
}

