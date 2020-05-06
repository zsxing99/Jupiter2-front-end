import request from 'umi-request';

export async function setFavorite(params) {
  return request('/Jupiter2_war/server/api/history', {
    method: "POST",
    withCredentials: true,
    data: params
  });
}

export async function unsetFavorite(params) {
  return request('/Jupiter2_war/server/api/history', {
    method: "DELETE",
    withCredentials: true,
    data: params
  });
}