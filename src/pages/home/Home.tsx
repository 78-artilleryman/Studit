import FilterList from '../home/components/filterList/FilterList';
import SearchBar from '../home/components/searchBar/SearchBar';
import PostList from '../home/components/postLIst/PostList';
import styled from 'styled-components';

const Layout = styled.section`
  width: 1280px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

function Home() {
  return (
    <>
      <Layout>
        <FilterList />
        <SearchBar />
      </Layout>

      <PostList />
    </>
  );
}

export default Home;
