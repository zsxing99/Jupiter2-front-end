import request from '@/utils/request';

export async function accountLogin(params) {
  return request('/Jupiter2_war/server/api/user/login', {
    method: 'POST',
    data: params,
  });
}
export async function accountLogout() {
  return request('/Jupiter2_war/server/api/user/logout', {
    method: 'GET',
    withCredentials: true,
  });
}
