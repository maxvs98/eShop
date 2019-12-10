import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

const ProductCard = ({ title, description, price, picture }) => (
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
  </Card>
)

export default ProductCard;
