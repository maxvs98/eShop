import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import Menu from '../containers/Menu';
import UserTable from '../containers/UserTable';
import Footer from './Footer';

class Users extends Component {
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
              <UserTable />
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Users;
