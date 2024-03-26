import styled from 'styled-components';
import { colors } from '@styles/colors';

export const TechnologyItem = styled.li`
  display: flex;
  padding: 5px;
  padding-right: 15px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ color }) => color};
  opacity: 50%;
`;

export const Image = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

export const Name = styled.p`
  color: ${colors.black};
  font-size: 14px;
  font-weight: 500;
`;
