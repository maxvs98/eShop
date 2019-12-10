import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { setProducts } from './actions/products';
import axios from 'axios';
import Menu from './components/Menu';
import ProductCard from './components/ProductCard';
import { Card } from 'semantic-ui-react';

class App extends Component {
  componentWillMount() {
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'загрузка'
            : products.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
        </Card.Group>
      </Container>

    );
  }

}

const mapStateToProps = ({ products }) => ({
  products: products.items,
  isReady: products.isReady
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
