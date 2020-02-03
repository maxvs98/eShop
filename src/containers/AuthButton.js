import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorizationActions from '../actions/authorization';
import AuthButton from '../components/AuthButton';

const mapStateToProps = ({ authorization }) => ({
  role: authorization.role,
  isAuth: authorization.isAuth
});

const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(authorizationActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
