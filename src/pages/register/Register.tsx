import React from 'react';
import * as S from '@Pages/register/Register.style';
import Input from '@Components/Input/Input';

function Register() {
  return (
    <S.Form>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.Description>스터딧에서 팀원을 모집 해보세요 🙂</S.Description>

        <Input label="이름" />
      </S.Wrapper>
    </S.Form>
  );
}

export default Register;
