import styled from 'styled-components';

export const Filter = styled.div`
  width: 110px;
  height: 16px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border: 1px solid #000;
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 14px;
  color: #000;
  font-weight: 500;
`;

export const Icon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Technology = styled.div`
  border-radius: 10px;
  border: 1px solid #000;
  width: 650px;
  padding: 10px;
  background-color: white;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
`;

export const SubTitle = styled.h3`
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;

export const TechnologyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
