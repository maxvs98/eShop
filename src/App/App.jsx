import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Shop from '../Components/Shop/ShopComponent';
import Users from '../Components/Users/UsersComponent';
import Home from '../Components/Home/HomeComponent';
import Login from '../Components/Login/LoginContainer';
import Registration from '../Components/Registration/RegistrationContainer';
import PrivateRoute from '../Components/PrivateRoute/PrivateRouteContainer';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <PrivateRoute path="/users" component={Users} />
    </Switch>
  </Router>
);

export default App;
