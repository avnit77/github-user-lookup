import { getUser } from '../services/getUser';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => dispatch => {
  dispatch({ type: FETCH_USER_LOADING });
  return getUser()
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }));
};
