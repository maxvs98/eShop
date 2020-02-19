import React from 'react';
import Menu from '../Menu/MenuContainer';
import UserTable from './UserTable/UserTableContainer';
import Footer from '../Footer/FooterComponent';

const UsersComponent = () => (
  <div>
    <div className="header__content">
      <Menu />
    </div>
    <div className="main-content__table">
      <UserTable />
    </div>
    <Footer />
  </div>
);

export default UsersComponent;
