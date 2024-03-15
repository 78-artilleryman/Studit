import styled from 'styled-components';

export const Filter = styled.div`
  width: 130px;
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

export const Dropdown = styled.ul`
  border-radius: 10px;
  border: 1px solid #000;
  position: absolute;
  top: calc(100% + 10px);
  width: 100%;
  padding: 10px 0;
  left: 0;
  background-color: white;
  z-index: 999;
`;

export const DropdownItem = styled.li`
  color: #ccc;
  text-align: center;
  width: 100%;
  font-weight: 500;
  padding: 5px;

  &:hover {
    color: #000;
  }
`;
