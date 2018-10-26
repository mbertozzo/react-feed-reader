import * as types from './actions';

const initialState = {
  query: null,
  error: null,
  news: [],
  source: {
    id: null,
    name: null,
    news: []
  }
}

const updateSourceState = (state, action) => {
  switch(action.type){
    case types.UPDATE_SOURCE:
      return {...state, id: action.payload.id, name: action.payload.name};
    case types.API_SOURCE_CALL_SUCCESS:
      return {...state, news: action.news}
    default:
      return ( state.source )
  }
}

export const reducers = (state = initialState, action) => {
  switch(action.type){
    case types.UPDATE_QUERY:
      return {...state, query: action.query};
    case types.UPDATE_SOURCE:
      return {...state, source: updateSourceState(state.source, action)};
    case types.API_CALL_SUCCESS:
      return {...state, news: action.news};
    case types.API_SOURCE_CALL_SUCCESS:
      return {...state, source: updateSourceState(state.source, action)};
    case types.API_CALL_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
}