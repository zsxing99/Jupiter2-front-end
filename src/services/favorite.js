import request from 'umi-request';

export async function setFavorite(params) {
  return request('/Jupiter2/history', {
    method: "POST",
    withCredentials: true,
    data: params
  });
}

export async function unsetFavorite(params) {
  return request('/Jupiter2/history', {
    method: "DELETE",
    withCredentials: true,
    data: params
  });
}
