import { technologiesColor } from '@styles/colors';
import * as S from './Technology.style';

export const TechnologiesMapping = {
  TypeScript: {
    image: '/images/technologies/TypeScript.svg',
    backgroundColor: technologiesColor.TypeScript,
    name: 'TypeScript',
  },
  JavaScript: {
    image: '/images/technologies/JavaScript.svg',
    backgroundColor: technologiesColor.JavaScript,
    name: 'JavaScript',
  },
  NextJs: {
    image: '/images/technologies/NextJs.svg',
    backgroundColor: technologiesColor.NextJs,
    name: 'Next JS',
  },
  ReactJs: {
    image: '/images/technologies/ReactJs.svg',
    backgroundColor: technologiesColor.ReactJs,
    name: 'React JS',
  },
  CSS: {
    image: '/images/technologies/CSS.svg',
    backgroundColor: technologiesColor.CSS,
    name: 'CSS',
  },
  Scss: {
    image: '/images/technologies/Scss.svg',
    backgroundColor: technologiesColor.Scss,
    name: 'SCSS',
  },
  Tailwind: {
    image: '/images/technologies/Tailwind.svg',
    backgroundColor: technologiesColor.Tailwind,
    name: 'Tailwind CSS',
  },
  Postcss: {
    image: '/images/technologies/Postcss.svg',
    backgroundColor: technologiesColor.Postcss,
    name: 'Post CSS',
  },
  StyledComponents: {
    image: '/images/technologies/StyledComponents.svg',
    backgroundColor: technologiesColor.StyledComponents,
    name: 'Styled Components',
  },
};

interface TechnologyProps {
  background?: string;
  image?: string;
  name?: string;
  skill: keyof typeof TechnologiesMapping;
}

export default function Technology(props: TechnologyProps) {
  const background =
    TechnologiesMapping[props.skill].backgroundColor || TechnologiesMapping['TypeScript'].backgroundColor;
  const stackImage = TechnologiesMapping[props.skill].image || TechnologiesMapping['TypeScript'].image;
  const stackName = TechnologiesMapping[props.skill].name || TechnologiesMapping['TypeScript'].name;

  return (
    <S.TechnologyBackground background={background}>
      <S.TechnologyImage src={stackImage} alt={stackName} />
      <S.TechnologyName>{stackName}</S.TechnologyName>
    </S.TechnologyBackground>
  );
}
