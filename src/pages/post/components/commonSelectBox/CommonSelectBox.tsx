import useSelect from '@hooks/useSelect';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import * as S from './CommonSelectBox.style';
import SelectBoxLabel from '../selectBoxLabel/SelectBoxLabel';

interface ListItem {
  key: number;
  value: string;
  name: string;
}

interface SelectBoxProps {
  title: string;
  position?: 'bottom' | 'top';
  icon?: string;
  list: ListItem[];
}

function SelectBox({ title, position, icon, list }: SelectBoxProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = useSelect();

  return (
    <div>
      <SelectBoxLabel componentName={title}></SelectBoxLabel>
      <S.Selectbox onClick={selectToggleHandler}>
        <S.Placeholder> {selected ? icon + selected : icon + title}</S.Placeholder>
        {isSelectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

        {isSelectOpen && (
          <S.Dropdown onClick={selectedHandler}>
            {list.map(data => (
              <S.DropdownItem key={data.key}>{data.name}</S.DropdownItem>
            ))}
          </S.Dropdown>
        )}
      </S.Selectbox>
    </div>
  );
}

export default SelectBox;
