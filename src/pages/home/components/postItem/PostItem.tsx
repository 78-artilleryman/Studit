import * as S from './PostItem.style';
import { FaCircleUser } from 'react-icons/fa6';

interface PostItemProps {
  data: {
    id: number;
    studyType: string; // 스터디 종류
    studyMember: string; // 모집 인원
    studySystem: string; // 진행 방식
    period: string; // 진행 기간
    projectStartDate: string; //프로젝트 시작일
    projectEndDate: string;
    postDeadline: string; // 모집 마감일
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

function PostItem({ data }: PostItemProps) {
  const getImageSrc = (stack: string) => `postLogoImages/${stack}.svg`;

  return (
    <S.Post>
      <S.Tags>
        <S.TypeTag>📙 {data.studyType}</S.TypeTag>
        <S.DeadTag>❗ 마감임박</S.DeadTag>
      </S.Tags>
      <S.PostContent>
        <S.StudyPeriod>
          {data.projectStartDate} - {data.projectEndDate}
        </S.StudyPeriod>
        <S.PostTitle>{data.postTitle}</S.PostTitle>
        <S.PostSubTitle>{data.postSubTitle}</S.PostSubTitle>
        <S.TechnologyImageList>
          {data.technologys.slice(0, 6).map((tech, index) => (
            <img key={index} src={getImageSrc(tech)} alt={tech} />
          ))}
        </S.TechnologyImageList>
      </S.PostContent>
      <S.PostUser>
        <FaCircleUser style={{ width: '30px', height: '30px' }} />
        <S.Name>{data.userName}</S.Name>
      </S.PostUser>
    </S.Post>
  );
}

export default PostItem;
