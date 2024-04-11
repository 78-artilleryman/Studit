import * as S from '@pages/auth/Auth.style';
import Button from '@components/UI/Button';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '@components/form-compound/Form';
import useInput from './hooks/useInput';

import usePasswordConfirm from './hooks/usePasswordConfirm';
import { register } from './service/auth';
import useSocialLoginAndRegister from './hooks/useSocialLoginAndRegister';
import { isValidateName, isValidateCheckEmail, isValidatePassword, isValidatePasswordConfirm } from './utils/validate';

function Register() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { inputState: nameInputState, isValid: isValidName, ...name } = useInput(isValidateName);
  const { inputState: emailInputState, isValid: isValidEmail, ...email } = useInput(isValidateCheckEmail);
  const { inputState: passwordInputState, isValid: isValidPassword, ...password } = useInput(isValidatePassword);
  const {
    inputState: passwordConfirmInputState,
    isValid: isValidPasswordConfirm,
    ...passwordConfirm
  } = usePasswordConfirm(isValidatePasswordConfirm.bind(null, passwordInputState.value));

  const socialLoginAndRegister = useSocialLoginAndRegister();

  const isDisabled = !isValidName || !isValidEmail || !isValidPassword || !isValidPasswordConfirm;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled || isSubmitting) return;

    setIsSubmitting(true);
    const isAuth = await register({
      emailValue: emailInputState.value,
      passwordValue: passwordInputState.value,
      namveValue: nameInputState.value,
    });

    isAuth.result ? navigate('/') : setIsSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title>회원가입</Form.Title>
      <Form.Description>스터딧에서 팀원을 모집 해보세요 🙂</Form.Description>

      <Form.Control value={{ ...nameInputState, ...name }}>
        <Form.Layout>
          <Form.Control.Label>이름</Form.Control.Label>
          <Form.Control.Input placeholder="이름을 입력해주세요." />
          <Form.Control.ErrorMessage />
        </Form.Layout>
      </Form.Control>

      <Form.Control value={{ ...emailInputState, ...email }}>
        <Form.Layout>
          <Form.Control.Label>이메일</Form.Control.Label>
          <Form.Control.Input placeholder="your@email.com" />
          <Form.Control.ErrorMessage />
        </Form.Layout>
      </Form.Control>

      <Form.Control value={{ ...passwordInputState, ...password }}>
        <Form.Layout>
          <Form.Control.Label>비밀번호</Form.Control.Label>
          <Form.Control.Input placeholder="특수문자를 포함한 비밀번호를 입력해주세요." />
          <Form.Control.ErrorMessage />
        </Form.Layout>
      </Form.Control>

      <Form.Control value={{ ...passwordConfirmInputState, ...passwordConfirm }}>
        <Form.Layout>
          <Form.Control.Label>비밀번호 확인</Form.Control.Label>
          <Form.Control.Input placeholder="비밀번호를 다시 입력해주세요." />
          <Form.Control.ErrorMessage />
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
          <S.SocialItem name="google" onClick={socialLoginAndRegister}>
            <img src="/images/auth/google-login.svg" alt="구글 로그인하기" />
          </S.SocialItem>
          <S.SocialItem name="github" onClick={socialLoginAndRegister}>
            <img src="/images/auth/github-login.svg" alt="깃허브 로그인하기" />
          </S.SocialItem>
        </S.SocialLayout>
      </S.FlexLayout>
    </Form>
  );
}

export default Register;
