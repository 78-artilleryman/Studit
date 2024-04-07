import React from 'react';
import * as S from './StudyInfo.style';

function StudyInfo() {
  return (
    <S.StudyInfoList>
      <S.StudyListItem>
        <S.StudyType>🗂 스터디 종류</S.StudyType>
        <S.StudyDescription>스터디</S.StudyDescription>
      </S.StudyListItem>
      <S.StudyListItem>
        <S.StudyType>👨‍👨‍👦‍👦 모집인원</S.StudyType>
        <S.StudyDescription>4명</S.StudyDescription>
      </S.StudyListItem>
      <S.StudyListItem>
        <S.StudyType>🏠 진행방식</S.StudyType>
        <S.StudyDescription>위워크</S.StudyDescription>
      </S.StudyListItem>
      <S.StudyListItem>
        <S.StudyType>📆 모집 마감일</S.StudyType>
        <S.StudyDescription>2024-02-01</S.StudyDescription>
      </S.StudyListItem>
      <S.StudyListItem>
        <S.StudyType>📚 기술 스택</S.StudyType>
        <S.Skills>
          <S.SkillItem>
            <img src="/postLogoImages/ReactJs.svg" alt="" />
          </S.SkillItem>
          <S.SkillItem>
            <img src="/postLogoImages/NextJs.svg" alt="" />
          </S.SkillItem>
          <S.SkillItem>
            <img src="/postLogoImages/PostCss.svg" alt="" />
          </S.SkillItem>
          <S.SkillItem>
            <img src="/postLogoImages/TypeScript.svg" alt="" />
          </S.SkillItem>
        </S.Skills>
      </S.StudyListItem>
    </S.StudyInfoList>
  );
}

export default StudyInfo;
