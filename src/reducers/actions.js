import axios from 'axios';
import { createAction } from 'redux-actions';
import settings from '../settings';

export const get_hint = createAction('GET_HINT_REQUEST');

export const post_guess = createAction('POST_GUESS');

export const get_hint_loading = createAction('HINT_LOADING');

export const get_hint_successed = createAction('GET_HINT_RESOLVED');

export const post_guess_successed = createAction('POST_GUESS_RESOLVED');

export const get_failed = createAction('GET_REJECTED');

export const reset = createAction('RESET_REQUEST');

export const reset_successed = createAction('RESET_RESOLVED');

export const clear = createAction('CLEAR');

export const getHintAction = () => (dispatch) => {
  dispatch(get_hint());
  dispatch(get_hint_loading(true));

  return axios.get(`${settings.BASE_API_DOMAIN}/hint`)
    .then((response) => {
      dispatch(get_hint_loading(false));
      return dispatch(get_hint_successed(response));
    })
    .catch((error) => dispatch(get_failed(error)));
};

export const postGuessAction = (hintValue, inputValue) => (dispatch) => {
  dispatch(post_guess());

  return axios.post(
    `${settings.BASE_API_DOMAIN}/guess`,
    JSON.stringify({ hint: hintValue, answer: inputValue }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
    .then((response) => dispatch(post_guess_successed(response)));
};

export const resetAction = () => (dispatch) => {
  dispatch(reset());

  return axios.get(`${settings.BASE_API_DOMAIN}/reset`)
    .then((response) => dispatch(reset_successed(response)))
    .then(() => dispatch(clear()))
    .then(() => dispatch(getHintAction()))
    .catch((error) => dispatch(get_failed(error)));
};
