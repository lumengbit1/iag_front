import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Root,
  Container,
  Hint,
  Title,
  HintText,
} from './Header.style';

const Header = (props) => (
  <Root>
    <Title>
      Guess The Password
    </Title>
    <Container>
      Hint
      <HintText>
        --------&gt;
      </HintText>
      <Hint>
        {props.hintValue}
      </Hint>
    </Container>
  </Root>
);

Header.propTypes = {
  hintValue: ImmutablePropTypes.list.isRequired,
};

export default Header;
