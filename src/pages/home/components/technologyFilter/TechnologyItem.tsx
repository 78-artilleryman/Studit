import { useFilter } from '@Pages/home/context/FilterContext';
import * as S from './TechnologyItem.style';

interface TechnologyItemProps {
  image: string;
  value: string;
  color: string;
}

function TechnologyItem({ value, image, color }: TechnologyItemProps) {
  const { filterState, onChagTechnologysFilter } = useFilter();
  const checked = filterState.technologys.includes(value);

  return (
    <S.TechnologyItem color={color} $checked={checked} onClick={() => onChagTechnologysFilter(value)}>
      <S.Image src={image} alt="TechnologyItem" />
      <S.Name>{value}</S.Name>
    </S.TechnologyItem>
  );
}

export default TechnologyItem;
