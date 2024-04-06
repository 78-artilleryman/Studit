import useSelect from '@hooks/useSelect';
import * as S from './CommonFilter.style';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useFilter } from '@pages/home/context/FilterContext';

interface ClassificationItem {
  key: number;
  value: string;
  name: string;
}

interface CommonFilterProps {
  title: string;
  name: string;
  position?: 'bottom' | 'top';
  icon?: string;
  list: ClassificationItem[];
}

function CommonFilter({ title, name, position, icon, list }: CommonFilterProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = useSelect();
  const { onChangeFilter } = useFilter();

  return (
    <S.Filter onClick={selectToggleHandler}>
      <S.Title> {selected ? icon + selected : icon + title}</S.Title>
      {isSelectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

      {isSelectOpen && (
        <S.Dropdown onClick={selectedHandler}>
          {list.map(data => (
            <S.DropdownItem key={data.key} onClick={() => onChangeFilter(name, data.name)}>
              {data.name}
            </S.DropdownItem>
          ))}
        </S.Dropdown>
      )}
    </S.Filter>
  );
}

export default CommonFilter;
