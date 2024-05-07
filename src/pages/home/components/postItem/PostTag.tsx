import * as S from './PostTag.style';

interface PostTagProps {
  studyType: string;
  isDeadLine: boolean;
}

export default function PostTag(props: PostTagProps) {
  return (
    <S.Tag>
      <S.StudyTypeTag>📙 {props.studyType}</S.StudyTypeTag>
      {props.isDeadLine && <S.DeadLineTag>❗ 마감임박</S.DeadLineTag>}
    </S.Tag>
  );
}
