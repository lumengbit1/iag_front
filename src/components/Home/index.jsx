import React from 'react';
import { useImmer } from 'use-immer';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { List } from 'immutable';
import { getHintAction, postGuessAction } from '../../reducers/actions';
import {
  HomePage,
  Hint,
  Input,
  Submit,
} from './Home.style';

const Home = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useImmer();

  const hintValue = useSelector((state) => state.getIn(['value', 'results', 'hint'])) || List();

  React.useEffect(() => {
    dispatch(getHintAction());
  }, []);

  return (
    <HomePage>
      <Hint>
        {hintValue}
      </Hint>

      <Input
        format="########"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      />

      <Submit
        onClick={() => dispatch(postGuessAction(_.join(hintValue.toJS(), ''), inputValue))}
      >
        Submit
      </Submit>
    </HomePage>
  );
};

export default Home;
