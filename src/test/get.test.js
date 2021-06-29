import { fromJS } from 'immutable';
import reducer from '../reducers/get';

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

describe('Test reducer', () => {
  it('1.should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('2.should handle get_hint_successed', () => {
    const payload = {
      data: {
        correct: false,
        highlight: [],
        hint: 'test',
        answer: '',
      },
    };

    const expectedState = fromJS({
      results: {
        correct: false,
        highlight: [],
        hint: 'test',
        answer: '',
      },
      errors: {},
      loading: {
        hint: undefined,
      },
    });

    expect(reducer(initialState, {
      type: 'GET_HINT_RESOLVED',
      payload,
    })).toEqual(expectedState);
  });

  it('3.should handle get_hint', () => {
    expect(reducer(initialState, {
      type: 'GET_HINT_REQUEST',
    })).toEqual(initialState);
  });

  it('4.should handle get_failed', () => {
    const payload = {
      data: 'error',
    };

    const expectedState = fromJS({
      results: {
        correct: false,
        highlight: [],
        hint: '',
        answer: '',
      },
      errors: 'error',
      loading: {
        hint: undefined,
      },
    });
    expect(reducer(initialState, {
      type: 'GET_REJECTED',
      payload,
    })).toEqual(expectedState);
  });

  it('5.should handle get_hint_loading', () => {
    const payload = true;

    const expectedState = fromJS({
      results: {
        correct: false,
        highlight: [],
        hint: '',
        answer: '',
      },
      errors: {},
      loading: {
        hint: true,
      },
    });
    expect(reducer(initialState, {
      type: 'HINT_LOADING',
      payload,
    })).toEqual(expectedState);
  });

  it('6.should handle reset', () => {
    expect(reducer(initialState, {
      type: 'RESET_REQUEST',
    })).toEqual(initialState);
  });

  it('7.should handle reset_successed', () => {
    expect(reducer(initialState, {
      type: 'RESET_RESOLVED',
    })).toEqual(initialState);
  });
});
