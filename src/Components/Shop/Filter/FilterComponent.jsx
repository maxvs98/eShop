import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const FilterComponent = ({
  setFilter, filterBy, searchQuery, setSearchQuery,
}) => (
  <Menu secondary>
    <Menu.Item
      active={filterBy === 'all'}
      /* eslint-disable */
      onClick={setFilter.bind(this, 'all')}
      /* eslint-enable */
      class="filter__item"
    >
    Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'popular'}
      /* eslint-disable */
      onClick={setFilter.bind(this, 'popular')}
      /* eslint-enable */
    >
    Популярные
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_high'}
      /* eslint-disable */
      onClick={setFilter.bind(this, 'price_high')}
      /* eslint-enable */
    >
    Дорогие
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_low'}
      /* eslint-disable */
      onClick={setFilter.bind(this, 'price_low')}
      /* eslint-enable */
    >
    Дешёвые
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'marked'}
      /* eslint-disable */
      onClick={setFilter.bind(this, 'marked')}
      /* eslint-enable */
    >
    Оценены
    </Menu.Item>
    <Menu.Item position="right">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск по товарам..."
        icon="search"
      />
    </Menu.Item>
  </Menu>
);

FilterComponent.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filterBy: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default FilterComponent;
