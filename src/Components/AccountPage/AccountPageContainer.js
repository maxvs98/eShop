import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from '../../storage/actions/users';
import * as authorizationActions from '../../storage/actions/authorization';
import AccountPageComponent from './AccountPageComponent';

const searchUser = (users, id) => users.filter(
  (o) => o.id === id,
);

const mapStateToProps = ({ users, authorization }) => ({
  users: searchUser(users.items, authorization.id),
  isReady: users.isReady,
  isLoaded: users.isLoaded,
  isAuth: authorization.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(usersActions, dispatch),
  ...bindActionCreators(authorizationActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPageComponent);
