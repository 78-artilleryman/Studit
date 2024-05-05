import * as S from './PostItem.style';
import { Link } from 'react-router-dom';
import { formatDate, isWithin3Days, deadLine } from '@pages/home/service/FormatDate';
import DeadLineBadge from '../badge/DeadLineBadge';
import PostTag from './PostTag';
import Profile from '../profile/Profile';

interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

interface PostItemProps {
  Postdata: {
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
  };
}

function PostItem({ Postdata }: PostItemProps) {
  const getImageSrc = (stack: string) => `postLogoImages/${stack}.svg`;

  const projectStartDate: string = formatDate(Postdata.projectStartDate);
  const projectEndDate: string = formatDate(Postdata.projectEndDate);
  const isTodayPostDeadline: boolean = isWithin3Days(Postdata.postDeadline);
  const postClosed: boolean = deadLine(Postdata.postDeadline);

  return (
    <Link to={`/post/${Postdata.id}`}>
      <S.Post>
        <S.Bookmark>
          <img src="/images/icons/star.svg" alt="북마크 설정하기" />
        </S.Bookmark>
        {postClosed && <DeadLineBadge />}
        <PostTag studyType={Postdata.studyType} isDeadLine={isTodayPostDeadline} />
        <S.PostContent>
          <S.StudyPeriod>
            {projectStartDate} ~ {projectEndDate}
          </S.StudyPeriod>
          <S.PostTitle>{Postdata.postTitle}</S.PostTitle>
          <S.PostDescription>{Postdata.postSubTitle}</S.PostDescription>
          <S.TechnologyImageList>
            {Postdata.technologys?.slice(0, 6).map((tech, index) => (
              <S.TechImage key={index} src={getImageSrc(tech)} alt={tech} />
            ))}
          </S.TechnologyImageList>
        </S.PostContent>
        <Profile username={Postdata.userName!} />
      </S.Post>
    </Link>
  );
}

export default PostItem;
