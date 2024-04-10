import { Postdata } from '@pages/home/interface/Types';
import PostItem from '../postItem/PostItem';

interface PostListProps {
  postData: Postdata[];
}

function PostList({ postData }: PostListProps) {
  return (
    <>
      {postData.map(post => (
        <PostItem key={post.id} Postdata={post}></PostItem>
      ))}
    </>
  );
}

export default PostList;
