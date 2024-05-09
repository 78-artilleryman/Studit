import { colors } from '@styles/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PopularPosts = styled.div`
  position: sticky;
  width: 280px;
  top: 100px;
  padding: 20px 10px;
  background-color: ${colors['red-10']};
  border-radius: 10px;
  height: 280px;
`;

export const PopularPostTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const PopularPostList = styled.ul`
  margin: 20px 0;
`;

export const PopularPostItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  & + & {
    margin-top: 10px;
  }
`;

export const More = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  text-decoration: underline;
`;
