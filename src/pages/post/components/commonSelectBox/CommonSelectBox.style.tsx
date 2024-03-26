import styled from 'styled-components';
import { colors } from '@styles/colors';

export const Selectbox = styled.div`
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

export const Dropdown = styled.ul`
  border-radius: 10px;
  border: 1px solid ${colors.black};
  position: absolute;
  top: calc(100% + 10px);
  width: 100%;
  padding: 10px 0;
  left: 0;
  background-color: ${colors.white};
  z-index: 999;
`;

export const DropdownItem = styled.li`
  color: ${colors.disabled};
  text-align: center;
  width: 100%;
  font-weight: 500;
  padding: 5px;

  &:hover {
    color: ${colors.black};
  }
`;
