import CommonFilter from '../commonFilter/CommonFilter';
import { ClassificationData, StudyCountData, technologyData } from './data';
import TechnologyFilter from '../technologyFilter/TechnologyFilter';
import styled from 'styled-components';
import FilterStudy from '../filter/FilterStudy';
import FilterPeriod from '../filter/FilterPeriod';

const FilterLayout = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

interface FilterListProps {
  $colorMode: 'black' | 'white';
  $position?: 'bottom' | 'top';
  selectedItem: string;
  onSelectedItem: (value: string) => void;
}

function FilterList({ $colorMode, $position = 'bottom', selectedItem, onSelectedItem }: FilterListProps) {
  return (
    <FilterLayout>
      <FilterStudy
        $position={$position}
        $colorMode={$colorMode}
        selectedItem={selectedItem}
        onSelectedItem={onSelectedItem}
      />

      <FilterPeriod
        $position={$position}
        $colorMode={$colorMode}
        selectedItem={selectedItem}
        onSelectedItem={onSelectedItem}
      />
      <TechnologyFilter {...technologyData} $position={$position} $colorMode={$colorMode} />
    </FilterLayout>
  );
}

export default FilterList;
