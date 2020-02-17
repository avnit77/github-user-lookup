import { FETCH_USER } from '../actions/userActions';

const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
