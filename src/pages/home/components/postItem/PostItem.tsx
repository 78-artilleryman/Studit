import * as S from './PostItem.style';
import DeadLineBadge from '../badge/DeadLineBadge';
import PostTag from './PostTag';
import Profile from '../profile/Profile';
import { FaCircleUser, FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate, isWithin3Days, deadLine } from '@pages/home/service/FormatDate';
import { useContext } from 'react';
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
    <Link to={`/post/${postdata.id}`}>
      <S.Post>
        <S.Bookmark>
          <img src="/images/icons/star.svg" alt="북마크 설정하기" />
        </S.Bookmark>
        {postClosed && <DeadLineBadge />}
        <PostTag studyType={postdata.studyType} isDeadLine={isTodayPostDeadline} />
        <S.PostContent>
          <S.StudyPeriod>
            {projectStartDate} ~ {projectEndDate}
          </S.StudyPeriod>
          <S.PostTitle>{postdata.postTitle}</S.PostTitle>
          <S.PostDescription>{postdata.postSubTitle}</S.PostDescription>
          <S.TechnologyImageList>
            {postdata.technologys?.slice(0, 6).map((tech, index) => (
              <S.TechImage key={index} src={getImageSrc(tech)} alt={tech} />
            ))}
          </S.TechnologyImageList>
        </S.PostContent>
        <Profile username={postdata.userName!} />
      </S.Post>
    </Link>
  );
}

export default PostItem;
