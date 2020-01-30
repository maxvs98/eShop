import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authorizationActions from '../actions/authorization';
import AuthButton from '../components/AuthButton';

const mapStateToProps = ({ products, filter }) => ({
  filterBy: filter.filterBy
});

const mapDispatchToProps = ({
  authorizationActions
   //...bindActionCreators(authorizationActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
