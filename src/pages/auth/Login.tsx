import * as S from '@Pages/auth/Auth.style';
import Input from '@Components/Input/Input';
import Button from '@Components/UI/Button';
import { InputLayout } from '@Layouts/InputLayout.style';
import { useNavigate } from 'react-router-dom';
import useInput from './hooks/useInput';
import { isValidateEmail, isValidatePassword } from './utils/validation';
import { FormEvent } from 'react';

function Login() {
  const navigate = useNavigate();

  const {
    hasError: hasErrorEmail,
    isValid: isValidEmail,
    inputState: inputEmailState,
    handleChangeInput: handleChangeEmail,
    handleBlurInput: handleBlurEmail,
  } = useInput(isValidateEmail);

  const {
    hasError: hasErrorPassword,
    isValid: isValidPassword,
    inputState: inputPasswordState,
    handleChangeInput: handleChangePassword,
    handleBlurInput: handleBlurPassword,
  } = useInput(isValidatePassword);

  const isDisabled = !isValidEmail || !isValidPassword;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled) return;

    navigate('/');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Title>로그인</S.Title>
        <S.Description>다양한 스터디가 당신을 기다리고 있어요 🙂</S.Description>

        <InputLayout>
          <Input
            label="이메일"
            placeholder="your@email.com"
            value={inputEmailState.value}
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            $validation={hasErrorEmail}
          />
          {hasErrorEmail && <S.ErrorMessage>이메일 형식이 올바르지 않아요.</S.ErrorMessage>}
        </InputLayout>

        <InputLayout>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            value={inputPasswordState.value}
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
            $validation={hasErrorPassword}
          />
          {hasErrorPassword && <S.ErrorMessage>비밀번호 형식이 올바르지 않아요.</S.ErrorMessage>}
        </InputLayout>

        <Button type="submit" $height={56} disabled={isDisabled}>
          로그인
        </Button>

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
