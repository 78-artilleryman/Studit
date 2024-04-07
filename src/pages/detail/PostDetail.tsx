import React from 'react';
import * as S from './PostDetail.style';
import StudyInfo from './components/StudyInfo';
import PostHeader from './components/PostHeader';
import Contents from './components/Contents';

function PostDetail() {
  return (
    <S.Section>
      <S.Wrapper>
        <PostHeader />
        <StudyInfo />
        <Contents />
      </S.Wrapper>
    </S.Section>
  );
}

export default PostDetail;
