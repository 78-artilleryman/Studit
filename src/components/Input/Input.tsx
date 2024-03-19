import React, { ChangeEvent } from 'react';
import * as S from '@Components/Input/Input.style';

interface InputProps {
  label: string;
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

function Input({ label, placeholder, value, onChange, onBlur }: InputProps) {
  return (
    <React.Fragment>
      <S.Label>{label}</S.Label>
      <S.InputElement placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
    </React.Fragment>
  );
}

export default Input;
