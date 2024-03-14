import React from 'react';
import * as S from '@Components/Input/Input.style';

interface InputProps {
  label: string;
}

function Input({ label }: InputProps) {
  return (
    <S.Layout>
      <S.Label>{label}</S.Label>
      <S.InputElement />
    </S.Layout>
  );
}

export default Input;
