import { ClassificationData, membersData, systemData, studyCountData, technologyData } from './data';
import SelectBox from '../commonSelectBox/CommonSelectBox';
import styled from 'styled-components';
import TechnologySelectBox from '../technologySelectBox/TechnologySelectBox';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormLabel from '../formLabel/FormLabel';
import { usePostData } from '@Pages/post/context/PostDataContext';

const SelectBoxLaout = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
`;

function SelectBoxList() {
  const { postData, onChange } = usePostData();

  return (
    <SelectBoxLaout>
      <SelectBox {...ClassificationData} position="bottom"></SelectBox>
      <SelectBox {...membersData} position="bottom"></SelectBox>
      <SelectBox {...systemData} position="bottom"></SelectBox>
      <SelectBox {...studyCountData} position="bottom"></SelectBox>
      <TechnologySelectBox {...technologyData} position="bottom"></TechnologySelectBox>
      <DemoItem label={<FormLabel componentName="모집 마감일" />}>
        <DatePicker value={postData.postDeadline} onChange={newValue => onChange('postDeadline', newValue)} />
      </DemoItem>
      <DemoItem label={<FormLabel componentName="스터디 시작일" />}>
        <DatePicker value={postData.projectStartDate} onChange={newValue => onChange('projectStartDate', newValue)} />
      </DemoItem>
      <DemoItem label={<FormLabel componentName="스터디 마감일" />}>
        <DatePicker value={postData.projectEndDate} onChange={newValue => onChange('projectEndDate', newValue)} />
      </DemoItem>
    </SelectBoxLaout>
  );
}

export default SelectBoxList;
