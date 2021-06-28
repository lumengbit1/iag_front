import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import Routes from '../router/routers';
import getReducer from '../reducers/get';
import postReducer from '../reducers/post';
import App from '../App';

const store = createStore(combineReducers({ getReducer, postReducer }), applyMiddleware(thunk));

describe('Route Test', () => {
  it('Route Test', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <App>
              <Routes />
            </App>
          </MemoryRouter>
        </Provider>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
