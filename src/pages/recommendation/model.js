import { queryRecommendation } from './service';

const Model = {
  namespace: 'recommendationList',
  state: {
    list: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryRecommendation, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },
  reducers: {
    queryList(state, action) {
      return { ...state, list: action.payload };
    },
  },
};
export default Model;
