import styled from 'styled-components';

export const Filter = styled.div`
  width: 120px;
  height: 37px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  position: relative;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 14px;
  color: #000;
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
