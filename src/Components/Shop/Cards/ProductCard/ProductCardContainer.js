import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../../../storage/actions/cart';
import * as productsActions from '../../../../storage/actions/products';
import ProductCardComponent from './ProductCardComponent';

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce(
    (count, product) => count + (product.id === id ? 1 : 0),
    0,
  ),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
  ...bindActionCreators(productsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardComponent);
