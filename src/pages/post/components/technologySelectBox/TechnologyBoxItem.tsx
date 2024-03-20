import * as S from './TechnologyBoxItem.style';

interface TechnologyItemProps {
  image: string;
  name: string;
  color: string;
}

function TechnologyBoxItem({ name, image, color }: TechnologyItemProps) {
  return (
    <S.TechnologyItem color={color}>
      <S.Image src={image} alt="TechnologyItem" />
      <S.Name>{name}</S.Name>
    </S.TechnologyItem>
  );
}

export default TechnologyBoxItem;
