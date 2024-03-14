import styled from 'styled-components';

export const InputLayout = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 20px;
  }
`;
