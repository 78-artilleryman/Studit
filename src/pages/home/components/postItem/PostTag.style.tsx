import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Tag = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StudyTypeTag = styled.div`
  padding: 4px 10px;
  border: none;
  font-size: 12px;
  border-radius: 50px;
  color: ${colors.black};
  font-weight: 500;
  background: #d9d9d9;
  text-align: center;
`;

export const DeadLineTag = styled(StudyTypeTag)`
  color: ${colors.deadTag};
  background: #ffbdbd;
`;
