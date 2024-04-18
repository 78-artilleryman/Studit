import PostDetailContents from './components/post-detail-contents/PostDetailContents';
import PostDetailFetcher from './context/PostDetailFetcher';

function PostDetail() {
  return (
    <PostDetailFetcher>
      <PostDetailContents />
    </PostDetailFetcher>
  );
}

export default PostDetail;
