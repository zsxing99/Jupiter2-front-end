import request from 'umi-request';

export async function queryRecommendation(params) {
  return request('/Jupiter2_war/server/api/recommend', {
    method: "GET",
    withCredentials: true,
    param: params
  });
}
