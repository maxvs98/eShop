import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Shop from './Shop/ShopComponent';
import Users from './Users/UsersComponent';
import Home from './Home/HomeComponent';
import LoginComponent from './Login/LoginComponent';
import PrivateRoute from './PrivateRoute/PrivateRouteContainer';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/login" component={LoginComponent} />
      <PrivateRoute path="/users" component={Users} />
    </Switch>
  </Router>
);

export default App;
