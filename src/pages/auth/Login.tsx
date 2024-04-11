import * as S from '@pages/auth/Auth.style';
import Button from '@components/UI/Button';
import { useNavigate } from 'react-router-dom';
import useInput from './hooks/useInput';

import { FormEvent, useState } from 'react';
import Form from '@components/form-compound/Form';
import useSocialLoginAndRegister from './hooks/useSocialLoginAndRegister';
import { login } from './service/auth';
import { isValidateEmail, isValidatePassword } from './utils/validate';
import { EmailFormControl, PasswordFormControl } from './components/form-control';

function Login() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { inputState: emailInputState, isValid: isValidEmail, ...email } = useInput(isValidateEmail);
  const { inputState: passwordInputState, isValid: isValidPassword, ...password } = useInput(isValidatePassword);

  const socialLoginAndRegister = useSocialLoginAndRegister();

  const isDisabled = !isValidEmail || !isValidPassword;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled || isSubmitting) return;

    setIsSubmitting(true);
    const isAuth = await login({ emailValue: emailInputState.value, passwordValue: passwordInputState.value });
    isAuth.result ? navigate('/') : setIsSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title>로그인</Form.Title>
      <Form.Description>다양한 스터디가 당신을 기다리고 있어요 🙂</Form.Description>

      <EmailFormControl {...emailInputState} {...email} />
      <PasswordFormControl {...passwordInputState} {...password} />

      <Button type="submit" $height={56} disabled={isDisabled || isSubmitting}>
        로그인
      </Button>

      <S.FlexLayout>
        <S.AuthToLink to="/register">
          회원이 아니신가요? <strong>회원가입 하기</strong>
        </S.AuthToLink>
        <S.SocialLayout>
          <S.SocialItem onClick={socialLoginAndRegister} name="google">
            <img src="/images/auth/google-login.svg" alt="구글 로그인하기" />
          </S.SocialItem>
          <S.SocialItem onClick={socialLoginAndRegister} name="github">
            <img src="/images/auth/github-login.svg" alt="깃허브 로그인하기" />
          </S.SocialItem>
        </S.SocialLayout>
      </S.FlexLayout>
    </Form>
  );
}

export default Login;
