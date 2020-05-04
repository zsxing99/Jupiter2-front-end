import request from 'umi-request';

export async function accountLogin(params) {
  return request('/Jupiter2_war/server/api/user/login', {
    method: 'POST',
    data: params,
  });
}
