import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import "./styles.css";

// Fake Authentication Middleware


// Higher Order Component - Private Route


// Login Component


// Component Display Login Status


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Private Route</h1>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public Route</Link>
          </li>
          <li>
            <Link to="/protected">Private Route</Link>
          </li>
        </ul>
        <Route path="/public" render={() => <h1>You're in public route!</h1>} />


      </div>
    </Router>
  );
}

function Protected() {
  return <h3>You're in Protected Component!</h3>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
