import * as S from '@Pages/auth/Auth.style';
import Input from '@Components/Input/Input';
import Button from '@Components/UI/Button';
import { InputLayout } from '@Layouts/InputLayout.style';

function Login() {
  return (
    <S.Form>
      <S.Wrapper>
        <S.Title>로그인</S.Title>
        <S.Description>다양한 스터디가 당신을 기다리고 있어요 🙂</S.Description>

        <InputLayout>
          <Input label="이메일" placeholder="your@email.com" />
        </InputLayout>

        <InputLayout>
          <Input label="비밀번호" placeholder="비밀번호를 입력하세요." />
        </InputLayout>

        <Button $height={56}>로그인</Button>

        <S.FlexLayout>
          <S.AuthToLink to="/register">
            회원이 아니신가요? <strong>회원가입 하기</strong>
          </S.AuthToLink>
          <S.SocialLayout>
            <S.SocialItem>
              <img src="/images/auth/google-login.svg" alt="구글 로그인하기" />
            </S.SocialItem>
            <S.SocialItem>
              <img src="/images/auth/github-login.svg" alt="깃허브 로그인하기" />
            </S.SocialItem>
          </S.SocialLayout>
        </S.FlexLayout>
      </S.Wrapper>
    </S.Form>
  );
}

export default Login;
