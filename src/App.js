import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProducts } from './actions/products';

class App extends Component {
  render() {
    const { products } = this.props.products;
    const { setProducts } = this.props;
    const newProducts = [
      {
        id: 0,
        title: 'Shopping Cart'
      }
    ]
    return (
      <div>
        <h1>{products[0].title}</h1>
        <button onClick={setProducts.bind(this, newProducts)}>SET NEW PRODUCTS</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
