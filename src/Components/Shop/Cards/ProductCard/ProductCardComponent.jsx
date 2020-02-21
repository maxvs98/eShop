import React from 'react';
import {
  Card, Image, Icon, Button,
} from 'semantic-ui-react';
import Rating from './Rating/RatingContainer';

const ProductCardComponent = (product) => {
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
    role,
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
};

export default ProductCardComponent;
