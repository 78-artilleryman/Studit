import CommonFilter from '../commonFilter/CommonFilter';
import { ClassificationData, StudyCountData, technologyData } from './data';
import TechnologyFilter from '../technologyFilter/TechnologyFilter';
import styled from 'styled-components';

const FilterLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function FilterList() {
  return (
    <FilterLayout>
      <CommonFilter {...ClassificationData} position={'bottom'} />
      <CommonFilter {...StudyCountData} position={'bottom'} />
      <TechnologyFilter {...technologyData} position={'bottom'} />
    </FilterLayout>
  );
}

export default FilterList;
