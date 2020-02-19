import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ratingActions from '../../../../../storage/actions/rating';
import * as productsActions from '../../../../../storage/actions/products';
import RatingComponent from './RatingComponent';

const mapStateToProps = ({ mark }) => ({
  productRating: mark,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(ratingActions, dispatch),
  ...bindActionCreators(productsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingComponent);
