import React, { Component } from 'react';
import {
  Route,
  Redirect,
} from "react-router-dom";

class PrivateRouteComponent extends Component {
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

export default PrivateRouteComponent;
