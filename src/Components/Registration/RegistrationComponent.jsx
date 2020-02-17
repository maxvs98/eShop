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
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      const { loadData } = this.props;
      loadData();
    }
  }

  handleChangeLogin(event) {
    this.setState({ login: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeSurname(event) {
    this.setState({ surname: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
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
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChangeLogin}
                    />
                    <input
                      type="password"
                      className="loginForm__input"
                      placeholder="password"
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChangePassword}
                    />
                    <input
                      type="password"
                      name="pass"
                      className="loginForm__input"
                      placeholder="confirm password"
                      required
                      id="pass"
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
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChangeName}
                    />
                    <input
                      type="text"
                      className="loginForm__input"
                      placeholder="last name"
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChangeSurname}
                    />
                    <input
                      type="text"
                      className="loginForm__input"
                      placeholder="email"
                      required
                      /* eslint-disable */
                      value={this.state.value}
                      /* eslint-enable */
                      onChange={this.handleChangeEmail}
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
