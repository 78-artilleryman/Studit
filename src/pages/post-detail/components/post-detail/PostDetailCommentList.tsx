import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import React, { useContext, useEffect, useState } from 'react';
import * as S from './PostDetailCommentList.style';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import PostDetailCommentItem from './PostDetailCommentItem';

interface CommentData {
  id: string;
  comment: string;
  createdAt: string;
  email: string;
  uid: string;
  name: string;
  profileImg: string;
}

function PostDetailCommentList() {
  const { data } = useContext(PostDetailFetcherContext);
  const [commentData, setCommentData] = useState<CommentData[]>();

  useEffect(() => {
    const postsQuery = collection(db, 'comments', data.id, 'commentList');
    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc?.data(),
        id: doc?.id,
      }));

      console.log(data);

      setCommentData(data as any[]);
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.CommemtList>
      {commentData?.map((comment: CommentData, i: number) => (
        <PostDetailCommentItem key={i} commentData={comment} postId={data.id} />
      ))}
    </S.CommemtList>
  );
}

export default PostDetailCommentList;
