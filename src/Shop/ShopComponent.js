import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Filter from '../Filter/FilterContainer';
import Menu from '../Menu/MenuContainer';
import Cards from '../Cards/CardsContainer';
import Footer from '../Footer/FooterComponent';

class ShopComponent extends Component {
  render() {
    return (
      <div>
        <div class="header__content">
          <Menu />
        </div>
        <div class="container-fluid">
          <div class="devider">
          </div>
        </div>
        <div class="filter__content">
          <Container>
            <Filter />
          </Container>
        </div>
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default ShopComponent;
