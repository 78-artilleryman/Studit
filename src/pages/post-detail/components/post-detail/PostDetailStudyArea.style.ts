import { colors } from '@styles/colors';
import styled from 'styled-components';

export const StudyList = styled.ul`
  padding: 30px 0;
  border-bottom: 1px dashed ${colors.border};
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
  font-weight: 700;
  width: 159px;
`;

export const StudyDescription = styled.span`
  display: block;
  font-weight: 400;
`;

export const StudySkills = styled.ul`
  display: flex;
`;

export const StudeySkillItem = styled.li`
  & + & {
    margin-left: 10px;
  }
`;
