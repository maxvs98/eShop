import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const { isAuth, component: Comp, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          isAuth ? (
            <Comp {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
