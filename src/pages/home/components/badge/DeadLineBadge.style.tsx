import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  border-radius: 20px;
  opacity: 0.5;
  top: 0;
  left: 0;
`;

export const PostClosed = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: #fb4e4e;
  color: ${colors.white};
  border-radius: 10px;
  top: 40%;
  left: 30%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 10;
`;
