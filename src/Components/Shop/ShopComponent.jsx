import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Filter from './Filter/FilterContainer';
import Menu from '../Menu/MenuContainer';
import Cards from './Cards/CardsContainer';
import Footer from '../Footer/FooterComponent';

/* eslint-disable */
class ShopComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: '',
    };
    this.onReceiveState = this.onReceiveState.bind(this);
  }

  onReceiveState(state) {
    this.setState({
      todolist: state,
    });
  }

  render() {
    return (
      <div>
        <div className="header__content">
          <Menu />
        </div>
        <div className="container-fluid">
          <div className="devider" />
        </div>
        <div className="filter__content">
          <Container>
            <Filter />
          </Container>
        </div>
        <div className="main-content">
          <Container>
            <Cards />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ShopComponent;
