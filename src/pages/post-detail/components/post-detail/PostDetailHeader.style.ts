import { colors, technologiesColor } from '@styles/colors';
import styled from 'styled-components';

export const PostDetailTitle = styled.h2`
  margin: 10px 0 20px 0;
  font-size: 32px;
  font-weight: 700;
`;

export const Back = styled.button`
  width: 64px;
  height: 64px;
`;

export const StudyList = styled.ul`
  padding: 30px 0;
  border-bottom: 1px solid ${colors.border};
`;

export const StudyListItem = styled.li`
  display: flex;
  font-size: 18px;

  & + & {
    margin-top: 20px;
  }
`;

export const StudyType = styled.span`
  display: block;
  font-weight: 500;
  width: 151px;
  color: #9f9f9f;
`;

export const StudyDescription = styled.span`
  display: block;
  font-weight: 500;
`;

export const StudyDescriptionHashTag = styled(StudyDescription)`
  padding: 4px 10px;
  background: #e1e1e1;
  border-radius: 50px;
  font-size: 14px;
`;

export const StudySkills = styled.ul`
  display: flex;
`;

export const StudySkillItem = styled.li<{ $background: string }>`
  ${({ $background }) => `background-color: ${$background}`};
  padding: 4px 10px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  & + & {
    margin-left: 10px;
  }
`;
