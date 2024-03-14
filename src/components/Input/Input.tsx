import React from 'react';
import * as S from '@Components/Input/Input.style';

interface InputProps {
  label: string;
  placeholder: string;
}

function Input({ label, placeholder }: InputProps) {
  return (
    <React.Fragment>
      <S.Label>{label}</S.Label>
      <S.InputElement placeholder={placeholder} />
    </React.Fragment>
  );
}

export default Input;
