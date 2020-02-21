import React, { Component } from 'react';
import {
  Container, Input, Form,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Menu from '../Menu/MenuContainer';
import Footer from '../Footer/FooterComponent';
import SubmitButton from './SubmitButton/SubmitButtonContainer';

class AccountPageComponent extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      id: user.id,
      login: user.login,
      password: user.password,
      name: user['first name'],
      surname: user['last name'],
      email: user['e-mail'],
      removeRequest: user['remove request'],
      role: user.role,
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
    const {
      user, isReady,
    } = this.props;
    const {
      id, login, password, name, surname, email, removeRequest, role,
    } = this.state;
    return (
      <div>
        <div className="header__content">
          <Menu />
        </div>
        <Container>
          <div className="main-content">
            <div className="main-content__title">
              USER INFO
            </div>
            <div className="main-content__userData">
              {!isReady
                ? ('загрузка')
                : (
                  <Form>
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'circle outline',
                        content: 'first name',
                      }}
                      name="name"
                      actionPosition="left"
                      placeholder="first name"
                      defaultValue={user['first name']}
                      onChange={this.handleChange}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'circle outline',
                        content: 'last name',
                      }}
                      name="surname"
                      actionPosition="left"
                      placeholder="last name"
                      defaultValue={user['last name']}
                      onChange={this.handleChange}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'circle outline',
                        content: 'e-mail',
                      }}
                      name="email"
                      actionPosition="left"
                      placeholder="e-mail"
                      defaultValue={user['e-mail']}
                      onChange={this.handleChange}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'circle outline',
                        content: 'remove request',
                      }}
                      name="removeRequest"
                      actionPosition="left"
                      placeholder="remove request"
                      defaultValue={user['remove request']}
                      onChange={this.handleChange}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'circle outline',
                        content: 'login',
                      }}
                      name="login"
                      actionPosition="left"
                      placeholder="login"
                      defaultValue={user.login}
                      onChange={this.handleChange}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'circle outline',
                        content: 'password',
                      }}
                      name="password"
                      actionPosition="left"
                      placeholder="password"
                      type="password"
                      defaultValue={user.password}
                      onChange={this.handleChange}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'circle outline',
                        content: 'role',
                      }}
                      name="role"
                      actionPosition="left"
                      placeholder="role"
                      value={user.role}
                    />
                    <SubmitButton
                      id={id}
                      login={login}
                      password={password}
                      name={name}
                      surname={surname}
                      email={email}
                      removeRequest={removeRequest}
                      role={role}
                    />
                  </Form>
                )}
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

AccountPageComponent.propTypes = {
  user: PropTypes.shape.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isReady: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default AccountPageComponent;
