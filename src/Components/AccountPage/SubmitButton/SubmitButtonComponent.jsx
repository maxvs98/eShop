import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'semantic-ui-react';

const SubmitButtonComponent = ({
  login, password, name, surname, email, role, id, removeRequest, changeUser,
}) => {
  const user = {
    id,
    'first name': name,
    'last name': surname,
    'e-mail': email,
    'remove request': removeRequest,
    login,
    password,
    role,
  };
  const handlerAddUser = () => {
    changeUser(id, user);
  };
  return (
    <div className="d-flex justify-content-center userPage__button">
      <Button
        type="submit"
        onClick={handlerAddUser}
        color="black"
      >
        confirm
      </Button>
    </div>
  );
};

SubmitButtonComponent.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  removeRequest: PropTypes.string.isRequired,
  changeUser: PropTypes.func.isRequired,
};

export default SubmitButtonComponent;
