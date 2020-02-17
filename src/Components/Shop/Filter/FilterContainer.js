import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../../../storage/actions/filter';
import FilterComponent from './FilterComponent';

const mapStateToProps = ({ filter }) => ({
  filterBy: filter.filterBy,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
