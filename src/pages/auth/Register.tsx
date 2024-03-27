import * as S from '@Pages/auth/Auth.style';
import Button from '@Components/UI/Button';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '@Components/form-compound/Form';
import useInput from './hooks/useInput';
import { isValidateEmail, isValidateName, isValidatePassword, isValidatePasswordConfirm } from './utils/validation';
import usePasswordConfirm from './hooks/usePasswordConfirm';
import { register } from './utils/firebase-auth';

function Register() {
  const navigate = useNavigate();

  const {
    hasError: hasErrorName,
    isValid: isValidName,
    inputState: inputNameState,
    handleInputChange: handleNameChange,
    handleInputBlur: handleNameBlur,
  } = useInput(isValidateName);

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

  const {
    passwordConfirmState,
    hasErrorPasswordConfirm,
    isValidPasswordConfirm,
    handlePasswordConfirmBlur,
    handlePasswordConfirmChange,
  } = usePasswordConfirm(isValidatePasswordConfirm.bind(null, inputPasswordState.value));

  const isDisabled = !isValidName || !isValidEmail || !isValidPassword || !isValidPasswordConfirm;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled) return;
    const isAuth = await register({
      emailValue: inputEmailState.value,
      passwordValue: inputPasswordState.value,
      namveValue: inputNameState.value,
    });
    if (isAuth.result) navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title>회원가입</Form.Title>
      <Form.Description>스터딧에서 팀원을 모집 해보세요 🙂</Form.Description>

      <Form.Control
        value={{
          onChange: handleNameChange,
          onBlur: handleNameBlur,
          value: inputNameState.value,
          hasError: hasErrorName,
        }}
      >
        <Form.Layout>
          <Form.Control.Label>이름</Form.Control.Label>
          <Form.Control.Input placeholder="이름을 입력해주세요." />
          <Form.Control.ErrorMessage>이름의 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

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
          <Form.Control.ErrorMessage>이메일의 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <Form.Control
        value={{
          onChange: handlePasswordChange,
          onBlur: handlePasswordBlur,
          value: inputPasswordState.value,
          hasError: hasErrorPassword,
        }}
      >
        <Form.Layout>
          <Form.Control.Label>비밀번호</Form.Control.Label>
          <Form.Control.Input placeholder="특수문자를 포함한 비밀번호를 입력해주세요." />
          <Form.Control.ErrorMessage>비밀번호 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <Form.Control
        value={{
          onChange: handlePasswordConfirmChange,
          onBlur: handlePasswordConfirmBlur,
          value: passwordConfirmState.value,
          hasError: hasErrorPasswordConfirm,
        }}
      >
        <Form.Layout>
          <Form.Control.Label>비밀번호 확인</Form.Control.Label>
          <Form.Control.Input placeholder="비밀번호를 다시 입력해주세요." />
          <Form.Control.ErrorMessage>비밀번호 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <Button type="submit" $height={56} disabled={isDisabled}>
        회원가입
      </Button>

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
    </Form>
  );
}

export default Register;
