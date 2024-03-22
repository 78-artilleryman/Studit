import SelectBoxList from './components/selectBoxList/SelectBoxList';
import PostForm from './components/postForm/PostForm';
import ActionButtons from './components/actionButtons/ActionButtons';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { FormEvent } from 'react';
import { db } from '@config/firebaseApp';
import { usePostData } from '@Pages/post/context/PostDataContext';
import { toast } from 'react-toastify';

function Post() {
  const { postData } = usePostData();
  const navigator = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { projectStartDate, projectEndDate, postDeadline, technologys, ...data } = postData;
    try {
      await addDoc(collection(db, 'posts'), {
        ...data,
        projectStartDate: projectStartDate.toDate(),
        projectEndDate: projectEndDate.toDate(),
        postDeadline: postDeadline.toDate(),
        createdAt: new Date().toLocaleDateString('ko', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        uid: 'hlxg44fDysNXfoxAF3rBYgKrkB53',
        userName: '윤병현',
      });

      toast.success('게시물을 생성했습니다.');
      navigator('/');
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
