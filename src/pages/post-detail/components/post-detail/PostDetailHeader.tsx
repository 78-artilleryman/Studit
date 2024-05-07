import React, { useContext } from 'react';
import PostDetailHashTag from './PostDetailHashTag';
import * as S from './PostDetailHeader.style';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import AuthContext from '@pages/auth/context/AuthContext';

export default function PostDetailHeader() {
  const { data } = useContext(PostDetailFetcherContext);
  const { user } = useContext(AuthContext);

  return (
    <React.Fragment>
      <PostDetailHashTag />
      <S.PostDetailTitle>{data.postTitle}</S.PostDetailTitle>
      <S.PostDetailUserWrapper>
        <S.PoseDetailUserImage>{/* <img src="" alt="" /> */}</S.PoseDetailUserImage>
        <S.PostDetailUsername>
          <span>{data.userName}</span>
        </S.PostDetailUsername>
        <S.PostDetailDate>
          <span>{data.createdAt}</span>
        </S.PostDetailDate>
        {user?.uid === data?.uid && <S.EditButton to="/">수정</S.EditButton>}
      </S.PostDetailUserWrapper>
    </React.Fragment>
  );
}
