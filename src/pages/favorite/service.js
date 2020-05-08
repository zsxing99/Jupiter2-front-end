import request from 'umi-request';

export async function queryFavorite(params) {
  return request('/Jupiter2/history', {
    method: "GET",
    withCredentials: true,
    param: params
  });
}

