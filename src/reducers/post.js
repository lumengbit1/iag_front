import { handleActions } from 'redux-actions';
import { fromJS, List } from 'immutable';
import {
  post_guess,
  post_guess_successed,
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
    [clear]: () => initialState,
  },
  initialState,
);

export default postReducer;
