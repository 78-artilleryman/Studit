import React from 'react';
import CommonFilter from '../commonFilter/CommonFilter';
import { StudyCountData } from '../filterList/data';
import { FilterProps } from './Filter.type';

export default function FilterPeriod(props: FilterProps) {
  return (
    <CommonFilter
      {...StudyCountData}
      $position={props.$position}
      $colorMode={props.$colorMode}
      selectedItem={props.selectedItem}
      onSelectedItem={props.onSelectedItem}
    />
  );
}
