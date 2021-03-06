import React from 'react';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import Home from '../components/Home';
import getReducer from '../reducers/get';
import postReducer from '../reducers/post';

const store = createStore(combineReducers({ getReducer, postReducer }), applyMiddleware(thunk));

const mockData = fromJS([
  {
    correct: false,
    highlight: [],
    hint: 'test',
    answer: '1111',
  },
  {
    correct: false,
    highlight: [1],
    hint: 'test',
    answer: '2222',
  },
]);

describe('Render Test', () => {
  it('case: expect rendering correct', () => {
    const { container } = render(
      <Provider store={store}>
        <Home reponseValue={mockData} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
