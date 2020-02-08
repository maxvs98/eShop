import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axiosInstance from '../axiosInstance';
import ProductCard from '../ProductCard/ProductCardContainer';
import { Card } from 'semantic-ui-react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import users from '../reducers/users';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class CardsComponent extends Component {

  componentDidMount() {
    const { loadData } = this.props;
    //создать instance
    loadData();
  }

  render() {
    const { products, isReady } = this.props;
    return (
      <div class="cards__content">
        <Container>
          <Card.Group itemsPerRow={4}>
            {!isReady
              ? 'загрузка'
              : products.map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default CardsComponent;
