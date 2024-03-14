import React from 'react';
import FilterList from './components/filterList/FilterList';
import SearchBar from './components/searchBar/SearchBar';
import PostList from './components/postLIst/PostList';

function Main() {
  return (
    <section>
      <FilterList />
      <SearchBar />
      <PostList />
    </section>
  );
}

export default Main;
