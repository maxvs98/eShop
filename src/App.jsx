import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Shop from './Components/Shop/ShopComponent';
import Users from './Components/Users/UsersComponent';
import Home from './Components/Home/HomeComponent';
import LoginComponent from './Components/Login/LoginComponent';
import PrivateRoute from './Components/PrivateRoute/PrivateRouteContainer';

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
