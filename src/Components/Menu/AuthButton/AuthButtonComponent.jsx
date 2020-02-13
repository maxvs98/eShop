import React from 'react';
import PropTypes from 'prop-types';

const AuthButtonComponent = ({
  isAuth, login, logout,
}) => (
  isAuth ? (
    <p>
      <button
        type="button"
        className="auth-button"
        onClick={() => {
          logout();
        }}
      >
            Sign out
      </button>
    </p>
  ) : (
    <p>
      <button
        className="auth-button"
        type="button"
        onClick={() => {
          login('user');
        }}
      >
        Sign in
      </button>
    </p>
  )
);

AuthButtonComponent.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AuthButtonComponent;
