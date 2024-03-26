import * as S from '@Pages/auth/Auth.style';
import Button from '@Components/UI/Button';
import { useNavigate } from 'react-router-dom';
import useInput from './hooks/useInput';
import { isValidateEmail, isValidatePassword } from './utils/validation';
import { FormEvent } from 'react';
import FormControl from '../../components/form-compound/FormControl';
import Form from '@Components/form-compound/Form';

function Login() {
  const navigate = useNavigate();

  const {
    hasError: hasErrorEmail,
    isValid: isValidEmail,
    inputState: inputEmailState,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
  } = useInput(isValidateEmail);

  const {
    hasError: hasErrorPassword,
    isValid: isValidPassword,
    inputState: inputPasswordState,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
  } = useInput(isValidatePassword);

  const isDisabled = !isValidEmail || !isValidPassword;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled) return;

    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title>로그인</Form.Title>
      <Form.Description>다양한 스터디가 당신을 기다리고 있어요 🙂</Form.Description>

      <Form.Control
        value={{
          onChange: handleEmailChange,
          onBlur: handleEmailBlur,
          value: inputEmailState.value,
          hasError: hasErrorEmail,
        }}
      >
        <Form.Layout>
          <Form.Control.Label>이메일</Form.Control.Label>
          <Form.Control.Input placeholder="your@email.com" />
          <Form.Control.ErrorMessage>이메일 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <FormControl
        value={{
          onChange: handlePasswordChange,
          onBlur: handlePasswordBlur,
          value: inputPasswordState.value,
          hasError: hasErrorPassword,
        }}
      >
        <Form.Layout>
          <FormControl.Label>비밀번호</FormControl.Label>
          <FormControl.Input placeholder="특수문자를 포함한 비밀번호를 입력해주세요." />
          <FormControl.ErrorMessage>비밀번호 형식이 올바르지 않아요.</FormControl.ErrorMessage>
        </Form.Layout>
      </FormControl>

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
    </Form>
  );
}

export default Login;
