import React, { Component } from 'react';
import Footer from '../Footer/FooterComponent';
import Menu from '../Menu/MenuContainer';

class LoginComponent extends Component {
  render() {
    return (
      <div>
        <div class="header__content">
          <Menu />
        </div>
        <section id="advantages">
      		<div class="container">
            Login page
      		</div>
      	</section>
        <Footer />
      </div>
    );
  }
}

export default LoginComponent;
