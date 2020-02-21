import React, { Component } from 'react';
import { Container, Input, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Menu from '../Menu/MenuContainer';
import Footer from '../Footer/FooterComponent';

class AccountPageComponent extends Component {
  componentDidMount() {
    const { isLoaded } = this.props;
    if (!isLoaded) {
      const { loadData } = this.props;
      loadData();
    }
  }

  render() {
    const {
      users, isReady,
    } = this.props;
    const user = users[0];
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
                        icon: 'pencil alternate',
                        content: 'first name',
                      }}
                      actionPosition="left"
                      placeholder="first name"
                      defaultValue={user['first name']}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'pencil alternate',
                        content: 'last name',
                      }}
                      actionPosition="left"
                      placeholder="last name"
                      defaultValue={user['last name']}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'pencil alternate',
                        content: 'e-mail',
                      }}
                      actionPosition="left"
                      placeholder="e-mail"
                      defaultValue={user['e-mail']}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'pencil alternate',
                        content: 'remove request',
                      }}
                      actionPosition="left"
                      placeholder="remove request"
                      defaultValue={user['remove request']}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'pencil alternate',
                        content: 'login',
                      }}
                      actionPosition="left"
                      placeholder="login"
                      defaultValue={user.login}
                    />
                    <Input
                      action={{
                        color: 'black',
                        labelPosition: 'left',
                        icon: 'pencil alternate',
                        content: 'role',
                      }}
                      actionPosition="left"
                      placeholder="role"
                      defaultValue={user.role}
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
  users: PropTypes.shape.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  isReady: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
};

export default AccountPageComponent;
