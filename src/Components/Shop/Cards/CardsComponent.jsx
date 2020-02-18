import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard/ProductCardContainer';
import Modal from '../Modal/ModalContainer';

class CardsComponent extends Component {
  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      const { loadData } = this.props;
      loadData();
    }
  }

  render() {
    const { products, isReady, role } = this.props;
    return (
      <div>
        {role !== 'admin'
          ? ''
          : (
            <Modal
              onReceive={this.onReceiveState}
              buttonLabel="ADD PRODUCT"
              products={products}
            />
          )}
        <div className="cards__content">
          <Card.Group itemsPerRow={4}>
            {!isReady
              ? 'загрузка'
              : products.map((product, i) => (
                /* eslint-disable */
                <ProductCard key={i} {...product} />
                /* eslint-enable */
              ))}
          </Card.Group>
        </div>
      </div>
    );
  }
}

CardsComponent.propTypes = {
  loadData: PropTypes.func.isRequired,
  products: PropTypes.shape.isRequired,
  isReady: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
};

export default CardsComponent;
