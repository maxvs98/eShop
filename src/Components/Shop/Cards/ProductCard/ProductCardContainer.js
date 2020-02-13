import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../../../../actions/cart';
import * as productsActions from '../../../../actions/products';
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
