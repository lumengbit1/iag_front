import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import {
  get_hint_successed,
  get_failed,
  get_hint,
  get_hint_loading,
  post_guess,
  post_guess_successed,
  post_failed,
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

const reducer = handleActions(
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
    [post_guess]: (state) => state,
    [post_guess_successed]: (state, action) => {
      const records = fromJS(action.payload.data);
      return state
        .setIn(['results', 'correct'], records.get('correct'))
        .setIn(['results', 'highlight'], records.get('highlight'));
    },
    [post_failed]: (state, action) => {
      const errors = fromJS(action.payload.data);
      return state.set('errors', errors);
    },
  },
  initialState,
);

export default reducer;
