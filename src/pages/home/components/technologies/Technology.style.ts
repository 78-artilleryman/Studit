import styled from 'styled-components';

export const TechnologyBackground = styled.div<{ background: string }>`
  display: flex;
  padding: 5px;
  padding-right: 15px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: ${({ background }) => background};
`;

export const TechnologyImage = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

export const TechnologyName = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
