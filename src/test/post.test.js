import { List, fromJS } from 'immutable';
import reducer from '../reducers/post';

const initialState = List();

describe('Test reducer', () => {
  it('1.should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('2.should handle post_guess', () => {
    expect(reducer(initialState, {
      type: 'POST_GUESS',
    })).toEqual(initialState);
  });

  it('3.should handle post_guess_successed', () => {
    const payload = {
      data: [{
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
      }],
    };

    const expectedState = fromJS([{
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
    }]);

    expect(reducer(initialState, {
      type: 'POST_GUESS_RESOLVED',
      payload,
    })).toEqual(expectedState);
  });

  it('4.should handle clear', () => {
    expect(
      reducer(initialState, {
        type: 'CLEAR',
      }),
    ).toEqual(initialState);
  });
});
