import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const PrivateRouteComponent = ({
  isAuth, role, component: Comp, ...rest
}) => (
  <Route
  /* eslint-disable */
    {...rest}
  /* eslint-enable */
    render={(props) => (role === 'admin' ? (
      /* eslint-disable */
      <Comp {...props} />
      /* eslint-enable */
    ) : (
      <Redirect
        to={{ pathname: '/login', state: { from: props.location } }}
      />
    ))}
  />
);

PrivateRouteComponent.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
  component: PropTypes.shape.isRequired,
  role: PropTypes.string.isRequired,
};

export default PrivateRouteComponent;
