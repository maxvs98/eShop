import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ratingActions from '../../../../../storage/actions/rating';
import * as productsActions from '../../../../../storage/actions/products';
import RatingComponent from './RatingComponent';

const mapStateToProps = ({ mark, authorization }) => ({
  productRating: mark,
  id: authorization.id,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(ratingActions, dispatch),
  ...bindActionCreators(productsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingComponent);
