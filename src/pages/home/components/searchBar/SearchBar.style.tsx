import { colors } from '@styles/colors';
import styled from 'styled-components';

export const SearchBar = styled.form<{ $colorMode: 'black' | 'white' }>`
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ $colorMode }) => `border: 1px solid ${colors[$colorMode]};`}
  ${({ $colorMode }) => `color: ${colors[$colorMode]};`}
`;

export const Input = styled.input<{ $colorMode: 'black' | 'white' }>`
  outline: none;
  border: none;
  width: 90%;
  background-color: transparent;

  &::placeholder {
    ${({ $colorMode }) => `color: ${colors[$colorMode]};`}
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Icon = styled.button`
  cursor: pointer;
`;
