import React, { useContext } from 'react';
import * as S from './PostDetailHeader.style';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import AuthContext from '@pages/auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '@pages/home/service/FormatDate';
import { technologiesColor } from '@styles/colors';

export default function PostDetailHeader() {
  const { data } = useContext(PostDetailFetcherContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  return (
    <React.Fragment>
      <S.Back onClick={handleGoBack}>
        <img src="/images/icons/back.svg" alt="뒤로가기" />
      </S.Back>
      <S.PostDetailTitle>{data.postTitle}</S.PostDetailTitle>

      <S.StudyList>
        <S.StudyListItem>
          <S.StudyType>🗂 스터디 종류</S.StudyType>
          <S.StudyDescriptionHashTag>🧑🏽‍💻 {data.studyType}</S.StudyDescriptionHashTag>
        </S.StudyListItem>
        <S.StudyListItem>
          <S.StudyType>👨‍👨‍👦‍👦 모집인원</S.StudyType>
          <S.StudyDescription>{data.studyMember}</S.StudyDescription>
        </S.StudyListItem>
        <S.StudyListItem>
          <S.StudyType>🏠 진행방식</S.StudyType>
          <S.StudyDescription>{data.studySystem}</S.StudyDescription>
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
                <S.StudySkillItem key={skill} $background={technologiesColor[skill]}>
                  {skill}
                </S.StudySkillItem>
              ))}
          </S.StudySkills>
        </S.StudyListItem>
      </S.StudyList>
    </React.Fragment>
  );
}
