import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

class UserTable extends Component {
  componentDidMount() {
    const { setUsers } = this.props;
    axios.get('/users.json').then(({ data }) => {
      setUsers(data);
    });
  }
  render() {
    const { users, isReady } = this.props;
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
            : users.map((user, i) => (
              <tr key={i}>
                <td>{user['first name']}</td>
                <td>{user['last name']}</td>
                <td>{user['e-mail']}</td>
                <td>{user['remove request']}</td>
              </tr>
            ))}
       </table>
    );
  }
}

export default UserTable;
