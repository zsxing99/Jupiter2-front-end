import request from 'umi-request';

export async function queryRecommendation(params) {
  return request('/Jupiter2_war/server/api/search', {
    method: "GET",
    withCredentials: true,
    params
  });
}
