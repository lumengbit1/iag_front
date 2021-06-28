import React, { useState as useStateMock } from 'react';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import * as redux from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import Footer from '../components/Footer';
import getReducer from '../reducers/get';
import postReducer from '../reducers/post';
import settings from '../settings';

const store = createStore(combineReducers({ getReducer, postReducer }), applyMiddleware(thunk));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

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

const mockhint = fromJS([
  {
    correct: false,
    highlight: [],
    hint: 'test',
    answer: '1111',
  },
]);

afterEach(cleanup);

describe('Render Test', () => {
  const setInputValue = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((inputValue) => [inputValue, setInputValue]);
  });

  it('1: expect rendering correct', () => {
    const { container } = render(
      <Provider store={store}>
        <Footer reponseValue={mockData} hintValue={mockhint} />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('2: expect reset button onclick event', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(`${settings.BASE_API_DOMAIN}/reset`).reply(200, mockData);
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const { getByTestId } = render(
      <redux.Provider store={store}>
        <Footer reponseValue={mockData} hintValue={mockhint} />
      </redux.Provider>,
    );
    await waitFor(() => getByTestId('reset'));
    fireEvent.click(getByTestId('reset'));
    expect(mockDispatchFn).toBeCalled();
  });

  it('3: expect input onChange event', async () => {
    const onChangeMock = jest.fn();
    const event = {
      target: { value: '11111111' },
    };
    const { getByTestId } = render(
      <redux.Provider store={store}>
        <Footer reponseValue={mockData} onChange={onChangeMock} hintValue={mockhint} />
      </redux.Provider>,
    );
    await waitFor(() => getByTestId('input'));
    fireEvent.change(getByTestId('input'), event);
    expect(setInputValue).toBeCalledWith('11111111');
  });
});
