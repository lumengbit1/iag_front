import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import {
  HomePage,
  Container,
  Attempt,
  Num,
  AttemptText,
} from './Home.style';

const Home = () => {
  const reponseValue = useSelector((state) => state.get('postReducer'));

  return (
    <HomePage>
      {!reponseValue.isEmpty() && reponseValue.map((res, index) => (
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
};

export default Home;
