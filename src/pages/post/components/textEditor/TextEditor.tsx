import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import * as S from './TextEditor.style';
import SelectBoxLabel from '../formLabel/FormLabel';

function TextEditor() {
  const [value, setValue] = useState<string | undefined>('');
  return (
    <>
      <S.Content>
        <SelectBoxLabel componentName="스터디 상세내용"></SelectBoxLabel>
        <MDEditor
          height={'370px'}
          value={value}
          onChange={setValue}
          textareaProps={{
            placeholder: '상세 내용을 입력해 주세요.',
          }}
          preview="edit"
          style={{ marginTop: '10px' }}
        />
      </S.Content>
      <S.View>
        <MDEditor.Markdown source={value} style={S.EditorView} />
      </S.View>
    </>
  );
}

export default TextEditor;