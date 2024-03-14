import styled from 'styled-components';

export const Layout = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const InputElement = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  height: 56px;
  padding: 0 10px;

  &::placeholder {
    font-weight: 400;
    color: #7f7f7f;
  }
`;
