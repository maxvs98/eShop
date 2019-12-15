import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const CartComponent = ({title, id, picture, removeFromCart}) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this,id)} color="red">Удалить</Button>
      </List.Content>
      <Image avatar src={picture} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item
      name='browse'
    >
      Магазин одежды
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item
        name='singup'
      >
        Итого: &nbsp; <b>{totalPrice}</b>
      </Menu.Item>

      <Popup
        trigger = {
          <Menu.Item name='help'>
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(product => <CartComponent {...product}/>)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
