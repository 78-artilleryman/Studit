import styled from 'styled-components';

export const Content = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 3;
`;

export const View = styled.div`
  grid-column: 2 / 2;
  grid-row: 1 / 4;
`;

export const EditorView = {
  whiteSpace: 'pre-wrap',
  height: '790px',
  borderRadius: '10px',
  padding: '15px',
  overflow: 'scroll',
};
