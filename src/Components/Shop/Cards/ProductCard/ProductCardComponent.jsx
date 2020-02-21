import React, { Component } from 'react';
import {
  Card, Image, Icon, Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Rating from './Rating/RatingContainer';

class ProductCardComponent extends Component {
  handlerAddToCart() {
    const { addToCart, product } = this.props;
    addToCart(product);
  }

  render() {
    const { product, role } = this.props;
    const {
      title,
      description,
      price,
      picture,
      addToCart,
      addedCount,
      removeProduct,
      id,
      productRating,
    } = product;
    const handlerAddToCart = () => {
      addToCart(product);
    };
    const handlerRemoveProduct = () => {
      removeProduct(id);
    };

    return (
      <Card>
        <Image src={picture} width="400" height="300" centered />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="date">{description}</span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="dollar sign" />
          {price}
          <p className="product__rating">
            <Rating stars={productRating} product={product} />
          </p>
        </Card.Content>
        <Button floated="left" onClick={handlerAddToCart} color="black">
          Добавить в корзину
          {addedCount > 0 && `(${addedCount})`}
        </Button>
        {role !== 'admin'
          ? ''
          : (
            <Button floated="right" color="grey" size="tiny" onClick={handlerRemoveProduct}>Удалить</Button>
          )}
      </Card>
    );
  }
}

ProductCardComponent.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  addedCount: PropTypes.bool.isRequired,
  removeProduct: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  productRating: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
};

export default ProductCardComponent;
