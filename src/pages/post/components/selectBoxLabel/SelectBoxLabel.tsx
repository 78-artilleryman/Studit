import React from 'react';
import styled from 'styled-components';

export const Label = styled.label`
  font-size: 16px;
  color: #000;
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
