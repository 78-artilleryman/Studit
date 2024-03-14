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

export const Dropdown = styled.ul`
  border-radius: 10px;
  border: 1px solid #000;
  position: absolute;
  top: calc(50% + 10px);
  width: 100%;
  padding: 10px 0;
  left: 0;
  background-color: white;
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
