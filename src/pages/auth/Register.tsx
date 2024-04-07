import * as S from '@pages/auth/Auth.style';
import Button from '@components/UI/Button';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '@components/form-compound/Form';
import useInput from './hooks/useInput';
import { isValidateEmail, isValidateName, isValidatePassword, isValidatePasswordConfirm } from './utils/validation';
import usePasswordConfirm from './hooks/usePasswordConfirm';
import { register } from './service/auth';
import useSocialLoginAndRegister from './hooks/useSocialLoginAndRegister';

function Register() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isValid: isValidName, ...name } = useInput(isValidateName);
  const { isValid: isValidEmail, ...email } = useInput(isValidateEmail);
  const { isValid: isValidPassword, ...password } = useInput(isValidatePassword);
  const { isValid: isValidPasswordConfirm, ...passwordConfirm } = usePasswordConfirm(
    isValidatePasswordConfirm.bind(null, password.inputState.value),
  );

  const socialLoginAndRegister = useSocialLoginAndRegister();

  const isDisabled = !isValidName || !isValidEmail || !isValidPassword || !isValidPasswordConfirm;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isDisabled || isSubmitting) return;

    setIsSubmitting(true);
    const isAuth = await register({
      emailValue: name.inputState.value,
      passwordValue: password.inputState.value,
      namveValue: name.inputState.value,
    });
    isAuth.result ? navigate('/') : setIsSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Title>회원가입</Form.Title>
      <Form.Description>스터딧에서 팀원을 모집 해보세요 🙂</Form.Description>

      <Form.Control value={{ value: name.inputState.value, ...name }}>
        <Form.Layout>
          <Form.Control.Label>이름</Form.Control.Label>
          <Form.Control.Input placeholder="이름을 입력해주세요." />
          <Form.Control.ErrorMessage>이름의 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <Form.Control value={{ value: email.inputState.value, ...email }}>
        <Form.Layout>
          <Form.Control.Label>이메일</Form.Control.Label>
          <Form.Control.Input placeholder="your@email.com" />
          <Form.Control.ErrorMessage>이메일의 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <Form.Control value={{ value: password.inputState.value, ...password }}>
        <Form.Layout>
          <Form.Control.Label>비밀번호</Form.Control.Label>
          <Form.Control.Input placeholder="특수문자를 포함한 비밀번호를 입력해주세요." />
          <Form.Control.ErrorMessage>비밀번호 형식이 올바르지 않아요.</Form.Control.ErrorMessage>
        </Form.Layout>
      </Form.Control>

      <Form.Control value={{ value: passwordConfirm.inputState.value, ...passwordConfirm }}>
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
