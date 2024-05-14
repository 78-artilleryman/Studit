import useSelect from '@hooks/useSelect';
import * as S from './TechnologyFilter.style';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import TechnologyItem from './TechnologyItem';
import { technologyData } from '../filterList/data';

// interface FilterItem {
//   id: number;
//   image: string;
//   value: string;
//   name: string;
//   color: string;
// }

interface TechnologyFilterProps {
  $position?: 'top' | 'bottom';
  $colorMode?: 'black' | 'white';
}

function TechnologyFilter({ $position = 'bottom', $colorMode = 'black' }: TechnologyFilterProps) {
  const { ref, isSelectOpen, selected, selectToggleHandler, selectedHandler } = useSelect();

  return (
    <>
      <S.Filter onClick={selectToggleHandler} ref={ref} $colorMode={$colorMode}>
        <S.Title> {'📚 ' + technologyData.title}</S.Title>
        {isSelectOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}

        {isSelectOpen && (
          <S.Technology $position={$position}>
            <S.SubTitle>스터디나 프로젝트에 적용할 기술을 선택해주세요!</S.SubTitle>
            <S.TechnologyList>
              {technologyData.language.map(data => (
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
