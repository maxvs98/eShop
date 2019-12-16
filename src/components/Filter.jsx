import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <Menu secondary>
    <Menu.Item
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}
    >
    Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'popular'}
      onClick={setFilter.bind(this, 'popular')}
    >
    Популярные
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_high'}
      onClick={setFilter.bind(this, 'price_high')}
    >
    Дорогие
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_low'}
      onClick={setFilter.bind(this, 'price_low')}
    >
    Дешёвые
    </Menu.Item>
    <Menu.Item position='right'>
      <Input
       value={searchQuery}
       onChange = {e => setSearchQuery(e.target.value)}
       placeholder="Поиск по товарам..."
       icon="search"
      />
    </Menu.Item>
  </Menu>
);

export default Filter;
