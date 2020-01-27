import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import UserRow from './UserRow';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';

class Users extends Component {
  componentDidMount() {
    const { setUsers } = this.props;
    axios.get('/users.json').then(({ data }) => {
      setUsers(data);
    });
  }



  render() {
    const { users, isReady } = this.props;



    return (
      <div>
        <div class="header__content">
          <Menu />
        </div>
        <Container>
        <div class="main-content">
          <div class="main-content__table">
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
           </div>
         </div>
         </Container>
       </div>
    );
  }
}

export default Users;
