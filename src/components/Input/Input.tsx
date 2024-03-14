import React from 'react';
import * as S from '@Components/Input/Input.style';

interface InputProps {
  label: string;
  placeholder: string;
}

function Input({ label, placeholder }: InputProps) {
  return (
    <S.Layout>
      <S.Label>{label}</S.Label>
      <S.InputElement placeholder={placeholder} />
    </S.Layout>
  );
}

export default Input;
