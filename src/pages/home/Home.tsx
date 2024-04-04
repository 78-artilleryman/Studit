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

const InlineMessage = styled.p`
  width: 80%;
  font-size: 16px;
  text-align: center;
  margin: 30px auto;
`;

const Block = styled.div`
  min-height: 100vh;
`;

function Home() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { filterState } = useFilter();
  const { studyType, period, technologys } = filterState;

  const { postData: feeds, noMore } = usePagination(ref, {});

  return (
    <>
      <Layout>
        <FilterList />
      </Layout>
      {feeds.length > 0 ? <PostList postData={feeds} /> : <Block></Block>}
      {noMore && <InlineMessage>더이상 불러올 피드가 없어요</InlineMessage>}

      <div ref={ref}></div>
    </>
  );
}

export default Home;
