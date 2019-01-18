import axios from 'axios';
// import { delay } from 'redux-saga';

const API_ROOT = 'http://api.tvmaze.com/';

const signIn = (email, password) => {
  const url = `${API_ROOT}/`;
  return axios.get(url);
  // return delay(3000);
};

export { signIn };
