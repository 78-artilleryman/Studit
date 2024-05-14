import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StarPosts = styled.div`
  width: 280px;
  padding: 20px 10px;
  background-color: #feffcb;
  border-radius: 10px;
  height: 280px;
`;

export const StarPostTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const StarPostList = styled.ul`
  margin: 20px 0;
`;

export const StarPostItem = styled.li`
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
