import React, { FormEvent } from 'react';
import * as S from './Form.style';
import FormControl from './FormControl';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

interface Children {
  children: React.ReactNode;
}

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <S.Form>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Form>
  );
}

function Layout({ children }: Children) {
  return <S.InputLayout>{children}</S.InputLayout>;
}

function Description({ children }: Children) {
  return <S.Description>{children}</S.Description>;
}

function Title({ children }: Children) {
  return <S.Title>{children}</S.Title>;
}

Form.Title = Title;
Form.Description = Description;
Form.Layout = Layout;
Form.Control = FormControl;
