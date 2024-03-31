import React from 'react';
import HashTag from './HashTag';
import * as S from './PostHeader.style';

function PostHeader() {
  return (
    <React.Fragment>
      <HashTag />
      <S.Title>React Deep Dive 스터디 모집합니다.</S.Title>
      <S.UserInfo>
        <S.UserImage>{/* <img src="" alt="" /> */}</S.UserImage>
        <S.UserName>
          <span>D5ng</span>
        </S.UserName>
        <S.Date>
          <span>2024-01-27</span>
        </S.Date>
      </S.UserInfo>
    </React.Fragment>
  );
}

export default PostHeader;
