import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import React, { useContext } from 'react';
import * as S from './PostDetailCommentList.style';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { toast } from 'react-toastify';
import PostDetailCommentItem from './PostDetailCommentItem';

interface CommentData {
  commentId: string;
  comment: string;
  createdAt: string;
  email: string;
  uid: string;
  name: string;
  profileImg: string;
}

function PostDetailCommentList() {
  const { data } = useContext(PostDetailFetcherContext);

  const deleteComment = async (comment: CommentData) => {
    try {
      const postRef = doc(db, 'posts', data.id);

      await updateDoc(postRef, {
        comments: arrayRemove(comment),
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
        <PostDetailCommentItem key={i} commentData={comment} deleteComment={deleteComment} postId={data.id} />
      ))}
    </S.CommemtList>
  );
}

export default PostDetailCommentList;
