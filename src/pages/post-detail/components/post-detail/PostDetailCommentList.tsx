import AuthContext from '@pages/auth/context/AuthContext';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import React, { useContext } from 'react';
import * as S from './PostDetailCommentList.style';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { toast } from 'react-toastify';

interface CommentData {
  comment: string;
  createdAt: string;
  email: string;
  uid: string;
  name: string;
  profileImg: string;
}

function PostDetailCommentList() {
  const { data } = useContext(PostDetailFetcherContext);
  const { user } = useContext(AuthContext);

  const deleteComment = async (commnet: CommentData) => {
    try {
      const postRef = doc(db, 'posts', data.id);

      await updateDoc(postRef, {
        comments: arrayRemove(commnet),
      });

      toast.success('댓글을 삭제했습니다.');
    } catch (e: any) {
      console.log(e);
      toast.success('댓글을 삭제 실패');
    }
  };

  return (
    <S.CommemtList>
      {data?.comments?.map((comment: CommentData, i: number) => (
        <S.Comment key={i}>
          <S.Profile>
            {comment.profileImg ? (
              <S.ProfileImage src={comment.profileImg} />
            ) : (
              <S.ProfileText>{comment.name?.[0]}</S.ProfileText>
            )}
          </S.Profile>
          <div>
            <S.Name>{comment.name}</S.Name>
            <S.Date>{comment.createdAt}</S.Date>
          </div>
          <S.Content>
            <S.ContentText>{comment.comment}</S.ContentText>
            {user?.uid === comment.uid && (
              <S.Buttons>
                <button>수정</button>
                <button onClick={() => deleteComment(comment)}>삭제</button>
              </S.Buttons>
            )}
          </S.Content>
        </S.Comment>
      ))}
    </S.CommemtList>
  );
}

export default PostDetailCommentList;
