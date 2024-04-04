import FilterList from '@Pages/home/components/filterList/FilterList';
import SearchBar from '@Pages/home/components/searchBar/SearchBar';
import PostList from '@Pages/home/components/postLIst/PostList';
import styled from 'styled-components';
import { useRef } from 'react';
import { db } from '@config/firebaseApp';
import { useFilter } from '@Pages/home/context/FilterContext';
import { buildFirestoreQuery } from '@Pages/home/service/Filter';
import usePagination from './hooks/usePagination';

const Layout = styled.section`
  width: 1280px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

const Block = styled.div`
  min-height: 100vh;
`;

function Home() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { filterState } = useFilter();
  const { studyType, period, technologys } = filterState;

  const { postData: feeds } = usePagination(ref, {});

  return (
    <>
      <Layout>
        <FilterList />
      </Layout>
      {feeds.length > 0 ? <PostList postData={feeds} /> : <Block></Block>}

      <div ref={ref}></div>
    </>
  );
}

export default Home;
