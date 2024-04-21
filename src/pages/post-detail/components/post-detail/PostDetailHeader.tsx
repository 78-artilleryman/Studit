import React, { useContext } from 'react';
import PostDetailHashTag from './PostDetailHashTag';
import * as S from './PostDetailHeader.style';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';

export default function PostDetailHeader() {
  const { data } = useContext(PostDetailFetcherContext);

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
      </S.PostDetailUserWrapper>
    </React.Fragment>
  );
}
