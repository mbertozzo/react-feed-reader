import * as types from './actions';

const initialState = {
  query: null
}

export const reducers = (state = initialState, action) => {
  switch(action.type){
    case types.UPDATE_QUERY:
      return {...state, query: action.query};
    default:
      return state;
  }
}