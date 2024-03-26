import useSelect from '@hooks/useSelect';
import * as S from './TechnologySelectBox.style';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import TechnologyBoxItem from './TechnologyBoxItem';
import SelectBoxLabel from '../formLabel/FormLabel';

interface LanguageItem {
  id: number;
  image: string;
  value: string;
  name: string;
  color: string;
}

interface TechnologyFilterProps {
  title: string;
  position: string;
  language: LanguageItem[];
}

function TechnologySelectBox({ title, position, language }: TechnologyFilterProps) {
  const { isSelectOpen, selected, selectToggleHandler, selectedHandler } = useSelect();

  return (
    <div>
      <SelectBoxLabel componentName={'기술스택'}></SelectBoxLabel>
      <S.SelectBox onClick={selectToggleHandler}>
        <S.Placeholder> {'📚 ' + title}</S.Placeholder>
        {isSelectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

        {isSelectOpen && (
          <S.Technology>
            <S.SubTitle>스터디나 프로젝트에 적용할 기술을 선택해주세요!</S.SubTitle>
            <S.TechnologyList>
              {language.map(data => (
                <TechnologyBoxItem {...data}></TechnologyBoxItem>
              ))}
            </S.TechnologyList>
          </S.Technology>
        )}
      </S.SelectBox>
    </div>
  );
}

export default TechnologySelectBox;
