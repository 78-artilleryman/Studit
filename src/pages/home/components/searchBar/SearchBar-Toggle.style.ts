import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const Description = styled.p`
  position: absolute;
  top: -100%;
  left: 50%;
  font-size: 14px;
  width: 130px;
  text-align: center;
  transform: translate(-50%, 50%);
`;

export const ToggleRelative = styled.div`
  position: relative;
  width: 60px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const ToggleLayout = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: ${colors.black};
  padding: 0 5px;
  border-radius: 50px;

  &.open ${Button} {
    left: 0;
  }

  &.closed ${Button} {
    left: 100%;
    transform: translate(-100%, -50%);
  }

  &.open ${Description} {
    font-weight: 500;
  }

  &.closed ${Description} {
    color: #767676;
    font-weight: 400;
  }
`;
