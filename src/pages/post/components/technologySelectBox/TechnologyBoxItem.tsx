import * as S from './TechnologyBoxItem.style';
import { usePostData } from '@Pages/post/context/PostDataContext';

interface TechnologyItemProps {
  image: string;
  value: string;
  color: string;
}

function TechnologyBoxItem({ value, image, color }: TechnologyItemProps) {
  const { postData, onChagTechnologys } = usePostData();

  const checked = postData.technologys.includes(value);

  return (
    <S.TechnologyItem color={color} onClick={() => onChagTechnologys(value)} $checked={checked}>
      <S.Image src={image} alt="TechnologyItem" />
      <S.Name>{value}</S.Name>
    </S.TechnologyItem>
  );
}

export default TechnologyBoxItem;
