import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from '../../../storage/actions/users';
import UserTableComponent from './UserTableComponent';

const mapStateToProps = ({ users }) => ({
  users: users.items,
  isReady: users.isReady,
  isLoaded: users.isLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(usersActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTableComponent);
