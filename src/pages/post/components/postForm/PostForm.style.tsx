import styled from 'styled-components';

export const PostFormLayout = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 0.5fr) / repeat(2, 1fr);
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
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  margin-top: 10px;
`;

export const ContentTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  margin-top: 10px;
  resize: none;
`;
