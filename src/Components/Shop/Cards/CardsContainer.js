import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import orderBy from 'lodash/orderBy';
import * as productsActions from '../../../storage/actions/products';
import * as authorizationActions from '../../../storage/actions/authorization';
import CardsComponent from './CardsComponent';

const sortBy = (products, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(products, 'price', 'desc');
    case 'price_low':
      return orderBy(products, 'price', 'asc');
    default:
      return products;
  }
};

const filterProducts = (products, searchQuery) => products.filter(
  (o) => o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  || o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
);

const searchProducts = (
  products, filterBy, searchQuery,
) => sortBy(filterProducts(products, searchQuery), filterBy);

const mapStateToProps = ({ products, filter, authorization }) => ({
  products:
    products.items
    && searchProducts(products.items, filter.filterBy, filter.searchQuery),
  isReady: products.isReady,
  isLoaded: products.isLoaded,
  role: authorization.role,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(productsActions, dispatch),
  ...bindActionCreators(authorizationActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsComponent);
