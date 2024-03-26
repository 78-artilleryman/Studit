import React from 'react';
import styled from 'styled-components';
import { colors } from '@styles/colors';

export const Label = styled.label`
  font-size: 16px;
  color: ${colors.black};
  font-weight: 700;
  display: block;
`;

function SelectBoxLabel({ componentName }: { componentName: string }) {
  return (
    <>
      <Label>{componentName}</Label>
    </>
  );
}

export default SelectBoxLabel;
