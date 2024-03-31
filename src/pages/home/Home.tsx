import FilterList from '@Pages/home/components/filterList/FilterList';
import SearchBar from '@Pages/home/components/searchBar/SearchBar';
import PostList from '@Pages/home/components/postLIst/PostList';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { db } from '@config/firebaseApp';
import { useFilter } from '@Pages/home/context/FilterContext';
import { buildFirestoreQuery } from '@Pages/home/service/Filter';
import { onSnapshot } from 'firebase/firestore';
import { Postdata } from '@Pages/home/interface/Types';

const Layout = styled.section`
  width: 1280px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

function Home() {
  const [postData, setPostData] = useState<Postdata[]>([]);
  const { filterState } = useFilter();
  const { studyType, period, technologys } = filterState;

  console.log(postData);

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
        <SearchBar setPostData={setPostData} />
      </Layout>

      <PostList postData={postData} />
    </>
  );
}

export default Home;
