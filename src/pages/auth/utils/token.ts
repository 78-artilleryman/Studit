import { User } from 'firebase/auth';
import { redirect } from 'react-router-dom';

export const saveToken = (data: User) => {
  const transformedData = {
    accessToken: (data as any).accessToken,
    displayName: data.displayName,
    email: data.email,
  };

  return localStorage.setItem('user', JSON.stringify(transformedData));
};

export const removeToken = () => localStorage.removeItem('user');

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem('user')!);
  return token?.accessToken;
};

export const checkAuthToken = (path: string) => {
  const token = getToken();
  if (!token) return redirect(path);
  return null;
};

export const protectLoggedInPage = () => {
  const token = getToken();
  if (!token) return null;

  alert('이미 로그인 한 사용자 입니다.');
  return redirect('/');
};
