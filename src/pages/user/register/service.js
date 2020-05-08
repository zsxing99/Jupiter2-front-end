import request from 'umi-request';

export async function register(params) {
  return request('/Jupiter2/user/register', {
    method: 'POST',
    data: JSON.stringify(params),
  });
}
