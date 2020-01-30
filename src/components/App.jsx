import React, { Component } from 'react';
import Shop from './Shop';
import Users from './Users';
import Home from './Home';
import LoginComp from './LoginComp';

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
          <Route path="/login" component={LoginComp} />
          <PrivateRoute path="/users" component={Users} />
        </Switch>
      </Router>
    );
  }
}

const PrivateRoute = ({ component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuth ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default App;
