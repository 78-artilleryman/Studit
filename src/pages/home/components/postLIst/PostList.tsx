import { Postdata } from '@pages/home/interface/Types';

import { Suspense, lazy } from 'react';
import Skeleton from '../skeleton/Skeleton';

const PostItem = lazy(() => import('../postItem/PostItem'));

interface PostListProps {
  postData: Postdata[];
}

function PostList({ postData }: PostListProps) {
  return (
    <>
      {postData.map(post => (
        <Suspense fallback={<Skeleton />} key={post.id}>
          <PostItem key={post.id} postdata={post}></PostItem>
        </Suspense>
      ))}
    </>
  );
}

export default PostList;
