import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class AuthButton extends Component {
  render() {
    const { role, isAuth, login, logout } = this.props;
    return (
      isAuth ? (
        <p>
          <button class="auth-button"
            onClick={() => {
              logout("no");//logout(() => history.push("/"));
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <p>
          <button class="auth-button"
            onClick={() => {
              login("user");
            }}
          >
            Sign in
          </button>

        </p>
      )
    );
  }
}

export default AuthButton;
