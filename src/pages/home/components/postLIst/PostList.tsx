import PostItem from '../postItem/PostItem';
import styled from 'styled-components';
import { data } from './mockdata';
import { useEffect, useState } from 'react';
import { db } from '@config/firebaseApp';
import { useFilter } from '@Pages/home/context/FilterContext';
import { buildFirestoreQuery } from '@Pages/home/service/Filter';
import { onSnapshot } from 'firebase/firestore';

const PostLayout = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
`;
function PostList() {
  const [postData, setPostData] = useState({});
  const { filterState } = useFilter();
  const { studyType, period, technologys } = filterState;

  console.log(postData);

  useEffect(() => {
    const postsQuery = buildFirestoreQuery(db, studyType, period, technologys);

    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostData(data);
    });

    return () => unsubscribe();
  }, [studyType, period, technologys]);

  return (
    <PostLayout>
      {data.map(post => (
        <PostItem key={post.id} Postdata={post}></PostItem>
      ))}
    </PostLayout>
  );
}

export default PostList;
