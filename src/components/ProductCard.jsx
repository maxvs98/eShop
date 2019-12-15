import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const ProductCard = product => {
  const { title, description, price, picture, addToCart, addedCount } = product;
  return (
    <Card>
      <Image src={picture} width="400" height="300" centered />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>{description}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='rub' />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, product)} color='black'>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default ProductCard;
