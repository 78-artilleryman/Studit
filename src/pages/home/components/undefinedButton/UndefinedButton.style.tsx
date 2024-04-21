import styled from 'styled-components';
import { colors } from '@styles/colors';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-height: 80vh;
`;

export const Text = styled.p`
  color: ${colors.black};
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 150px;
  height: 56px;
  border-radius: 10px;
  background: #1e1e1e;

  color: ${colors.white};
  font-size: 16px;
  font-weight: 700;
`;
