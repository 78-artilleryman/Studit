import AuthContext from '@pages/auth/context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AuthHOC(Components: any) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    toast.warn('잘못된 접근이에요 :(');
  }

  return (...props: any[]) => {
    return <Components {...props} />;
  };
}

/**
 * ! 로그인한 유저는 로그인 페이지로 가면 뒤로가진다.
 */

/**
 * ! 로그인한 유저만 글을 작성할 수 있다.
 * ! 로그인한 유저는 특정 기능을 사용할 수 있어야 한다.
 */
