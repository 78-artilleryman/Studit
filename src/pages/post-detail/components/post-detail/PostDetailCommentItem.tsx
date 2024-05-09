import React, { ChangeEvent, useContext, useState } from 'react';
import * as S from './PostDetailCommentItem.style';
import AuthContext from '@pages/auth/context/AuthContext';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { toast } from 'react-toastify';

interface CommentData {
  commentId: string;
  comment: string;
  createdAt: string;
  email: string;
  uid: string;
  name: string;
  profileImg: string;
}

interface PostDetailCommentItemProps {
  commentData: CommentData;
  postId: string;
  deleteComment: (comment: CommentData) => void;
}

function PostDetailCommentItem({ commentData, deleteComment, postId }: PostDetailCommentItemProps) {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const toggleInput = () => {
    setIsInputOpen(prev => !prev);
    setInputValue(commentData.comment);
  };

  const updateComment = async () => {
    try {
      const postRef = doc(db, 'posts', postId);

      await updateDoc(postRef, {
        comments: arrayRemove(commentData),
      });

      await updateDoc(postRef, {
        comments: arrayUnion({
          ...commentData,
          createdAt: new Date()?.toLocaleDateString('ko', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }),
          comment: inputValue,
        }),
      });

      toast.success('댓글을 수정했습니다.');
    } catch (e: any) {
      console.log(e);
      toast.error('댓글을 수정 실패');
    }
  };

  const { user } = useContext(AuthContext);
  return (
    <S.Comment>
      <S.Profile>
        {commentData.profileImg ? (
          <S.ProfileImage src={commentData.profileImg} />
        ) : (
          <S.ProfileText>{commentData.name?.[0]}</S.ProfileText>
        )}
      </S.Profile>
      {isInputOpen ? (
        <S.InputLayout>
          <S.Input type="text" value={inputValue} onChange={onChange} />
          <S.UpdateButtons>
            <button onClick={updateComment}>확인</button>
            <button onClick={toggleInput}>취소</button>
          </S.UpdateButtons>
        </S.InputLayout>
      ) : (
        <>
          <div>
            <S.Name>{commentData.name}</S.Name>
            <S.Date>{commentData.createdAt}</S.Date>
          </div>
          <S.Content>
            <S.ContentText>{commentData.comment}</S.ContentText>
            {user?.uid === commentData.uid && (
              <S.Buttons>
                <button onClick={toggleInput}>수정</button>
                <button onClick={() => deleteComment(commentData)}>삭제</button>
              </S.Buttons>
            )}
          </S.Content>
        </>
      )}
    </S.Comment>
  );
}

export default PostDetailCommentItem;
