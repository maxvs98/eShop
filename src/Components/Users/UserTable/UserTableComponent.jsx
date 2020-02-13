import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'semantic-ui-react';

class UserTableComponent extends Component {
  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const {
      users, isReady, removeUser,
    } = this.props;
    return (
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Remove request</th>
        </tr>
        {!isReady
          ? 'загрузка'
          : users.map((user) => (
            <tr>
              <td>{user['first name']}</td>
              <td>{user['last name']}</td>
              <td>{user['e-mail']}</td>
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
                : <td>false</td>}
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
  loadData: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
};

export default UserTableComponent;
