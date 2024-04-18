import PostDetailHeader from '../post-detail/PostDetailHeader';
import PostDetailStudyArea from '../post-detail/PostDetailStudyArea';
import PostDetailContent from '../PostDetailContents';
import * as S from './PostDetailContents.style';

export default function PostDetailContents() {
  return (
    <S.Section>
      <S.Wrapper>
        <PostDetailHeader />
        <PostDetailStudyArea />
        <PostDetailContent />
      </S.Wrapper>
    </S.Section>
  );
}
