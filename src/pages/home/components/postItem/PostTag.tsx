import * as S from './PostTag.style';
import { FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import AuthContext from '@pages/auth/context/AuthContext';
import { db } from '@config/firebaseApp';
import { MouseEvent } from 'react';

interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

interface PostTagProps {
  studyType: string;
  isDeadLine: boolean;
  postdata: {
    id: string;
    studyType: string; // 스터디 종류
    studyMember: string; // 모집 인원
    studySystem: string; // 진행 방식
    period: string; // 진행 기간
    projectStartDate: Timestamp; //프로젝트 시작일
    projectEndDate: Timestamp;
    postDeadline: Timestamp; // 모집 마감일
    technologys: string[]; // 기술 스택
    closed: boolean;
    // 게시물 내용
    postTitle: string;
    postSubTitle: string;
    postContent: string;
    uid: string;
    createdAt: string;
    userName?: string;
    likeCount: number;
    likes: string[];
  };
}

export default function PostTag(props: PostTagProps) {
  const { user } = useContext(AuthContext);

  const toggleLike = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const postRef = doc(db, 'posts', props.postdata.id);

    if (user?.uid && props.postdata?.likes.includes(user?.uid)) {
      // 사용자가 좋아요를 미리 한 경우 -> 좋아요 취소
      await updateDoc(postRef, {
        likes: arrayRemove(user?.uid),
        likeCount: props.postdata?.likeCount ? props.postdata?.likeCount - 1 : 0,
      });
    } else {
      // 사용자가 좋아요를 미리 한 경우 -> 좋아요 추가
      await updateDoc(postRef, {
        likes: arrayUnion(user?.uid),
        likeCount: props.postdata?.likeCount ? props.postdata?.likeCount + 1 : 1,
      });
    }
  };

  return (
    <S.Tag>
      <S.StudyTypeTag>📙 {props.studyType}</S.StudyTypeTag>
      {props.isDeadLine && <S.DeadLineTag>❗ 마감임박</S.DeadLineTag>}
      <S.LikeButton onClick={toggleLike}>
        {user?.uid && props.postdata?.likes.includes(user?.uid) ? (
          <FaStar size={20} color="#fddb00" />
        ) : (
          <FaRegStar size={20} color="#6d6d6d" />
        )}
      </S.LikeButton>
    </S.Tag>
  );
}
