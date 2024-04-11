import React, { PropsWithChildren } from 'react';
import * as S from './FormControl.style';
import useToggle from '@hooks/useToggle';

interface FormControlContextProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  hasError: boolean;
  value: string;
  errorMessage: string;
  isShowPasswordComponent?: boolean;
  handleToggle?: () => void;
}

export const FormControlContext = React.createContext<FormControlContextProps>({
  handleInputChange: () => {},
  handleInputBlur: () => {},
  hasError: false,
  value: '',
  errorMessage: '',
});

interface FormProps {
  children: React.ReactNode;
  value: FormControlContextProps;
}

export default function FormControl({ children, value }: FormProps) {
  return <FormControlContext.Provider value={value}>{children}</FormControlContext.Provider>;
}

interface Children {
  children: React.ReactNode;
}

function ErrorMessage() {
  const { hasError, errorMessage } = React.useContext(FormControlContext);
  if (!hasError) return null;
  return <S.ErrorMessage>{errorMessage}</S.ErrorMessage>;
}

function Input({ children, placeholder }: React.InputHTMLAttributes<HTMLInputElement>) {
  const { handleInputChange, handleInputBlur, hasError, isShowPasswordComponent } =
    React.useContext(FormControlContext);
  const type = isShowPasswordComponent ? 'password' : 'text';

  return (
    <S.InputWrapper>
      <S.Input
        type={type}
        $validation={hasError}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder={placeholder}
      />
      {children}
    </S.InputWrapper>
  );
}

function Label({ children }: Children) {
  const { hasError } = React.useContext(FormControlContext);
  return <S.Label $validation={hasError}>{children}</S.Label>;
}

function ShowPasswordButton() {
  const { isShowPasswordComponent, handleToggle } = React.useContext(FormControlContext);
  const icon = isShowPasswordComponent ? '/images/auth/eye-off-icon.svg' : '/images/auth/eye-on-icon.svg';
  const alt = isShowPasswordComponent ? '비밀번호 가라기' : '비밀번호 보기';

  return (
    <S.ShowPasswordButton type="button" onClick={handleToggle}>
      <img src={icon} alt={alt} />
    </S.ShowPasswordButton>
  );
}

FormControl.Input = Input;
FormControl.Label = Label;
FormControl.ErrorMessage = ErrorMessage;
FormControl.ShowPasswordButton = ShowPasswordButton;
