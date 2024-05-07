import { useContext, useEffect } from 'react';
import PostDetailHeader from '../post-detail/PostDetailHeader';
import PostDetailStudyArea from '../post-detail/PostDetailStudyArea';
import PostDetailContent from '../PostDetailContents';
import * as S from './PostDetailContents.style';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';
import { updatePostItemViews } from '@pages/post-detail/service/post-detail-service';
import AuthContext from '@pages/auth/context/AuthContext';

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
        <PostDetailHeader />
        <PostDetailStudyArea />
        <PostDetailContent />
      </S.Wrapper>
    </S.Section>
  );
}
