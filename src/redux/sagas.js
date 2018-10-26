import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { UPDATE_QUERY, apiCallSuccess, apiCallFailure } from './actions';
import { API_KEY } from './apikey';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(UPDATE_QUERY, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchNews(query) {
  return axios({
    method: "get",
    url: "https://newsapi.org/v2/everything?q="+query+"&sortBy=publishedAt&apiKey="+API_KEY
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const { query } = action;
    if(query){
      const response = yield call(fetchNews, query);
      const news = response.data.articles;

      // dispatch a success action to the store with the new dog
      yield put(apiCallSuccess(news));
    }
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(apiCallFailure(error));
  }
}