import * as S from '@Pages/auth/Auth.style';
import Button from '@Components/UI/Button';
import { useNavigate } from 'react-router-dom';
import useInput from './hooks/useInput';
import { isValidateEmail, isValidatePassword } from './utils/validation';
import { FormEvent, useState } from 'react';
import Form from '@Components/form-compound/Form';
import { login } from './utils/firebase-auth';

function Login() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isValid: isValidEmail, ...email } = useInput(isValidateEmail);
  const { isValid: isValidPassword, ...password } = useInput(isValidatePassword);

  const isDisabled = !isValidEmail || !isValidPassword;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled || isSubmitting) return;

    setIsSubmitting(true);
    const isAuth = await login({ emailValue: email.inputState.value, passwordValue: password.inputState.value });
    isAuth.result ? navigate('/') : setIsSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title>로그인</Form.Title>
      <Form.Description>다양한 스터디가 당신을 기다리고 있어요 🙂</Form.Description>

      <Form.Control
        value={{
          onChange: email.handleInputChange,
          onBlur: email.handleInputBlur,
          value: email.inputState.value,
          hasError: email.hasError,
        }}
      >
        <Form.Layout>
          <Form.Control.Label>이메일</Form.Control.Label>
          <Form.Control.Input placeholder="your@email.com" />
          <Form.Control.ErrorMessage>이메일의 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <Form.Control
        value={{
          onChange: password.handleInputChange,
          onBlur: password.handleInputBlur,
          value: password.inputState.value,
          hasError: password.hasError,
        }}
      >
        <Form.Layout>
          <Form.Control.Label>비밀번호</Form.Control.Label>
          <Form.Control.Input placeholder="특수문자를 포함한 비밀번호를 입력해주세요." />
          <Form.Control.ErrorMessage>비밀번호 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <Button type="submit" $height={56} disabled={isDisabled || isSubmitting}>
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
    </Form>
  );
}

export default Login;
