import useSelect from '@hooks/useSelect';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import * as S from './CommonSelectBox.style';
import FormLabel from '../formLabel/FormLabel';
import { usePostData } from '../../context/PostDataContext';

interface ListItem {
  key: number;
  value: string;
  name: string;
}

interface SelectBoxProps {
  title: string;
  id: string;
  position?: 'bottom' | 'top';
  icon?: string;
  list: ListItem[];
  value: string;
  // setPostData: Dispatch<SetStateAction<PostType>>;
}

function SelectBox({ title, id, position, icon, list, value }: SelectBoxProps) {
  const { ref, isSelectOpen, selected, selectToggleHandler, selectedHandler } = useSelect();
  const { onChange } = usePostData();

  const onChangeSelectBox = () => {
    onChange(id, selected);
  };

  return (
    <div>
      <FormLabel componentName={title}></FormLabel>
      <S.Selectbox onClick={selectToggleHandler} ref={ref}>
        <S.Placeholder> {value ? icon + value : selected ? icon + selected : icon + title}</S.Placeholder>
        {isSelectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

        {isSelectOpen && (
          <S.Dropdown onClick={selectedHandler}>
            {list.map(data => (
              <S.DropdownItem key={data.key} onClick={onChangeSelectBox}>
                {data.name}
              </S.DropdownItem>
            ))}
          </S.Dropdown>
        )}
      </S.Selectbox>
    </div>
  );
}

export default SelectBox;
