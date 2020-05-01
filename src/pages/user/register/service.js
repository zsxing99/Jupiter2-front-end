import request from 'umi-request';

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}

export async function register(params) {
  return request('/server/api/user/register', {
    method: 'POST',
    data: JSON.stringify(params),
  });
}
