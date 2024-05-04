import React, { useContext } from 'react';
import * as S from '@components/header/Header.style';
import { Link } from 'react-router-dom';
import AuthContext from '@pages/auth/context/AuthContext';
import { toast } from 'react-toastify';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '@config/firebaseApp';

function Header() {
  const { user } = useContext(AuthContext);

  const logOut = async () => {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success('로그아웃 되었습니다.');
  };

  return (
    <header>
      <S.Wrapper>
        <S.Logo>
          <Link to="/">Studit</Link>
        </S.Logo>

        <nav>
          <S.Menu>
            {user ? (
              <>
                <S.MenuItem>
                  <Link to="/post">스터디 모집하기</Link>
                </S.MenuItem>
                <S.MenuItem>
                  <S.Logout onClick={() => logOut()}>로그아웃</S.Logout>
                </S.MenuItem>
              </>
            ) : (
              <>
                <S.MenuItem>
                  <S.LoginButton to="/login">로그인</S.LoginButton>
                </S.MenuItem>
              </>
            )}
          </S.Menu>
        </nav>
      </S.Wrapper>
    </header>
  );
}

export default Header;
