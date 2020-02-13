import React from 'react';
import Footer from '../Footer/FooterComponent';
import Menu from '../Menu/MenuContainer';

const LoginComponent = () => (
  <div>
    <div className="header__content">
      <Menu />
    </div>
    <section id="advantages">
      <div className="container">
          Login page
      </div>
    </section>
    <Footer />
  </div>
);

export default LoginComponent;
