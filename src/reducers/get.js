import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import {
  get_hint_successed,
  get_failed,
  get_hint,
  get_hint_loading,
  reset,
  reset_successed,
} from './actions';

const initialState = fromJS({
  results: {
    correct: false,
    highlight: [],
    hint: '',
    answer: '',
  },
  errors: {},
  loading: {
    hint: undefined,
  },
});

const getReducer = handleActions(
  {
    [get_hint]: (state) => state,
    [get_hint_loading]: (state, action) => {
      const records = fromJS(action.payload);
      return state.setIn(['loading', 'hint'], records);
    },
    [get_hint_successed]: (state, action) => {
      const records = fromJS(action.payload.data);
      return state.setIn(['results', 'hint'], records.get('hint'));
    },
    [get_failed]: (state, action) => {
      const errors = fromJS(action.payload.data);
      return state.set('errors', errors);
    },
    [reset]: (state) => state,
    [reset_successed]: (state) => state,
  },
  initialState,
);

export default getReducer;
