import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import * as S from '@components/Input/Input.style';

interface InputStyle {
  $validation?: boolean;
}

interface InputProps extends InputStyle, InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}

function Input({ label, placeholder, value, onChange, onBlur, $validation }: InputProps) {
  const $isValidation = $validation ? true : false;

  return (
    <React.Fragment>
      <S.Label $validation={$isValidation}>{label}</S.Label>
      <S.InputElement
        $validation={$isValidation}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </React.Fragment>
  );
}

export default Input;
