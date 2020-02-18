import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Footer from '../Footer/FooterComponent';
import Menu from '../Menu/MenuContainer';
import SubmitButton from './SubmitButton/SubmitButtonContainer';

class RegistrationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      name: '',
      surname: '',
      email: '',
    };
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
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <div className="header__content">
          <Menu />
        </div>
        <section id="login">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <div className="form__title">
                  registration
                </div>
                <div className="form__subtitle">
                  please enter your details
                </div>
                <div className="form__arrow">
                  <Icon name="angle down" inverted color="grey" size="large" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="form">
                  <div className="form__subtitle">
                    login information
                  </div>
                  <form className="loginForm">
                    <input
                      type="text"
                      className="loginForm__input"
                      placeholder="login"
                      name="login"
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChange}
                    />
                    <input
                      type="password"
                      className="loginForm__input"
                      placeholder="password"
                      name="password"
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChange}
                    />
                    <input
                      type="password"
                      className="loginForm__input"
                      placeholder="confirm password"
                      required
                    />
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="form">
                  <div className="form__subtitle">
                    contact information
                  </div>
                  <form className="loginForm">
                    <input
                      type="text"
                      className="loginForm__input"
                      placeholder="first name"
                      name="name"
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="loginForm__input"
                      placeholder="last name"
                      name="surname"
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      className="loginForm__input"
                      placeholder="email"
                      name="email"
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChange}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                {/* eslint-disable */}
                <SubmitButton
                  log={this.state.login}
                  password={this.state.password}
                  name={this.state.name}
                  surname={this.state.surname}
                  email={this.state.email}
                />
                {/* eslint-enable */}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

RegistrationComponent.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default RegistrationComponent;
