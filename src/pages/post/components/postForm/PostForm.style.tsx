import { colors } from '@styles/colors';
import styled from 'styled-components';

export const PostFormLayout = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 0.3fr 0.3fr 0.5fr; /* 각 행의 높이 */
  grid-template-columns: 1fr 1fr; /* 각 열의 너비 */
  gap: 20px;
`;

export const PostFormTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 1;
`;

export const PostFormSubTitle = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 2;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 10px;
  border: 1px solid ${colors.selectBoxBorder};
  border-radius: 10px;
  margin-top: 10px;
`;

export const ContentTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${colors.selectBoxBorder};
  border-radius: 10px;
  margin-top: 10px;
  resize: none;
`;
