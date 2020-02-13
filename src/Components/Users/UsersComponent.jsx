import React from 'react';
import { Container } from 'semantic-ui-react';
import Menu from '../Menu/MenuContainer';
import UserTable from './UserTable/UserTableContainer';
import Footer from '../Footer/FooterComponent';

const UsersComponent = () => (
  <div>
    <div className="header__content">
      <Menu />
    </div>
    <Container>
      <div className="main-content">
        <div className="main-content__table">
          <UserTable />
        </div>
      </div>
    </Container>
    <Footer />
  </div>
);

export default UsersComponent;
