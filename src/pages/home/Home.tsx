import FilterList from '@pages/home/components/filterList/FilterList';
import SearchBar from '@pages/home/components/searchBar/SearchBar';
import PostList from '@pages/home/components/postLIst/PostList';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { db } from '@config/firebaseApp';
import { useFilter } from '@pages/home/context/FilterContext';
import { buildFirestoreQuery } from '@pages/home/service/Filter';
import { onSnapshot } from 'firebase/firestore';
import { Postdata } from '@pages/home/interface/Types';
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
  const [postData, setPostData] = useState<Postdata[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  const { filterState } = useFilter();
  const { studyType, period, technologys } = filterState;

  const { noMore } = usePagination(postData, setPostData, ref, {});

  useEffect(() => {
    const postsQuery = buildFirestoreQuery(db, studyType, period, technologys);
    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc?.data(),
        id: doc?.id,
      }));

      setPostData(data as Postdata[]);
    });

    return () => unsubscribe();
  }, [studyType, period, technologys]);

  return (
    <>
      <Layout>
        <FilterList />
        <SearchBar setPostData={setPostData}></SearchBar>
      </Layout>
      {postData.length > 0 ? <PostList postData={postData} /> : <Block></Block>}
      {noMore && <InlineMessage>더이상 불러올 피드가 없어요</InlineMessage>}

      <div ref={ref}></div>
    </>
  );
}

export default Home;
