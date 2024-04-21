import useSelect from '@hooks/useSelect';
import * as S from './TechnologyFilter.style';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import TechnologyItem from './TechnologyItem';

interface FilterItem {
  id: number;
  image: string;
  value: string;
  name: string;
  color: string;
}

interface TechnologyFilterProps {
  title: string;
  subtitle: string[];
  position: string;
  language: FilterItem[];
}

function TechnologyFilter({ title, subtitle, position, language }: TechnologyFilterProps) {
  const { ref, isSelectOpen, selected, selectToggleHandler, selectedHandler } = useSelect();

  return (
    <>
      <S.Filter onClick={selectToggleHandler} ref={ref}>
        <S.Title> {'📚 ' + title}</S.Title>
        {isSelectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

        {isSelectOpen && (
          <S.Technology>
            <S.SubTitle>스터디나 프로젝트에 적용할 기술을 선택해주세요!</S.SubTitle>
            <S.TechnologyList>
              {language.map(data => (
                <TechnologyItem key={data.id} {...data}></TechnologyItem>
              ))}
            </S.TechnologyList>
          </S.Technology>
        )}
      </S.Filter>
    </>
  );
}

export default TechnologyFilter;
