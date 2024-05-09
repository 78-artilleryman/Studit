import AuthContext from '@pages/auth/context/AuthContext';
import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import * as S from './PostDetailComment.style';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function PostDetailCommentInput() {
  const { data } = useContext(PostDetailFetcherContext);
  const { user } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const inputValue = formData.get('comment');

    if (data && user) {
      const postRef = doc(db, 'posts', data.id);

      const commentObj = {
        comment: inputValue,
        uid: user?.uid,
        email: user?.email,
        name: user?.displayName,
        profileImg: user?.photoURL,
        createdAt: new Date()?.toLocaleDateString('ko', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        commentId: uuid(),
      };

      await updateDoc(postRef, {
        comments: arrayUnion(commentObj),
      });
      setInputValue('');
      toast.success('댓글이 생성되었습니다.');
    } else {
      toast.error('로그인 해주세요.');
      navigate('/login');
    }
  };

  return (
    <S.CommentInput>
      <S.commentTitle>댓글</S.commentTitle>
      <S.Form onSubmit={onSubmit}>
        <S.Profile>
          {user?.photoURL ? (
            <S.ProfileImage src={user?.photoURL} alt="" />
          ) : (
            <S.ProfileText>{user?.displayName?.[0]}</S.ProfileText>
          )}
        </S.Profile>
        <S.Input
          type="text"
          name="comment"
          placeholder="댓글을 입력하세요."
          onChange={onChange}
          value={inputValue}
          autoComplete="off"
        />
        <S.SubmitButton type="submit">댓글 입력</S.SubmitButton>
      </S.Form>
    </S.CommentInput>
  );
}

export default PostDetailCommentInput;
