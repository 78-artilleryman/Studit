import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import React, { useContext } from 'react';
import * as S from './PostDetailCommentList.style';

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

  return (
    <S.CommemtList>
      {data.comments?.map((comment: CommentData, i: number) => (
        <PostDetailCommentItem key={i} commentData={comment} postId={data.id} />
      ))}
    </S.CommemtList>
  );
}

export default PostDetailCommentList;
