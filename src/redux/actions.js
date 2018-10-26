export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_SOURCE = 'UPDATE_SOURCE';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const updateQuery = (query) => {
  return {type: UPDATE_QUERY, query}
}

export const updateSource = (id, name) => {
  return {type: UPDATE_SOURCE, payload: {id, name}}
}

export const apiCallSuccess = (news) => {
  return {type: API_CALL_SUCCESS, news}
}

export const apiCallFailure = (error) => {
  return {type: API_CALL_FAILURE, error}
}

