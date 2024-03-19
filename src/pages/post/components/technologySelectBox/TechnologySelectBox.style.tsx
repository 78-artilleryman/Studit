import styled from 'styled-components';

export const SelectBox = styled.div`
  width: 305px;
  height: 56px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;

export const Placeholder = styled.h2`
  font-size: 16px;
  color: #7f7f7f;
  font-weight: 500;
`;

export const Technology = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  width: 665px;
  padding: 10px;
  background-color: white;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  z-index: 999;
`;

export const SubTitle = styled.h3`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
