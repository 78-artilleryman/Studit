import { colors } from '@styles/colors';
import { ContentWidthStyle } from '@styles/rule';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${ContentWidthStyle}
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 0;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 20px;
`;

export const Logo = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

export const MenuItem = styled.li`
  font-size: 16px;
  font-weight: 700;
`;

export const LoginButton = styled(Link)`
  display: flex;
  padding: 5px 15px;
  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 50px;
`;
