import * as actionTypes from '../actions/actionTypes';
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import api from '../../services/api';

function* signIn(action) {
  const { email, password } = action.payload;
  try {
    const customer = yield call(api.signIn, email, password);
    yield put(actions.SignInSucceed(customer.data));
  } catch (error) {
    yield put(actions.SignInFailed(error.message));
  }
}

function* showSearch() {
  yield takeEvery(actionTypes.SIGN_IN_REQUESTED, signIn);
}

export default showSearch;
