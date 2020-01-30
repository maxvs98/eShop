import React from 'react';
import { Menu, Popup, List, Button, Image, Icon } from 'semantic-ui-react';
import logo from '../logo.png';
import AuthButton from './AuthButton';
import { Link } from 'react-router-dom';

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
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-1 text-center">
          <a href="#">
            <div class="menuIcon"></div>
          </a>
        </div>
          <div class="col-md-3 text-center">
            <Link to="/">
              <img src={logo}/>
            </Link>
          </div>
          <div class="col-md-5">
            <div class="menu clearfix">
              <Link to="/">
                <div class="menu__item">
                  Home
                </div>
              </Link>
              <Link to="/shop">
                <div class="menu__item">
                  Show goods
                </div>
              </Link>
              <Link to="/users">
                <div class="menu__item">
                  Users
                </div>
              </Link>
            </div>
          </div>
          <div class="col-md-2">
            <a href="#">
              <div class="cart clearfix">
                <Popup
                  trigger = {
                    <div>
                      <div class="cart__icon"></div>
                      <div class="cart__text">CART</div>
                      <div class="cart__counter">{count}</div>
                    </div>
                  }
                  header={<p>{totalPrice} <Icon name='dollar sign' /></p>}
                  content={
                    items.map(product => <CartComponent {...product}/>)
                  }
                  on="click"
                  hideOnScroll
                  position='bottom center'
                  offset='0, 40px'
                />
              </div>
            </a>
          </div>
          <div class="col-md-1 text-center">
            <Link to="/login">
              <div class="signInButton">
                Sign in
              </div>
            </Link>
          </div>
      </div>
    </div>

  </div>
);

export default MenuComponent;
