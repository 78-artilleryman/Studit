import PostItem from '../postItem/PostItem';
import styled from 'styled-components';
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

interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

interface Postdata {
  id: string;
  studyType: string; // 스터디 종류
  studyMember: string; // 모집 인원
  studySystem: string; // 진행 방식
  period: string; // 진행 기간
  projectStartDate: Timestamp; //프로젝트 시작일
  projectEndDate: Timestamp;
  postDeadline: Timestamp; // 모집 마감일
  technologys: string[]; // 기술 스택
  closed: boolean;
  // 게시물 내용
  postTitle: string;
  postSubTitle: string;
  postContent: string;
  uid: string;
  createdAt: string;
  userName?: string;
}

function PostList() {
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
    <PostLayout>
      {postData.map(post => (
        <PostItem key={post.id} Postdata={post}></PostItem>
      ))}
    </PostLayout>
  );
}

export default PostList;
