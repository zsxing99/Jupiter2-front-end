import request from 'umi-request';

export async function queryRecommendation(params) {
  return request('/Jupiter2/recommend', {
    method: "GET",
    withCredentials: true,
    params
  });
}
