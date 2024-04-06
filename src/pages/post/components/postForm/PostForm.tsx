import TextEditor from '../textEditor/TextEditor';
import * as S from './PostForm.style';
import FormLabel from '../formLabel/FormLabel';
import { usePostData } from '@pages/post/context/PostDataContext';

function PostForm() {
  const { postData, onChageTitle } = usePostData();

  return (
    <S.PostFormLayout>
      <S.PostFormTitle>
        <FormLabel componentName="스터디 제목" />
        <S.TitleInput
          type="test"
          placeholder="프로젝트 제목을 입력해주세요."
          value={postData.postTitle}
          onChange={event => onChageTitle('postTitle', event)}
        />
      </S.PostFormTitle>
      <S.PostFormSubTitle>
        <FormLabel componentName="요약 내용" />
        <S.ContentTextArea
          cols={30}
          rows={10}
          placeholder="요약 내용을 입력해주세요"
          value={postData.postSubTitle}
          onChange={event => onChageTitle('postSubTitle', event)}
        ></S.ContentTextArea>
      </S.PostFormSubTitle>
      <TextEditor />
    </S.PostFormLayout>
  );
}
export default PostForm;
