import { handleActions } from 'redux-actions';
import { fromJS, List } from 'immutable';
import {
  post_guess,
  post_guess_successed,
  post_failed,
  clear,
} from './actions';

const initialState = List();

const postReducer = handleActions(
  {
    [post_guess]: (state) => state,
    [post_guess_successed]: (state, action) => {
      const records = fromJS(action.payload.data);
      return records;
    },
    [post_failed]: (state, action) => {
      const errors = fromJS(action.payload.data);
      return state.set('errors', errors);
    },
    [clear]: () => initialState,
  },
  initialState,
);

export default postReducer;
