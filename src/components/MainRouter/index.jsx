import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Header from '../Header';
import {
  MainBodyContainer,
  Root,
} from './MainRouter.styles';

const MainRouter = ({ component: Component, ...rest }) => {
  const cloned_props = { ...rest };
  const headerProps = cloned_props;

  const _component = () => (
    <Root>
      <Header
        {...headerProps}
      />

      <MainBodyContainer>
        <Component
          {...cloned_props}
        />
      </MainBodyContainer>
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
