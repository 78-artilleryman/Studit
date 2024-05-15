import styled from 'styled-components';
import { colors } from '@styles/colors';

export const Filter = styled.div<{ $colorMode: 'black' | 'white' }>`
  width: 120px;
  height: 37px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  ${({ $colorMode }) => `border: 1px solid ${colors[$colorMode]};`}
  ${({ $colorMode }) => `color: ${colors[$colorMode]};`}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
`;

export const Technology = styled.div<{ $position: 'bottom' | 'top' }>`
  border-radius: 10px;
  border: 1px solid #000;
  width: 665px;
  padding: 10px;
  background-color: white;
  position: absolute;
  ${({ $position }) => ($position === 'bottom' ? `top: calc(100% + 10px);` : `bottom: calc(100% + 40px);`)}
  left: 0;
  z-index: 999;
`;

export const SubTitle = styled.h3`
  color: ${colors.black};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
