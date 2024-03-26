import { colors } from '@styles/colors';
import styled from 'styled-components';

export const SearchBar = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 90%;

  &::placeholder {
    color: ${colors.black};
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Icon = styled.div`
  cursor: pointer;
`;
