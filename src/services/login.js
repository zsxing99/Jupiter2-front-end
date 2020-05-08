import request from '@/utils/request';

export async function accountLogin(params) {
  return request('/Jupiter2_war/user/login', {
    method: 'POST',
    data: params,
  });
}
export async function accountLogout() {
  return request('/Jupiter2_war/user/logout', {
    method: 'GET',
    withCredentials: true,
  });
}
