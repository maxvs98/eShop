import React, { Component } from 'react';
import Menu from '../containers/Menu';
import { Container } from 'semantic-ui-react';

class Users extends Component {
  render() {
    return (
      <div>
        <div class="header__content">
          <Menu />
        </div>
        Users
      </div>
    );
  }
}

export default Users;
