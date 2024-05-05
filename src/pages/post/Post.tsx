import SelectBoxList from './components/selectBoxList/SelectBoxList';
import PostForm from './components/postForm/PostForm';
import ActionButtons from './components/actionButtons/ActionButtons';

import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { FormEvent, useContext } from 'react';
import { db } from '@config/firebaseApp';
import { initialPostData, usePostData } from '../post/context/PostDataContext';
import { toast } from 'react-toastify';
import AuthContext from '@pages/auth/context/AuthContext';
import { emptyStrings } from './util/EmptyString';

function Post() {
  const { postData, setPostData } = usePostData();
  const navigator = useNavigate();
  const { user } = useContext(AuthContext);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { projectStartDate, projectEndDate, postDeadline, technologys, closed, ...data } = postData;

    const hasEmpty: boolean = emptyStrings({ ...data });

    try {
      if (!hasEmpty) {
        await addDoc(collection(db, 'posts'), {
          ...data,
          technologys: technologys,
          projectStartDate: projectStartDate.toDate(),
          projectEndDate: projectEndDate.toDate(),
          postDeadline: postDeadline.toDate(),
          createdAt: new Date().toLocaleDateString('ko', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
          uid: user?.uid,
          userName: user?.displayName,
          likeCount: 0,
          likes: [],
        });

        toast.success('게시물을 생성했습니다.');
        setPostData(initialPostData);
        navigator('/');
      } else {
        toast.error('모든 내용을 작성해 주세요');
      }
    } catch (e: any) {
      toast.error('게시물 생성 실패');
      console.log(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <SelectBoxList />
      <PostForm />
      <ActionButtons />
    </form>
  );
}

export default Post;
