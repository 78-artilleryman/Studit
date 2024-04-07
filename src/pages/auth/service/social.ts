import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

enum Social {
  GITHUB = 'GITHUB',
  GOOGLE = 'GOOGLE',
}

type Socialkey = keyof typeof Social;

const social = {
  [Social.GITHUB]: new GithubAuthProvider(),
  [Social.GOOGLE]: new GoogleAuthProvider(),
};

export async function socialLogin(socialType: Socialkey) {
  try {
    const authProvider = social[socialType];
    const authService = getAuth();
    await signInWithPopup(authService, authProvider);

    return {
      result: true,
      message: '로그인이 성공적으로 이루어졌어요.',
    };
  } catch (error) {
    return {
      result: false,
      messgae: '이메일과 비밀번호를 다시 확인해주세요.',
    };
  }
}
