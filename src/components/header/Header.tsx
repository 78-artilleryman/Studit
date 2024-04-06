import React from 'react';
import * as S from '@components/header/Header.style';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <S.Wrapper>
        <S.Logo>
          <Link to="/">Studit</Link>
        </S.Logo>

        <nav>
          <S.Menu>
            <S.MenuItem>
              <Link to="/post">스터디 모집하기</Link>
            </S.MenuItem>
            <S.MenuItem>
              <S.LoginButton to="/login">로그인</S.LoginButton>
            </S.MenuItem>
          </S.Menu>
        </nav>
      </S.Wrapper>
    </header>
  );
}

export default Header;
