import * as S from './PostItem.style';
import { FaCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

interface PostItemProps {
  Postdata: {
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

function PostItem({ Postdata }: PostItemProps) {
  const getImageSrc = (stack: string) => `postLogoImages/${stack}.svg`;

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
            {Postdata.projectStartDate} - {Postdata.projectEndDate}
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
