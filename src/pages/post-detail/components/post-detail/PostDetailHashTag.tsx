import { useContext } from 'react';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import * as S from './PostDetailHashTag.style';

export default function PostDetailHashTag() {
  const { data } = useContext(PostDetailFetcherContext);

  return (
    <S.PostDetailHashtag>
      <S.PostDetailStudyType>🧑🏽‍💻 {data.studyType}</S.PostDetailStudyType>
      {/* <S.PostDetailHashtagItem>React</S.PostDetailHashtagItem>
      <S.PostDetailHashtagItem>Umm..</S.PostDetailHashtagItem> */}
    </S.PostDetailHashtag>
  );
}
