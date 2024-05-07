import { Link } from 'react-router-dom';
import * as S from './PopularPosts.style';

export default function PopularPosts() {
  return (
    <S.PopularPosts>
      <S.PopularPostTitle>🔥 요새 핫한 스터디 Top5</S.PopularPostTitle>
      <S.PopularPostList>
        <S.PopularPostItem>
          <Link to="/">1. 자바스크립트 Deep Dive 스터디 구해요</Link>
        </S.PopularPostItem>
        <S.PopularPostItem>
          <Link to="/">2. 리액트 공식문서 읽기 스터디</Link>
        </S.PopularPostItem>
        <S.PopularPostItem>
          <Link to="/">3. Velog 클론 코딩 프로젝트 구해요</Link>
        </S.PopularPostItem>
        <S.PopularPostItem>
          <Link to="/">4. 코드잇 따라 만들 프론트엔드 2명 구해요</Link>
        </S.PopularPostItem>
        <S.PopularPostItem>
          <Link to="/">5. 프론트엔드 면접 스터디</Link>
        </S.PopularPostItem>
      </S.PopularPostList>
      <S.More to="/">더 많은 스터디 보러갈래요.</S.More>
    </S.PopularPosts>
  );
}
