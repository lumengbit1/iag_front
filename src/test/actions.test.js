import axios from 'axios';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import * as actions from '../reducers/actions';
import settings from '../settings';

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const baseHintUrl = () => `${settings.RESULTS_BASE_API_DOMAIN}/hint`;
const baseResetUrl = () => `${settings.RESULTS_BASE_API_DOMAIN}/reset`;
const baseGuessUrl = () => `${settings.RESULTS_BASE_API_DOMAIN}/guess`;

const store = mockStore();
const mock = new MockAdapter(axios);

describe('actions testing', () => {
  it('1.get_hint testing', () => {
    const expectedAction = {
      type: 'GET_HINT_REQUEST',
    };
    expect(actions.get_hint()).toEqual(expectedAction);
  });

  it('2.get_hint_successed testing', () => {
    const expectedAction = {
      type: 'GET_HINT_RESOLVED',
    };
    expect(actions.get_hint_successed()).toEqual(expectedAction);
  });

  it('3.post_guess testing', () => {
    const expectedAction = {
      type: 'POST_GUESS',
    };
    expect(actions.post_guess()).toEqual(expectedAction);
  });

  it('4.post_guess_successed testing', () => {
    const expectedAction = {
      type: 'POST_GUESS_RESOLVED',
    };
    expect(actions.post_guess_successed()).toEqual(expectedAction);
  });

  it('5.get_failed functionality testing', () => {
    const expectedAction = {
      type: 'GET_REJECTED',
    };
    expect(actions.get_failed()).toEqual(expectedAction);
  });

  it('6.get_hint_loading functionality testing', () => {
    const expectedAction = {
      type: 'HINT_LOADING',
    };
    expect(actions.get_hint_loading()).toEqual(expectedAction);
  });

  it('7.reset functionality testing', () => {
    const expectedAction = {
      type: 'RESET_REQUEST',
    };
    expect(actions.reset()).toEqual(expectedAction);
  });

  it('8.reset_successed functionality testing', () => {
    const expectedAction = {
      type: 'RESET_RESOLVED',
    };
    expect(actions.reset_successed()).toEqual(expectedAction);
  });

  it('9.clear functionality testing', () => {
    const expectedAction = {
      type: 'CLEAR',
    };
    expect(actions.clear()).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('1.creates GET_HINT_RESOLVED when getting hint has been done', () => {
    mock.onGet(baseHintUrl()).reply(200, { response: [{ item: 'item1' }, { item: 'item2' }] });

    const expectedActions = [
      { type: 'GET_HINT_REQUEST' },
      { type: 'HINT_LOADING' },
      {
        type: 'GET_HINT_RESOLVED',
        payload: [{ item: 'item1' }, { item: 'item2' }],
      },
    ];

    return store.dispatch(actions.getHintAction()).then((res) => {
      expect(store.getActions()).toEqual(expectedActions);

      return res;
    }).catch((err) => err);
  });

  it('2.creates RESET_RESOLVED when getting reset has been done', () => {
    mock.onGet(baseResetUrl()).reply(200, { response: [{ item: 'item1' }, { item: 'item2' }] });
    mock.onGet(baseHintUrl()).reply(200, { response: [{ item: 'item1' }, { item: 'item2' }] });

    const expectedActions = [
      { type: 'RESET_REQUEST' },
      {
        type: 'RESET_RESOLVED',
        payload: [{ item: 'item1' }, { item: 'item2' }],
      },
      { type: 'CLEAR' },
      { type: 'GET_HINT_REQUEST' },
      { type: 'HINT_LOADING' },
      {
        type: 'GET_HINT_RESOLVED',
        payload: [{ item: 'item1' }, { item: 'item2' }],
      },
    ];

    return store.dispatch(actions.resetAction()).then((res) => {
      expect(store.getActions()).toEqual(expectedActions);

      return res;
    }).catch((err) => err);
  });

  it('3.creates GET_REJECTED when fetching hint data faiture', () => {
    mock.onGet(baseHintUrl()).reply(404);

    const expectedActions = [
      { type: 'GET_REJECTED' },
    ];

    return store.dispatch(actions.getHintAction()).catch((err) => {
      expect(store.getActions()).toEqual(expectedActions);

      return err;
    });
  });

  it('4.creates postGuessAction', () => {
    mock.onPost(baseGuessUrl()).reply(200, { response: [{ item: 'item1' }, { item: 'item2' }] });

    const expectedActions = [
      { type: 'POST_GUESS' },
      { type: 'POST_GUESS_RESOLVED' },
    ];

    return store.dispatch(actions.postGuessAction()).then((res) => {
      expect(store.postActions()).toEqual(expectedActions);

      return res;
    }).catch((err) => err);
  });
});
