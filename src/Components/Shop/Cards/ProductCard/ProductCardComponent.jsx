import React from 'react';
import {
  Card, Image, Icon, Button,
} from 'semantic-ui-react';
import Rating from './Rating/RatingContainer';
import Modal from './Modal/ModalContainer';

const ProductCardComponent = (product) => {
  const {
    id,
    title,
    description,
    price,
    picture,
    addToCart,
    addedCount,
    role,
    mark,
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
            product={product}
            id={id}
            title={title}
          />
        )}
      <Image src={picture} className="card__img" height="300" centered />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{description}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon name="dollar sign" />
        {price}
        <br />
        <Rating stars={mark} product={product} />
      </Card.Content>
      <Button floated="left" onClick={handlerAddToCart} color="black">
        <span className="addButton__text">
          add to cart
          {addedCount > 0 && `(${addedCount})`}
        </span>
      </Button>
    </Card>
  );
};

export default ProductCardComponent;
