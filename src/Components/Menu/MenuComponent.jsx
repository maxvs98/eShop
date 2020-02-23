import React from 'react';
import {
  Popup, List, Button, Image, Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './img/logo.png';
import AuthButton from './AuthButton/AuthButtonContainer';

const CartComponent = ({
  title, id, picture, removeFromCart,
}) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        {/* eslint-disable */}
        <Button onClick={removeFromCart.bind(this,id)} color="white">Удалить</Button>
        {/* eslint-enable */}
      </List.Content>
      <Image avatar src={picture} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

CartComponent.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const MenuComponent = ({
  totalPrice, count, items, log, role, clearCart, setFilter,
}) => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-1 text-center">
          <a href="/">
            <div className="menuIcon" />
          </a>
        </div>
        <div className="col-md-3 text-center">
          <Link to="/">
            <img alt="logo" src={logo} />
          </Link>
        </div>
        <div className="col-md-5">
          <div className="menu clearfix">
            {role !== null
              ? (
                <Link to="/">
                  <div className="menu__item">
                    Home
                  </div>
                </Link>
              ) : (
                ''
              )}
            {role !== null
              ? (
                <Link to="/shop">
                  <div className="menu__item">
                    Show goods
                  </div>
                </Link>
              ) : (
                ''
              )}
            {role === 'admin'
              ? (
                <Link to="/users">
                  <div className="menu__item">
                    Users
                  </div>
                </Link>
              ) : (
                <div />
              )}
            {role !== null
              ? (
                <Link to="/account">
                  <div className="menu__item">
                    Account
                  </div>
                </Link>
              ) : (
                ''
              )}
          </div>
        </div>
        <div className="col-md-2">
          <div className="cart clearfix">
            <Popup
              trigger={
                (
                  <div>
                    <div className="cart__icon" />
                    <div className="cart__text">CART</div>
                    <div className="cart__counter">{count}</div>
                  </div>
                )
                }
              header={
                (
                  <p>
                    {totalPrice}
                    <Icon name="dollar sign" />
                  </p>
              )
              }
              content={
                /* eslint-disable */
                  items.map(product => <CartComponent {...product}/>)
                /* eslint-enable */
                }
              on="click"
              hideOnScroll
              position="bottom center"
              offset="0, 40px"
            />
          </div>
        </div>
        <div className="col-md-1 text-center">
          <div className="role__text">{log}</div>
          <AuthButton clearCart={clearCart} setFilter={setFilter} />
        </div>
      </div>
    </div>
  </div>
);

MenuComponent.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  items: PropTypes.shape.isRequired,
  log: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  clearCart: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default MenuComponent;
