import * as S from './PostItem.style';
import DeadLineBadge from '../badge/DeadLineBadge';
import PostTag from './PostTag';
import Profile from '../profile/Profile';
import { Link } from 'react-router-dom';
import { formatDate, isWithin3Days, deadLine } from '@pages/home/service/FormatDate';
import { RiEye2Line } from 'react-icons/ri';
import { FaRegStar } from 'react-icons/fa';

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
    postViews: string[];
  };
}

function PostItem({ postdata }: PostItemProps) {
  const getImageSrc = (stack: string) => `postLogoImages/${stack}.svg`;

  const projectStartDate: string = formatDate(postdata.projectStartDate);
  const projectEndDate: string = formatDate(postdata.projectEndDate);
  const isTodayPostDeadline: boolean = isWithin3Days(postdata.postDeadline);
  const postClosed: boolean = deadLine(postdata.postDeadline);

  return (
    <Link to={`/post/${postdata.id}`}>
      <S.Post>
        {postClosed && <DeadLineBadge />}
        <PostTag studyType={postdata.studyType} isDeadLine={isTodayPostDeadline} postdata={postdata} />
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
        <S.PostItemBottom>
          <Profile username={postdata.userName!} />
          <S.PostItemIcons>
            <RiEye2Line color="#6d6d6d" />
            <S.numver>{postdata.postViews.length}</S.numver>
            <FaRegStar color="#6d6d6d" />
            <S.numver>{postdata.likeCount}</S.numver>
          </S.PostItemIcons>
        </S.PostItemBottom>
      </S.Post>
    </Link>
  );
}

export default PostItem;
