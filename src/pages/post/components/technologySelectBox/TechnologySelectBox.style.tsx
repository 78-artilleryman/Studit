import styled from 'styled-components';
import { colors } from '@styles/colors';

export const SelectBox = styled.div`
  width: 305px;
  height: 56px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border: 1px solid ${colors.selectBoxBorder};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  &:hover {
    border: 1px solid ${colors.black};
  }
`;

export const Placeholder = styled.h2`
  font-size: 16px;
  color: ${colors.placeholder};
  font-weight: 500;
`;

export const Technology = styled.div`
  border-radius: 10px;
  border: 1px solid ${colors.black};
  width: 665px;
  padding: 10px;
  background-color: ${colors.white};
  position: absolute;
  top: calc(100% + 10px);
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
