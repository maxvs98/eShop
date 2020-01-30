import React from 'react';
import {
  BrowserRouter as Router,
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

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuth ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.logout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
);

export default AuthButton;
