import { colors } from '@styles/colors';
import styled from 'styled-components';

export const FixedSearchBar = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  width: 60vw;
  padding: 20px;
  background-color: ${colors.black};
  color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`;

export const FilterList = styled.div`
  display: flex;
  gap: 10px;
`;
