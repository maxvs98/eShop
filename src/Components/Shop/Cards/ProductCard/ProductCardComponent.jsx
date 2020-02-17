import React from 'react';
import {
  Card, Image, Icon, Button,
} from 'semantic-ui-react';

const ProductCardComponent = (product) => {
  const {
    title, description, price, picture, addToCart, addedCount, removeProduct, id,
  } = product;
  const handlerAddToCart = () => {
    addToCart(product);
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
      </Card.Content>

      <Button floated="left" onClick={handlerAddToCart} color="black">

        Добавить в корзину
        {addedCount > 0 && `(${addedCount})`}
      </Button>
      {/* eslint-disable */}
      <Button floated='right' color='grey' size='tiny' onClick={removeProduct.bind(this,id)}>Удалить</Button>
      {/* eslint-enable */}
    </Card>
  );
};

export default ProductCardComponent;
