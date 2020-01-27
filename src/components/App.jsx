/*import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ProductCard from '../containers/ProductCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';

class App extends Component {
  componentDidMount() {
    const { setProducts } = this.props;
    axios.get('/products.json').then(({ data }) => {
      setProducts(data);
    });
  }

  render() {
    const { products, isReady } = this.props;

    return (
      <div>
        <div class="header__content">
          <Menu />
          <Container>
            <Filter />
          </Container>
        </div>
        <Container>
          <Card.Group itemsPerRow={4}>
            {!isReady
              ? 'загрузка'
              : products.map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default App;*/

import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ProductCard from '../containers/ProductCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';
import Shop from '../containers/Shop';
import Users from '../containers/Users';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/users" component={Users}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <div class="header__content">
      <Menu />
    </div>
    Home page
  </div>
);

export default App;
