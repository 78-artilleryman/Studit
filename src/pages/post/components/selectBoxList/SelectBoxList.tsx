import React from 'react';
import { ClassificationData, membersData, systemData, studyCountData, technologyData } from './data';
import SelectBox from '../commonSelectBox/CommonSelectBox';
import styled from 'styled-components';
import TechnologySelectBox from '../technologySelectBox/TechnologySelectBox';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SelectBoxLabel from '../selectBoxLabel/SelectBoxLabel';

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
      <DemoItem label={<SelectBoxLabel componentName="모집 마감일" />}>
        <DatePicker />
      </DemoItem>
      <DemoItem label={<SelectBoxLabel componentName="스터디 시작일" />}>
        <DatePicker />
      </DemoItem>
      <DemoItem label={<SelectBoxLabel componentName="스터디 마감일" />}>
        <DatePicker />
      </DemoItem>
    </SelectBoxLaout>
  );
}

export default SelectBoxList;
