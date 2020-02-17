import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubmitButtonComponent = ({
  log, password, name, surname, email, addUser, login,
}) => {
  const user = {
    id: Math.floor(Math.random() * (200 - 20)) + 200,
    login: log,
    password,
    'first name': name,
    'last name': surname,
    'e-mail': email,
    'remove request': 'false',
  };
  const handlerAddUser = () => {
    addUser(user);
    login('user');
  };
  return (
    <p>
      <Link to="/">
        <button
          className="regForm__btn"
          type="submit"
          onClick={handlerAddUser}
        >
          confirm
        </button>
      </Link>
    </p>
  );
};

SubmitButtonComponent.propTypes = {
  log: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  addUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default SubmitButtonComponent;
