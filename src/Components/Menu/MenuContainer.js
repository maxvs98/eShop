import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uniqBy from 'lodash/uniqBy';
import * as cartActions from '../../storage/actions/cart';
import Menu from './MenuComponent';

const mapStateToProps = ({ cart, authorization }) => ({
  totalPrice:
    parseFloat((cart.items.reduce((total, product) => total + product.price, 0)).toFixed(3)),
  count: cart.items.length,
  items: uniqBy(cart.items, (o) => o.id),
  log: authorization.login,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
