import {
  SIGN_IN_REQUESTED,
  SIGN_IN_SUCCEED,
  SIGN_IN_FAILED,
  SIGN_UP_REQUESTED,
  SIGN_UP_SUCCEED,
  SIGN_UP_FAILED,
  SIGN_OUT
} from '../actions/actionTypes';

const initialState = {
  isFetching: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUESTED:
      return state;

    case SIGN_IN_SUCCEED:
      return state;

    case SIGN_IN_FAILED:
      return state;

    case SIGN_UP_REQUESTED:
      return state;

    case SIGN_UP_SUCCEED:
      return state;

    case SIGN_UP_FAILED:
      return state;

    case SIGN_OUT:
      return state;

    default:
      return state;
  }
};

export default authReducer;
