import * as S from '@Pages/auth/Auth.style';
import Input from '@Components/Input/Input';
import Button from '@Components/UI/Button';
import { InputLayout } from '@Layouts/InputLayout.style';

function Register() {
  return (
    <S.Form>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.Description>스터딧에서 팀원을 모집 해보세요 🙂</S.Description>

        <InputLayout>
          <Input label="이름" placeholder="이름을 입력해주세요." />
        </InputLayout>

        <InputLayout>
          <Input label="이메일" placeholder="your@email.com" />
        </InputLayout>

        <InputLayout>
          <Input label="비밀번호" placeholder="특수문자를 포함한 비밀번호를 입력해주세요." />
        </InputLayout>

        <InputLayout>
          <Input label="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요." />
        </InputLayout>

        <Button $height={56}>회원가입</Button>

        <S.FlexLayout>
          <S.AuthToLink to="/login">
            이미 회원이신가요? <strong>로그인 하기</strong>
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

export default Register;
