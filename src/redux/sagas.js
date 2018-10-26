import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { UPDATE_QUERY, UPDATE_SOURCE, apiCallSuccess, apiCallFailure, apiSourceCallSuccess } from './actions';
import { API_KEY } from './apikey';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(UPDATE_QUERY, workerSaga);
  yield takeLatest(UPDATE_SOURCE, workerSourceSaga);
}

// function that makes the api request and returns a Promise for response
function fetchNews(query) {
  return axios({
    method: "get",
    url: `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`
  });
}

function fetchSourceNews(source) {
  return axios({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`
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

function* workerSourceSaga(action) {
  try {
    const id = action.payload.id;
    if(id){
      const response = yield call(fetchSourceNews, id);
      const news = response.data.articles;

      // dispatch a success action to the store with the new dog
      yield put(apiSourceCallSuccess(news));
    }
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(apiCallFailure(error));
  }
}