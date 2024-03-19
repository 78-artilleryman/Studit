import * as S from '@Pages/auth/Auth.style';
import Input from '@Components/Input/Input';
import Button from '@Components/UI/Button';
import { InputLayout } from '@Layouts/InputLayout.style';
import { isValidateEmail, isValidateName, isValidatePassword, isValidatePasswordConfirm } from './utils/validation';
import useInput from './hooks/useInput';
import usePasswordConfirm from './hooks/usePasswordConfirm';

function Register() {
  const {
    hasError: hasErrorName,
    inputState: inputNameState,
    handleChangeInput: handleChangeName,
    handleBlurInput: handleBlurName,
  } = useInput(isValidateName);

  const {
    hasError: hasErrorEmail,
    inputState: inputEmailState,
    handleChangeInput: handleChangeEmail,
    handleBlurInput: handleBlurEmail,
  } = useInput(isValidateEmail);

  const {
    hasError: hasErrorPassword,
    inputState: inputPasswordState,
    handleChangeInput: handleChangePassword,
    handleBlurInput: handleBlurPassword,
  } = useInput(isValidatePassword);

  const { passwordConfirmState, hasErrorPasswordConfirm, handleChangePasswordConfirm, handleBlurPasswordConfirm } =
    usePasswordConfirm(isValidatePasswordConfirm.bind(null, inputPasswordState.value));

  return (
    <S.Form>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.Description>스터딧에서 팀원을 모집 해보세요 🙂</S.Description>

        <InputLayout>
          <Input
            label="이름"
            placeholder="이름을 입력해주세요."
            value={inputNameState.value}
            onChange={handleChangeName}
            onBlur={handleBlurName}
            $validation={hasErrorName}
          />
          {hasErrorName && <S.ErrorMessage>이름의 형식이 올바르지 않아요.</S.ErrorMessage>}
        </InputLayout>

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
            placeholder="특수문자를 포함한 비밀번호를 입력해주세요."
            value={inputPasswordState.value}
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
            $validation={hasErrorPassword}
          />
          {hasErrorPassword && <S.ErrorMessage>비밀번호 형식이 올바르지 않아요.</S.ErrorMessage>}
        </InputLayout>

        <InputLayout>
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            value={passwordConfirmState.value}
            onChange={handleChangePasswordConfirm}
            onBlur={handleBlurPasswordConfirm}
            $validation={!hasErrorPassword && hasErrorPasswordConfirm}
          />
          {!hasErrorPassword && hasErrorPasswordConfirm && (
            <S.ErrorMessage>비밀번호 형식이 올바르지 않아요.</S.ErrorMessage>
          )}
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
