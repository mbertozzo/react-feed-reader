export const UPDATE_QUERY = 'UPDATE QUERY';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const updateQuery = (query) => {
  return {type: UPDATE_QUERY, query}
}

export const apiCallSuccess = (news) => {
  return {type: API_CALL_SUCCESS, news}
}

export const apiCallFailure = (error) => {
  return {type: API_CALL_FAILURE, error}
}

