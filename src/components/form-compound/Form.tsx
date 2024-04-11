import React, { FormEvent, PropsWithChildren } from 'react';
import * as S from './Form.style';
import FormControl from './FormControl';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit }: FormProps) {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Form>
  );
}

function Layout({ children }: PropsWithChildren) {
  return <S.InputLayout>{children}</S.InputLayout>;
}

function Description({ children }: PropsWithChildren) {
  return <S.Description>{children}</S.Description>;
}

function Title({ children }: PropsWithChildren) {
  return <S.Title>{children}</S.Title>;
}

Form.Title = Title;
Form.Description = Description;
Form.Layout = Layout;
Form.Control = FormControl;
