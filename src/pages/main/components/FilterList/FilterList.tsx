import React from 'react';
import CommonFilter from '../Filter/CommonFilter';
import { ClassificationData, StudyCountData } from './data';

function FilterList() {
  return (
    <div>
      <CommonFilter {...ClassificationData} position={'bottom'} />
      <CommonFilter {...StudyCountData} position={'bottom'} />
    </div>
  );
}

export default FilterList;
