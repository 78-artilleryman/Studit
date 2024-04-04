import React from 'react';
import { useNavigate } from 'react-router-dom';
import { socialLogin } from '../service/social';

enum Social {
  GITHUB = 'GITHUB',
  GOOGLE = 'GOOGLE',
}

type Socialkey = keyof typeof Social;

export default function useSocialLoginAndRegister() {
  const navigate = useNavigate();
  const socialLoginAndRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const socialType = event.currentTarget.name.toUpperCase() as Socialkey;
    const isAuth = await socialLogin(socialType);

    isAuth.result && navigate('/');
  };

  return socialLoginAndRegister;
}
