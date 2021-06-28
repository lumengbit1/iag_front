import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import _ from 'lodash';
import {
  HomePage,
  Container,
  Attempt,
  Num,
  AttemptText,
} from './Home.style';

const Home = (props) => (
  <HomePage>
    {!props.reponseValue.isEmpty() && props.reponseValue.map((res, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Container key={index}>
        User Attempt&nbsp;
        {index + 1}
        <AttemptText>
          &nbsp;--------&gt;
        </AttemptText>
        <Attempt>
          {_.split(res.get('answer'), '').map((item, idx) => (
            <Num
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              highlight={!_.isUndefined(res.get('highlight').find((val) => val === idx))}
            >
              {item}
            </Num>
          ))}
        </Attempt>
      </Container>
    ))}
  </HomePage>
);

Home.propTypes = {
  reponseValue: ImmutablePropTypes.list.isRequired,
};

export default Home;
