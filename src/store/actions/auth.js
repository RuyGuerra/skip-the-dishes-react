import * as actionTypes from './actionTypes';

export const signInRequested = (email, password) => {
  return {
    type: actionTypes.SIGN_IN_REQUESTED,
    payload: { email, password }
  };
};

export const signInSucceed = customer => {
  return {
    type: actionTypes.SIGN_IN_SUCCEED,
    payload: { customer }
  };
};

export const signInFailed = error => {
  return {
    type: actionTypes.SIGN_IN_FAILED,
    payload: { error }
  };
};
