import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from '../../storage/actions/users';
import * as authorizationActions from '../../storage/actions/authorization';
import AccountPageComponent from './AccountPageComponent';

const mapStateToProps = ({ users, authorization }) => ({
  users: users.items,
  isReady: users.isReady,
  isLoaded: users.isLoaded,
  isAuth: authorization.isAuth,
  id: authorization.id,
  log: authorization.log,
  role: authorization.role,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(usersActions, dispatch),
  ...bindActionCreators(authorizationActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPageComponent);
