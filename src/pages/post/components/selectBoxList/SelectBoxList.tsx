import React from 'react';
import { ClassificationData, membersData, systemData, studyCountData, technologyData } from './data';
import SelectBox from '../commonSelectBox/CommonSelectBox';
import styled from 'styled-components';
import TechnologySelectBox from '../technologySelectBox/TechnologySelectBox';

const SelectBoxLaout = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
`;

function SelectBoxList() {
  return (
    <SelectBoxLaout>
      <SelectBox {...ClassificationData} position="bottom"></SelectBox>
      <SelectBox {...membersData} position="bottom"></SelectBox>
      <SelectBox {...systemData} position="bottom"></SelectBox>
      <SelectBox {...studyCountData} position="bottom"></SelectBox>
      <TechnologySelectBox {...technologyData} position="bottom"></TechnologySelectBox>
    </SelectBoxLaout>
  );
}

export default SelectBoxList;
