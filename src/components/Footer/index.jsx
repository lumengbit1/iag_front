import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
// import { useImmer } from 'use-immer';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { postGuessAction, resetAction } from '../../reducers/actions';
import {
  Root,
  Input,
  Button,
  ButtonContainer,
  Text,
} from './Footer.style';

const Footer = (props) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');

  const isCorrect = !props.reponseValue.isEmpty() && props.reponseValue.last().get('correct');

  const reset = () => {
    dispatch(resetAction());
    setInputValue('');
  };

  const submit = () => {
    dispatch(postGuessAction(_.join(props.hintValue.toJS(), ''), inputValue));
    setInputValue('');
  };

  return (
    <Root>
      <Input
        data-testid="input"
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        maxLength="8"
        placeholder="Type Here"
      />
      {isCorrect && (
        <Text>
          Congratulations!
        </Text>
      )}
      <ButtonContainer>
        <Button
          data-testid="submit"
          onClick={submit}
          disabled={_.size(inputValue) < 8}
        >
          Submit
        </Button>

        <Button
          data-testid="reset"
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
  reponseValue: ImmutablePropTypes.list.isRequired,
};

export default Footer;
