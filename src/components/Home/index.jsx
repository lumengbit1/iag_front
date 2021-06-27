import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHintAction } from '../../reducers/actions';
import {
  HomePage,
  Container,
  Attempt,
} from './Home.style';

const Home = () => {
  const dispatch = useDispatch();

  const reponseValue = useSelector((state) => state.get('postReducer'));

  React.useEffect(() => {
    dispatch(getHintAction());
  }, [dispatch]);

  return (
    <HomePage>
      {!reponseValue.isEmpty() && reponseValue.map((res, index) => (
        <Container key={res.get('answer')}>
          User Attempt&nbsp;
          {index + 1}
          &nbsp;--------&gt;
          <Attempt>
            {res.get('answer')}
          </Attempt>
        </Container>
      ))}
    </HomePage>
  );
};

export default Home;
