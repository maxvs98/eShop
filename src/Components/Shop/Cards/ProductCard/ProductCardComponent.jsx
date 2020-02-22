import React from 'react';
import {
  Card, Image, Icon, Button,
} from 'semantic-ui-react';
import Rating from './Rating/RatingContainer';
import Modal from './Modal/ModalContainer';

const ProductCardComponent = (product) => {
  const {
    title,
    description,
    price,
    picture,
    addToCart,
    addedCount,
    id,
    productRating,
    role,
  } = product;

  const handlerAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card>
      {role !== 'admin'
        ? ''
        : (
          <Modal
            /* onReceive={this.onReceiveState} */
            product={product}
            id={id}
          />
        )}
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
    </Card>
  );
};

export default ProductCardComponent;
