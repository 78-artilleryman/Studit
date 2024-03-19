import React from 'react';
import * as S from '@Components/header/Header.style';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <S.Wrapper>
        <S.Logo>
          <Link to="/">Studit</Link>
        </S.Logo>

        <S.Menu>
          <S.MenuItem>
            <Link to="/write">스터디 모집하기</Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.LoginButton to="/write">로그인</S.LoginButton>
          </S.MenuItem>
        </S.Menu>
      </S.Wrapper>
    </header>
  );
}

export default Header;
