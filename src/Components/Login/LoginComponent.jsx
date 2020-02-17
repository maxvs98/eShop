import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../Footer/FooterComponent';
import Menu from '../Menu/MenuContainer';
import AuthButton from './AuthButton/AuthButtonContainer';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      const { loadData } = this.props;
      loadData();
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const {
      users, isReady,
    } = this.props;
    return (
      <div>
        <div className="header__content">
          <Menu />
        </div>
        <section id="login">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="form">
                  <div className="form__title">
                    SIGN IN
                  </div>
                  <div className="form__subtitle">
                    please enter your login and password
                  </div>
                  <div className="form__arrow">
                    <Icon name="angle down" inverted color="grey" size="large" />
                  </div>
                  <form className="loginForm">
                    <input
                      type="text"
                      name="name"
                      className="loginForm__input"
                      placeholder="login"
                      required
                      id="log"
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChange}
                    />
                    <input
                      type="password"
                      name="pass"
                      className="loginForm__input"
                      placeholder="password"
                      required
                      id="pass"
                    />
                    {/* eslint-disable */}
                    <AuthButton log={this.state.value} users={users} isReady={isReady} />
                    {/* eslint-enable */}
                  </form>
                  <Link to="/registration">
                    <div className="form__link">
                      i have not got an account
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

LoginComponent.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
  users: PropTypes.shape.isRequired,
  isReady: PropTypes.shape.isRequired,
};

export default LoginComponent;
