import { colors } from '@styles/colors';
import styled from 'styled-components';

export const PostDetailTitle = styled.h2`
  margin: 10px 0 20px 0;
  font-size: 40px;
`;

export const PostDetailUsername = styled.div``;

export const PostDetailDate = styled.div``;

export const PostDetailUserWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  padding-bottom: 20px;
  border-bottom: 1px dashed ${colors.border};

  ${PostDetailUsername} {
    margin-left: 10px;
  }

  ${Date} {
    margin-left: 10px;
  }
`;

export const PoseDetailUserImage = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
`;
