import request from 'umi-request';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function accountLogin(params) {
  return request('/server/api/user/login', {
    method: 'POST',
    data: params,
  });
}
