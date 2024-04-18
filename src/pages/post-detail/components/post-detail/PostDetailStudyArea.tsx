import * as S from './PostDetailStudyArea.style';
import { useContext } from 'react';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import { formatDate } from '@pages/home/service/FormatDate';
import { technologiesColor } from '@styles/colors';
import Technology from '@pages/home/components/technologies/Technology';

export default function PostDetailStudyArea() {
  const { data } = useContext(PostDetailFetcherContext);

  return (
    <S.StudyList>
      <S.StudyListItem>
        <S.StudyType>🗂 스터디 종류</S.StudyType>
        <S.StudyDescription>{data.studyType}</S.StudyDescription>
      </S.StudyListItem>
      <S.StudyListItem>
        <S.StudyType>👨‍👨‍👦‍👦 모집인원</S.StudyType>
        <S.StudyDescription>{data.studyMember}</S.StudyDescription>
      </S.StudyListItem>
      <S.StudyListItem>
        <S.StudyType>🏠 진행방식</S.StudyType>
        <S.StudyDescription>수정필요</S.StudyDescription>
      </S.StudyListItem>
      <S.StudyListItem>
        <S.StudyType>📆 모집 마감일</S.StudyType>
        <S.StudyDescription>{formatDate(data.postDeadline)}</S.StudyDescription>
      </S.StudyListItem>
      <S.StudyListItem>
        <S.StudyType>📚 기술 스택</S.StudyType>
        <S.StudySkills>
          {data.technologys.length !== 0 &&
            data.technologys.map((skill: keyof typeof technologiesColor) => (
              <S.StudeySkillItem key={skill}>
                <Technology skill={skill} />
              </S.StudeySkillItem>
            ))}
        </S.StudySkills>
      </S.StudyListItem>
    </S.StudyList>
  );
}
