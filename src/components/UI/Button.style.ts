import { colors } from '@styles/colors';
import styled from 'styled-components';

interface ButtonStyle {
  $width?: number;
  $height?: number;
  $marginTop?: number;
}

export const Button = styled.button<ButtonStyle>`
  width: ${({ $width }) => ($width ? `${$width}px` : `100%`)};
  height: ${({ $height }) => `${$height}px`};
  border-radius: 10px;
  background-color: ${colors.black};
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  margin-top: ${({ $marginTop }) => ($marginTop ? `${$marginTop}px` : '30px')};

  &:disabled {
    background-color: ${colors.disabled};
    color: ${colors.white};
    cursor: not-allowed;
  }
`;
