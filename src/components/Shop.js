import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ProductCard from '../containers/ProductCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import Cards from '../containers/Cards';
import Footer from './Footer';
import { Card } from 'semantic-ui-react';

class Shop extends Component {
  render() {
    const { products, isReady } = this.props;
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

export default Shop;
