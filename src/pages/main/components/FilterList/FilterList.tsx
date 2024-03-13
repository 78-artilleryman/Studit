import React from 'react';
import CommonFilter from '../commonFilter/CommonFilter';
import { ClassificationData, StudyCountData, technologyData } from './data';
import TechnologyFilter from '../ technologyFilter/ TechnologyFilter';

function FilterList() {
  return (
    <div>
      <CommonFilter {...ClassificationData} position={'bottom'} />
      <CommonFilter {...StudyCountData} position={'bottom'} />
      <TechnologyFilter {...technologyData} position={'bottom'}></TechnologyFilter>
    </div>
  );
}

export default FilterList;
