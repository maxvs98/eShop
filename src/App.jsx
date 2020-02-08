import React, { Component } from 'react';
import Shop from './Shop/ShopComponent';
import Users from './Users/UsersComponent';
import Home from './Home/HomeComponent';
import LoginComponent from './Login/LoginComponent';
import PrivateRoute from './PrivateRoute/PrivateRouteContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const fakeAuth = {
  isAuth: false,
  authenticate(callback) {
    this.isAuth = true;
    setTimeout(callback, 100);
  },
  logout(callback) {
    this.isAuth = false;
    setTimeout(callback, 100);
  }
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/login" component={LoginComponent} />
          <PrivateRoute path="/users" component={Users} />
        </Switch>
      </Router>
    );
  }
}

export default App;
