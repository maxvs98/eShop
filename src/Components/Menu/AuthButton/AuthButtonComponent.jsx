import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthButtonComponent = ({
  isAuth, logout,
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
      <Link to="/login">
        <button
          className="auth-button"
          type="button"
        >
          Sign in
        </button>
      </Link>
    </p>
  )
);

AuthButtonComponent.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AuthButtonComponent;
