import React from 'react';
import * as S from '@Pages/register/Register.style';
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
          <Input
            label="비밀번호"
            placeholder="특수문자를 포함한 비밀번호를 입력해주세요."
          />
        </InputLayout>

        <InputLayout>
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </InputLayout>

        <Button $height={56}>회원가입</Button>
      </S.Wrapper>
    </S.Form>
  );
}

export default Register;
