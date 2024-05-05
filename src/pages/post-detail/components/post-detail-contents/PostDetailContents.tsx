import PopularPosts from '../popular-post/PopularPosts';
import PostDetailHeader from '../post-detail/PostDetailHeader';
import PostDetailContent from '../PostDetailContents';
import * as S from './PostDetailContents.style';

export default function PostDetailContents() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.ContentWrapper>
          <PostDetailHeader />
          <PostDetailContent />
        </S.ContentWrapper>
        <PopularPosts />
      </S.Wrapper>
    </S.Section>
  );
}
