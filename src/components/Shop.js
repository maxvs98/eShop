import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ProductCard from '../containers/ProductCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';

class Shop extends Component {
  componentDidMount() {
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, isReady } = this.props;

    return (
      <div>
        <div class="header__content">
          <Menu />
          <Container>
            <Filter />
          </Container>
        </div>
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

export default Shop;
