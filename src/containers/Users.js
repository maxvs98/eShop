import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from '../actions/users';
import Users from '../components/Users';

const mapStateToProps = ({ users }) => ({
  users: users.items,
  isReady: users.isReady
});

const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(usersActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
