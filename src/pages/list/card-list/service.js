import request from 'umi-request';

export async function queryFakeList(params) {
  return request('/Jupiter2_war/server/api/history', {
    method: 'GET',
    withCredentials: true,
    params
  });
}
