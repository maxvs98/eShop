import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorizationActions from '../actions/authorization';
import AuthButtonComponent from './AuthButtonComponent';

const mapStateToProps = ({ authorization }) => ({
  role: authorization.role,
  isAuth: authorization.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(authorizationActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButtonComponent);
