import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Post = styled.div`
  width: 305px;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition-duration: 0.4s;
  transition-property: transform;
  position: relative;

  &:hover {
    transform: scale(1.02);
    border: 1px solid ${colors.black};
  }
`;

export const PostContent = styled.div`
  border-bottom: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StudyPeriod = styled.p`
  color: #b0b0b0;
  font-size: 12px;
  font-weight: 500;
`;

export const PostTitle = styled.h2`
  font-size: 18px;
  margin: 5px 0;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  height: 26px;
`;

export const PostDescription = styled.h3`
  color: #8e8e8e;
  font-size: 16px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  min-height: 72px;
`;

export const TechnologyImageList = styled.div`
  display: flex;
  gap: 10px;
  min-height: 35px;
  margin: 20px 0;
`;

export const TechImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

export const PostUser = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;

export const Name = styled.p`
  color: ${colors.black};
  font-size: 14px;
  font-weight: 500;
`;

export const Bookmark = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const PostItemBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PostItemIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 8px;
`;

export const numver = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.placeholder};
`;
