import React, { useContext } from 'react';
import * as S from './PostDetailCommentItem.style';
import AuthContext from '@pages/auth/context/AuthContext';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { toast } from 'react-toastify';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';

interface CommentData {
  id: string;
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
}

function PostDetailCommentItem({ commentData, postId }: PostDetailCommentItemProps) {
  const { data } = useContext(PostDetailFetcherContext);

  const deleteComment = async () => {
    try {
      const postRef = doc(db, 'posts', data.id);

      await updateDoc(postRef, {
        comments: arrayRemove(commentData),
      });

      toast.success('댓글을 삭제했습니다.');
    } catch (e: any) {
      console.log(e);
      toast.success('댓글을 삭제 실패');
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

      <div>
        <S.Name>{commentData.name}</S.Name>
        <S.Date>{commentData.createdAt}</S.Date>
      </div>
      <S.Content>
        <S.ContentText>{commentData.comment}</S.ContentText>
        {user?.uid === commentData.uid && (
          <S.Buttons>
            <button onClick={deleteComment}>삭제</button>
          </S.Buttons>
        )}
      </S.Content>
    </S.Comment>
  );
}

export default PostDetailCommentItem;
