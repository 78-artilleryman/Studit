import React from 'react';
import * as S from './FormControl.style';

interface FormControlContextProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  hasError: boolean;
  value: string;
}

export const FormControlContext = React.createContext<FormControlContextProps>({
  onChange: () => {},
  onBlur: () => {},
  hasError: false,
  value: '',
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

function ErrorMessage({ children }: Children) {
  const { hasError } = React.useContext(FormControlContext);
  if (!hasError) return null;
  return <S.ErrorMessage>{children}</S.ErrorMessage>;
}

function Input({ placeholder }: React.InputHTMLAttributes<HTMLInputElement>) {
  const { onChange, onBlur, hasError } = React.useContext(FormControlContext);
  return (
    <React.Fragment>
      <S.Input $validation={hasError} onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
    </React.Fragment>
  );
}

function Label({ children }: Children) {
  const { hasError } = React.useContext(FormControlContext);
  return <S.Label $validation={hasError}>{children}</S.Label>;
}

FormControl.Input = Input;
FormControl.Label = Label;
FormControl.ErrorMessage = ErrorMessage;
