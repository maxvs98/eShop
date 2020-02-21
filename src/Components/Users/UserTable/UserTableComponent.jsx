import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'semantic-ui-react';

class UserTableComponent extends Component {
  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      const { loadData } = this.props;
      loadData();
    }
  }

  render() {
    const {
      users, isReady, removeUser,
    } = this.props;
    return (
      <table>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Remove request</th>
        </tr>
        {!isReady
          ? 'загрузка'
          : users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user['first name']}</td>
              <td>{user['last name']}</td>
              <td>{user['e-mail']}</td>
              <td>{user.role}</td>
              {user['remove request'] === 'true'
                ? (
                  <td>
                    {/* eslint-disable */}
                    <Button compact color="black" size="tiny" onClick={removeUser.bind(this,user['id'])}>
                    {/* eslint-enable */}
                      Удалить
                    </Button>
                  </td>
                )
                : <td />}
            </tr>
          ))}
      </table>
    );
  }
}

UserTableComponent.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      'first name': PropTypes.string.isRequired,
      'last name': PropTypes.string.isRequired,
      'e-mail': PropTypes.string.isRequired,
      'remove request': PropTypes.string.isRequired,
    }),
  ).isRequired,
  isReady: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default UserTableComponent;
