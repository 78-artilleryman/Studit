import dayjs, { Dayjs } from 'dayjs';
import * as S from './PostItem.style';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

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

  // Timestamp를 Dayjs로 변환하는 함수
  const timestampToDayjs = (timestamp: Timestamp): Dayjs => {
    const milliseconds: number = timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000);
    return dayjs(milliseconds);
  };

  // Dayjs 객체를 원하는 형식의 날짜로 변환하는 함수
  const formatDate = (date: Dayjs): string => {
    return date.format('YYYY-MM-DD');
  };

  const projectStartDate: string = formatDate(timestampToDayjs(Postdata.projectStartDate));
  const projectEndDate: string = formatDate(timestampToDayjs(Postdata.projectEndDate));
  const postDeadline: string = formatDate(timestampToDayjs(Postdata.postDeadline));

  return (
    <Link to={``}>
      <S.Post>
        {Postdata.closed && (
          <>
            <S.Background></S.Background>
            <S.PostClosed>공고 마감</S.PostClosed>
          </>
        )}
        <S.Tags>
          <S.TypeTag>📙 {Postdata.studyType}</S.TypeTag>
          <S.DeadTag>❗ 마감임박</S.DeadTag>
        </S.Tags>
        <S.PostContent>
          <S.StudyPeriod>
            {projectStartDate} ~ {projectEndDate}
          </S.StudyPeriod>
          <S.PostTitle>{Postdata.postTitle}</S.PostTitle>
          <S.PostSubTitle>{Postdata.postSubTitle}</S.PostSubTitle>
          <S.TechnologyImageList>
            {Postdata.technologys.slice(0, 6).map((tech, index) => (
              <S.TechImage key={index} src={getImageSrc(tech)} alt={tech} />
            ))}
          </S.TechnologyImageList>
        </S.PostContent>
        <S.PostUser>
          <FaCircleUser style={{ width: '30px', height: '30px' }} />
          <S.Name>{Postdata.userName}</S.Name>
        </S.PostUser>
      </S.Post>
    </Link>
  );
}

export default PostItem;
