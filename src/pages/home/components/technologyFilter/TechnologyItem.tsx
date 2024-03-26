import { useFilter } from '@Pages/home/context/FilterContext';
import * as S from './TechnologyItem.style';

interface TechnologyItemProps {
  image: string;
  name: string;
  color: string;
}

function TechnologyItem({ name, image, color }: TechnologyItemProps) {
  const { filterState, onChagTechnologysFilter } = useFilter();
  const checked = filterState.technologys.includes(name);

  return (
    <S.TechnologyItem color={color} $checked={checked} onClick={() => onChagTechnologysFilter(name)}>
      <S.Image src={image} alt="TechnologyItem" />
      <S.Name>{name}</S.Name>
    </S.TechnologyItem>
  );
}

export default TechnologyItem;
