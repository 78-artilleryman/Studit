import CommonFilter from '../commonFilter/CommonFilter';
import { ClassificationData } from '../filterList/data';
import { FilterProps } from './Filter.type';

export default function FilterStudy(props: FilterProps) {
  return (
    <CommonFilter
      {...ClassificationData}
      $position={props.$position || 'bottom'}
      $colorMode={props.$colorMode || 'black'}
      selectedItem={props.selectedItem}
      onSelectedItem={props.onSelectedItem}
    />
  );
}
