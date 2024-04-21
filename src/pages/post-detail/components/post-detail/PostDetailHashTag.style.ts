import { colors } from '@styles/colors';
import styled from 'styled-components';

export const PostDetailHashtag = styled.ul`
  display: flex;
  gap: 0 10px;
`;

export const PostDetailHashtagItem = styled.li`
  padding: 4px 8px;
  font-weight: 500;
  background-color: ${colors.hashtag};
  border-radius: 50px;
`;

export const PostDetailStudyType = styled(PostDetailHashtagItem)``;
