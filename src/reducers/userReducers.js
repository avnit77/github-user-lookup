import { FETCH_USER } from '../actions/userActions';

const initialState = {
  user: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USER:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
