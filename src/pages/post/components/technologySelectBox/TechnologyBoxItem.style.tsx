import styled from 'styled-components';
import { colors } from '@styles/colors';

interface TechnologyItemTOption {
  $checked: boolean;
}

export const TechnologyItem = styled.li<TechnologyItemTOption>`
  display: flex;
  padding: 5px;
  padding-right: 15px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ color }) => color};
  opacity: ${({ $checked }) => ($checked ? `100%` : '50%')};

  &:hover {
    opacity: 100%;
  }
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
