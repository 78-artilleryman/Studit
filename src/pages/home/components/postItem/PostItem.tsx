import * as S from './PostItem.style';
import { FaCircleUser, FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate, isWithin3Days, deadLine } from '@pages/home/service/FormatDate';
import { useState } from 'react';

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

  const [likeState, setLikeState] = useState(false);

  return (
    <S.Post>
      {(Postdata.closed || postClosed) && (
        <>
          <S.Background></S.Background>
          <S.PostClosed>공고 마감</S.PostClosed>
        </>
      )}
      <S.Tags>
        <S.TypeTag>📙 {Postdata.studyType}</S.TypeTag>
        {isTodayPostDeadline && <S.DeadTag>❗ 마감임박</S.DeadTag>}
        <S.LikeButton onClick={() => setLikeState(prev => !prev)}>
          {likeState ? <FaStar size={20} color="#fddb00" /> : <FaRegStar size={20} color="#6d6d6d" />}
        </S.LikeButton>
      </S.Tags>
      <Link to={`/post/${Postdata.id}`}>
        <S.PostContent>
          <S.StudyPeriod>
            {projectStartDate} ~ {projectEndDate}
          </S.StudyPeriod>
          <S.PostTitle>{Postdata.postTitle}</S.PostTitle>
          <S.PostSubTitle>{Postdata.postSubTitle}</S.PostSubTitle>
          <S.TechnologyImageList>
            {Postdata.technologys?.slice(0, 6).map((tech, index) => (
              <S.TechImage key={index} src={getImageSrc(tech)} alt={tech} />
            ))}
          </S.TechnologyImageList>
        </S.PostContent>
        <S.PostUser>
          <FaCircleUser style={{ width: '30px', height: '30px' }} />
          <S.Name>{Postdata.userName}</S.Name>
        </S.PostUser>
      </Link>
    </S.Post>
  );
}

export default PostItem;
