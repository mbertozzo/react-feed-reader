import * as types from './actions';

const initialState = {
  query: null,
  error: null,
  news: []
}

export const reducers = (state = initialState, action) => {
  switch(action.type){
    case types.UPDATE_QUERY:
      return {...state, query: action.query};
    case types.API_CALL_SUCCESS:
      return {...state, news: action.news};
    case types.API_CALL_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
}