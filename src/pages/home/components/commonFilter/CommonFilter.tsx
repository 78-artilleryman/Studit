import useSelect from '@hooks/useSelect';
import * as S from './CommonFilter.style';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useFilter } from '../../context/FilterContext';

interface ClassificationItem {
  key: number;
  value: string;
  name: string;
}

interface CommonFilterProps {
  title: string;
  name: string;
  $position?: 'bottom' | 'top';
  icon?: string;
  list: ClassificationItem[];
  $colorMode?: 'black' | 'white';
  selectedItem: string;
  onSelectedItem: (studyType: string) => void;
}

function CommonFilter({
  title,
  name,
  $position = 'bottom',
  $colorMode = 'black',
  icon,
  list,
  selectedItem,
  onSelectedItem,
}: CommonFilterProps) {
  const { ref, isSelectOpen, selectToggleHandler, selectedHandler } = useSelect();
  const { onChangeFilter } = useFilter();

  const handleSelect = (event: any, studyName: string) => {
    onSelectedItem(studyName);
    onChangeFilter(name, studyName);
  };

  return (
    <S.Filter onClick={selectToggleHandler} ref={ref} $colorMode={$colorMode}>
      <S.Title> {selectedItem ? icon + selectedItem : icon + title}</S.Title>
      {isSelectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

      {isSelectOpen && (
        <S.Dropdown onClick={selectedHandler} $colorMode={$colorMode} $position={$position}>
          {list.map(data => (
            <S.DropdownItem key={data.key} onClick={event => handleSelect(event, data.name)}>
              {data.name}
            </S.DropdownItem>
          ))}
        </S.Dropdown>
      )}
    </S.Filter>
  );
}

export default CommonFilter;
