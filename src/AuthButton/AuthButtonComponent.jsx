import React, { Component } from 'react';

class AuthButtonComponent extends Component {
  render() {
    const { isAuth, login, logout } = this.props;
    return (
      isAuth ? (
        <p>
          <button class="auth-button"
            onClick={() => {
              logout();//logout(() => history.push("/"));
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

export default AuthButtonComponent;
