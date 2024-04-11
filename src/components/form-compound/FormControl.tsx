import React from 'react';
import * as S from './FormControl.style';

interface FormControlContextProps {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  hasError: boolean;
  value: string;
  errorMessage: string;
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

function Input({ placeholder }: React.InputHTMLAttributes<HTMLInputElement>) {
  const { handleInputChange, handleInputBlur, hasError } = React.useContext(FormControlContext);
  return (
    <React.Fragment>
      <S.Input $validation={hasError} onChange={handleInputChange} onBlur={handleInputBlur} placeholder={placeholder} />
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
