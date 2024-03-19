//필터 데이터

//모집구분
export const ClassificationData = {
  title: '스터디 종류',
  icon: '🗂 ',
  list: [
    {
      key: 1,
      value: 'all',
      name: '전체',
    },
    {
      key: 2,
      value: 'study',
      name: '스터디',
    },
    {
      key: 3,
      value: 'project',
      name: '프로젝트',
    },
  ],
};

//스터디 횟수
export const StudyCountData = {
  title: '스터디 횟수',
  icon: '⏰ ',
  list: [
    {
      key: 1,
      value: 'all',
      name: '전체',
    },
    {
      key: 2,
      value: 'w1',
      name: '주 1회',
    },
    {
      key: 3,
      value: 'w2',
      name: '주 2회',
    },
    {
      key: 4,
      value: 'w3',
      name: '주 3회',
    },
    {
      key: 5,
      value: 'w4',
      name: '주 4회',
    },
    {
      key: 6,
      value: 'w5',
      name: '주 5회',
    },
    {
      key: 7,
      value: 'w6',
      name: '주 6회',
    },
    {
      key: 8,
      value: 'w7',
      name: '주 7회',
    },
    {
      key: 9,
      value: 'discussion',
      name: '횟수협의',
    },
  ],
};

export const technologyData = {
  title: '기술 스택',
  subtitle: ['라이브러리 및 프레임 워크', '스타일'],
  icon: '📚',
  language: [
    {
      id: 1,
      image: 'LogoImages/FilterStack/F-typescript.png',
      value: 'TypeScript',
      name: 'TypeScript',
      color: '#c2e4fb',
    },
    {
      id: 2,
      image: 'LogoImages/FilterStack/F-javascript.png',
      value: 'JavaScript',
      name: 'JavaScript',
      color: '#fff39a',
    },
    {
      id: 3,
      image: 'LogoImages/FilterStack/F-nextjs.png',
      value: 'NextJs',
      name: 'Next Js',
      color: '#9b9b9b',
    },
    {
      id: 4,
      image: 'LogoImages/FilterStack/F-react.png',
      value: 'ReactJs',
      name: 'React Js',
      color: '#c3f7ff',
    },
    {
      id: 5,
      image: 'LogoImages/FilterStack/F-css.png',
      value: 'CSS',
      name: 'CSS',
      color: '#c2dbff',
    },
    {
      id: 6,
      image: 'LogoImages/FilterStack/F-styledcomponent.png',
      value: 'StyledComponents',
      name: 'Styled Components',
      color: '#ffe0f5',
    },
    {
      id: 7,
      image: 'LogoImages/FilterStack/F-sass.png',
      value: 'Scss',
      name: 'Scss',
      color: '#ffdced',
    },
    {
      id: 8,
      image: 'LogoImages/FilterStack/F-postcss.png',
      value: 'Postcss',
      name: 'Post css',
      color: '#ffd8d2',
    },
    {
      id: 9,
      image: 'LogoImages/FilterStack/F-tailwind.png',
      value: 'Tailwind',
      name: 'Tailwind',
      color: '#c7f1ff',
    },
  ],
};
