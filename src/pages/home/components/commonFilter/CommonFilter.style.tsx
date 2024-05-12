import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Filter = styled.div<{ $colorMode: 'black' | 'white' }>`
  width: 130px;
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

export const Dropdown = styled.ul<{ $position: 'bottom' | 'top'; $colorMode: 'black' | 'white' }>`
  border-radius: 10px;
  position: absolute;
  width: 100%;
  padding: 10px 0;
  left: 0;
  ${({ $position }) => ($position === 'bottom' ? `top: calc(100% + 10px);` : `bottom: calc(100% + 40px);`)}
  background-color: ${colors.white};
  z-index: 999;
  border: 1px solid ${colors.black};
`;

export const DropdownItem = styled.li`
  color: #ccc;
  text-align: center;
  width: 100%;
  font-weight: 500;
  padding: 5px;

  &:hover {
    color: ${colors.black};
  }
`;
