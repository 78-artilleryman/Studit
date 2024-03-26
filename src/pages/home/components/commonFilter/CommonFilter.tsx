import useSelect from '@hooks/useSelect';
import * as S from './CommonFilter.style';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

interface ClassificationItem {
  key: number;
  value: string;
  name: string;
}

interface CommonFilterProps {
  title: string;
  position?: 'bottom' | 'top';
  icon?: string;
  list: ClassificationItem[];
}

function CommonFilter({ title, position, icon, list }: CommonFilterProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = useSelect();

  return (
    <S.Filter onClick={selectToggleHandler}>
      <S.Title> {selected ? icon + selected : icon + title}</S.Title>
      {isSelectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

      {isSelectOpen && (
        <S.Dropdown onClick={selectedHandler}>
          {list.map(data => (
            <S.DropdownItem key={data.key}>{data.name}</S.DropdownItem>
          ))}
        </S.Dropdown>
      )}
    </S.Filter>
  );
}

export default CommonFilter;
