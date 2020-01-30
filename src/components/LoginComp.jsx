import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Footer from './Footer';
import Menu from '../containers/Menu';
import { Icon } from 'semantic-ui-react';

class Home extends Component {
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

export default Home;
