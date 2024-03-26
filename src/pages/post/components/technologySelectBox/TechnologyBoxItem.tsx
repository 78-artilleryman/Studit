import * as S from './TechnologyBoxItem.style';
import { usePostData } from '@Pages/post/context/PostDataContext';

interface TechnologyItemProps {
  image: string;
  name: string;
  color: string;
}

function TechnologyBoxItem({ name, image, color }: TechnologyItemProps) {
  const { postData, onChagTechnologys } = usePostData();

  const checked = postData.technologys.includes(name);

  return (
    <S.TechnologyItem color={color} onClick={() => onChagTechnologys(name)} $checked={checked}>
      <S.Image src={image} alt="TechnologyItem" />
      <S.Name>{name}</S.Name>
    </S.TechnologyItem>
  );
}

export default TechnologyBoxItem;
