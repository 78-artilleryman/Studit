import styled, { keyframes } from 'styled-components';
import { colors } from '@styles/colors';

// 로딩 애니메이션 생성
const loadingAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const SkeletonContainer = styled.div`
  width: 305px;
  height: 320px;
  border: 1px solid ${colors.border};
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SkeletonSpanLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

export const SkeletonSpan = styled.span<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width}px;
  display: block;
  height: ${({ $height }) => $height}px;
  background: linear-gradient(90deg, ${colors.skeleton}, #f5f5f5, ${colors.skeleton});
  background-size: 200% 100%;
  border-radius: 10px;
  animation: ${loadingAnimation} 1.8s infinite;
`;

export const SkeletonCircleLayout = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const SkeletonCircle = styled(SkeletonSpan)`
  height: ${({ $height }) => $height}px;
  border-radius: 50%;
`;
