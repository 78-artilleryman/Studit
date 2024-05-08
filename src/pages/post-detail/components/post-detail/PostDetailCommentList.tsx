import AuthContext from '@pages/auth/context/AuthContext';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import React, { useContext } from 'react';
import * as S from './PostDetailCommentList.style';

interface CommentData {
  comment: string;
  createdAt: string;
  email: string;
  uid: string;
  name: string;
  profileImg: string;
}

function PostDetailCommentList() {
  const { data } = useContext(PostDetailFetcherContext);
  const { user } = useContext(AuthContext);

  return (
    <S.CommemtList>
      {data?.comments?.map((comment: CommentData, i: number) => (
        <S.Comment key={i}>
          <S.Profile>
            {comment.profileImg ? (
              <S.ProfileImage src={comment.profileImg} />
            ) : (
              <S.ProfileText>{comment.name?.[0]}</S.ProfileText>
            )}
          </S.Profile>
          <div>
            <S.Name>{comment.name}</S.Name>
            <S.Date>{comment.createdAt}</S.Date>
          </div>
          <S.Content>{comment.comment}</S.Content>
        </S.Comment>
      ))}
    </S.CommemtList>
  );
}

export default PostDetailCommentList;
