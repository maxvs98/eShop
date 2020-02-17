import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthButtonComponent = ({
  login, users,
}) => {
  const handlerAuthorize = () => {
    /* eslint-disable */
    for (let user in users) {
        login(user.id);
    }
  };
  return (
    <p>
      <Link to="/">
        <button
          className="loginForm__btn"
          type="submit"
          onClick={handlerAuthorize}
        >
          {users}
        </button>
      </Link>
    </p>
  );
};

AuthButtonComponent.propTypes = {
  login: PropTypes.func.isRequired,
  log: PropTypes.string.isRequired,
  users: PropTypes.shape.isRequired,
  isReady: PropTypes.bool.isRequired,
};

export default AuthButtonComponent;
