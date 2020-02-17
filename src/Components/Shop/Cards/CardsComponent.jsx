import React, { Component } from 'react';
import { Container, Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard/ProductCardContainer';

class CardsComponent extends Component {
  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      const { loadData } = this.props;
      loadData();
    }
  }

  render() {
    const { products, isReady } = this.props;
    return (
      <div className="cards__content">
        <Container>
          <Card.Group itemsPerRow={4}>
            {!isReady
              ? 'загрузка'
              : products.map((product, i) => (
                /* eslint-disable */
                <ProductCard key={i} {...product} />
                /* eslint-enable */
              ))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

CardsComponent.propTypes = {
  loadData: PropTypes.func.isRequired,
  products: PropTypes.shape.isRequired,
  isReady: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default CardsComponent;
