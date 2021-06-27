import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Root,
  Container,
  Hint,
  Title,
} from './Header.style';

const Header = (props) => (
  <Root>
    <Title>
      Guess The Password
    </Title>
    <Container>
      Hint --------&gt;
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
