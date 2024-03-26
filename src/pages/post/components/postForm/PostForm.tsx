import React from 'react';
import TextEditor from '../textEditor/TextEditor';
import * as S from './PostForm.style';
import FormLabel from '../formLabel/FormLabel';

function postForm() {
  return (
    <S.PostFormLayout>
      <S.PostFormTitle>
        <FormLabel componentName="스터디 제목" />
        <S.TitleInput type="test" placeholder="프로젝트 제목을 입력해주세요." />
      </S.PostFormTitle>
      <S.PostFormSubTitle>
        <FormLabel componentName="요약 내용" />
        <S.ContentTextArea name="" id="" cols={30} rows={10} placeholder="요약 내용을 입력해주세요"></S.ContentTextArea>
      </S.PostFormSubTitle>
      <TextEditor />
    </S.PostFormLayout>
  );
}

export default postForm;
