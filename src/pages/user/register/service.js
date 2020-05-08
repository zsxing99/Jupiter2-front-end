import request from 'umi-request';

export async function register(params) {
  return request('/Jupiter2_war/user/register', {
    method: 'POST',
    data: JSON.stringify(params),
  });
}
