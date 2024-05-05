import * as S from './PostItem.style';
import { FaCircleUser, FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate, isWithin3Days, deadLine } from '@pages/home/service/FormatDate';
import { useContext, useState } from 'react';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import AuthContext from '@pages/auth/context/AuthContext';

interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

interface PostItemProps {
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

function PostItem({ postdata }: PostItemProps) {
  const { user } = useContext(AuthContext);
  const getImageSrc = (stack: string) => `postLogoImages/${stack}.svg`;

  const projectStartDate: string = formatDate(postdata.projectStartDate);
  const projectEndDate: string = formatDate(postdata.projectEndDate);
  const isTodayPostDeadline: boolean = isWithin3Days(postdata.postDeadline);
  const postClosed: boolean = deadLine(postdata.postDeadline);

  const toggleLike = async () => {
    const postRef = doc(db, 'posts', postdata.id);

    if (user?.uid && postdata?.likes.includes(user?.uid)) {
      // 사용자가 좋아요를 미리 한 경우 -> 좋아요 취소
      await updateDoc(postRef, {
        likes: arrayRemove(user?.uid),
        likeCount: postdata?.likeCount ? postdata?.likeCount - 1 : 0,
      });
    } else {
      // 사용자가 좋아요를 미리 한 경우 -> 좋아요 추가
      await updateDoc(postRef, {
        likes: arrayUnion(user?.uid),
        likeCount: postdata?.likeCount ? postdata?.likeCount + 1 : 1,
      });
    }
  };

  return (
    <S.Post>
      {(postdata.closed || postClosed) && (
        <>
          <S.Background></S.Background>
          <S.PostClosed>공고 마감</S.PostClosed>
        </>
      )}
      <S.Tags>
        <S.TypeTag>📙 {postdata.studyType}</S.TypeTag>
        {isTodayPostDeadline && <S.DeadTag>❗ 마감임박</S.DeadTag>}
        <S.LikeButton onClick={toggleLike}>
          {user?.uid && postdata?.likes.includes(user?.uid) ? (
            <FaStar size={20} color="#fddb00" />
          ) : (
            <FaRegStar size={20} color="#6d6d6d" />
          )}
        </S.LikeButton>
      </S.Tags>
      <Link to={`/post/${postdata.id}`}>
        <S.PostContent>
          <S.StudyPeriod>
            {projectStartDate} ~ {projectEndDate}
          </S.StudyPeriod>
          <S.PostTitle>{postdata.postTitle}</S.PostTitle>
          <S.PostSubTitle>{postdata.postSubTitle}</S.PostSubTitle>
          <S.TechnologyImageList>
            {postdata.technologys?.slice(0, 6).map((tech, index) => (
              <S.TechImage key={index} src={getImageSrc(tech)} alt={tech} />
            ))}
          </S.TechnologyImageList>
        </S.PostContent>
        <S.PostUser>
          <FaCircleUser style={{ width: '30px', height: '30px' }} />
          <S.Name>{postdata.userName}</S.Name>
        </S.PostUser>
      </Link>
    </S.Post>
  );
}

export default PostItem;
