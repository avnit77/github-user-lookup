import { getUser } from '../services/getUser';

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = (username) => dispatch => {
  return getUser(username)
    .then(user => dispatch({
      type: FETCH_USER,
      payload: user
    }));
};
