import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productsActions from '../actions/products';
import Cards from '../components/Cards';
import orderBy from 'lodash/orderBy';

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

const filterProducts = (products, searchQuery) =>
  products.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
  );

const searchProducts = (products, filterBy, searchQuery) => {
  return sortBy(filterProducts(products, searchQuery), filterBy);
}

const mapStateToProps = ({ products, filter }) => ({
  products:
    products.items &&
    searchProducts(products.items, filter.filterBy, filter.searchQuery),
  isReady: products.isReady
});

const mapDispatchToProps = dispatch => ({
   ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
