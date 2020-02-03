import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions from '../actions/cart';
import Menu from './MenuComponent';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({ cart, authorization }) => ({
  totalPrice: parseFloat((cart.items.reduce((total, product) => total + product.price, 0)).toFixed(3)),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id),
  role: authorization.role
});

const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
