import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { useImmer } from 'use-immer';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { postGuessAction, resetAction } from '../../reducers/actions';
import {
  Root,
  Input,
  Button,
  ButtonContainer,
} from './Footer.style';

const Footer = (props) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useImmer('');

  const reset = () => {
    dispatch(resetAction());
    setInputValue('');
  };

  return (
    <Root>
      <Input
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        maxLength="8"
      />

      <ButtonContainer>
        <Button
          onClick={() => dispatch(postGuessAction(_.join(props.hintValue.toJS(), ''), inputValue))}
          disabled={_.size(inputValue) < 8}
        >
          Submit
        </Button>

        <Button
          onClick={reset}
        >
          Reset
        </Button>
      </ButtonContainer>
    </Root>
  );
};

Footer.propTypes = {
  hintValue: ImmutablePropTypes.list.isRequired,
};

export default Footer;
