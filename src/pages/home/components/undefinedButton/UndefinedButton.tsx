import React from 'react';
import * as S from './UndefinedButton.style';
import { Link } from 'react-router-dom';

function UndefinedButton() {
  return (
    <S.Layout>
      <div>
        <S.Text>빈 상자와 같은 이 페이지에서 여러분의 아이디어를 채워보세요.</S.Text>
        <S.Text>스터디나 프로젝트를 기다리고 있습니다. 🙂</S.Text>
      </div>
      <Link to={`/post`}>
        <S.Button>스터디 모집하기</S.Button>
      </Link>
    </S.Layout>
  );
}

export default UndefinedButton;
