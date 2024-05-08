import PopularPosts from '../popular-post/PopularPosts';
import { useContext, useEffect } from 'react';
import PostDetailHeader from '../post-detail/PostDetailHeader';
import PostDetailContent from '../PostDetailContents';
import * as S from './PostDetailContents.style';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import { updatePostItemViews } from '@pages/post-detail/service/post-detail-service';
import AuthContext from '@pages/auth/context/AuthContext';
import PostDetailCommentInput from '../post-detail/PostDetailCommentInput';
import PostDetailCommentList from '../post-detail/PostDetailCommentList';

export default function PostDetailContents() {
  const { data } = useContext(PostDetailFetcherContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if ((data?.postViews, user, data?.id)) {
      updatePostItemViews(data.postViews, user?.uid, data.id);
    }
  }, [data, user]);

  return (
    <S.Section>
      <S.Wrapper>
        <S.ContentWrapper>
          <PostDetailHeader />
          <PostDetailContent />
          <PostDetailCommentInput />
          <PostDetailCommentList />
        </S.ContentWrapper>
        <PopularPosts />
      </S.Wrapper>
    </S.Section>
  );
}
