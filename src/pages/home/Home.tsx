import FilterList from '../home/components/filterList/FilterList';
import SearchBar from '../home/components/searchBar/SearchBar';
import PostList from '../home/components/postLIst/PostList';

function Home() {
  return (
    <section>
      <FilterList />
      <SearchBar />
      <PostList />
    </section>
  );
}

export default Home;
