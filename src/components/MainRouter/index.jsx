import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHintAction } from '../../reducers/actions';
import Header from '../Header';
import Footer from '../Footer';
import {
  MainBodyContainer,
  Root,
} from './MainRouter.styles';

const MainRouter = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  const hintValue = useSelector((state) => state.getIn(['getReducer', 'results', 'hint']));
  const reponseValue = useSelector((state) => state.get('postReducer'));

  React.useEffect(() => {
    dispatch(getHintAction());
  }, [dispatch]);

  const cloned_props = { hintValue, reponseValue, ...rest };

  const _component = () => (
    <Root>
      <Header {...cloned_props} />

      <MainBodyContainer>
        <Component
          {...cloned_props}
        />
      </MainBodyContainer>

      <Footer {...cloned_props} />
    </Root>
  );

  return (
    <Route
      {...rest}
      render={_component}
    />
  );
};

MainRouter.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
};

MainRouter.defaultProps = {
  component: null,
};

export default MainRouter;
