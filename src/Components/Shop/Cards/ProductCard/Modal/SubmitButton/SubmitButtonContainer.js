import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../../../../../../storage/actions/products';
import SubmitButtonComponent from './SubmitButtonComponent';

const mapStateToProps = ({ products }) => ({
  isReady: products.isReady,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(productsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitButtonComponent);
