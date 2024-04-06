import FilterList from '@Pages/home/components/filterList/FilterList';
import SearchBar from '@Pages/home/components/searchBar/SearchBar';
import PostList from '@Pages/home/components/postLIst/PostList';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { db } from '@config/firebaseApp';
import { useFilter } from '@Pages/home/context/FilterContext';
import { buildFirestoreQuery } from '@Pages/home/service/Filter';
import usePagination from './hooks/usePagination';
import { Postdata } from './interface/Types';
import { onSnapshot } from 'firebase/firestore';

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

  const { noMore } = usePagination(setPostData, ref, {});

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
      </Layout>
      {postData.length > 0 ? <PostList postData={postData} /> : <Block></Block>}
      {noMore && <InlineMessage>더이상 불러올 피드가 없어요</InlineMessage>}

      <div ref={ref}></div>
    </>
  );
}

export default Home;
