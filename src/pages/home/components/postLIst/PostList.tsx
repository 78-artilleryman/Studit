import PostItem from '../postItem/PostItem';
import styled from 'styled-components';
import { data } from './mockdata';

const PostLayout = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
`;
function PostList() {
  return (
    <PostLayout>
      {data.map(post => (
        <PostItem key={post.id} Postdata={post}></PostItem>
      ))}
    </PostLayout>
  );
}

export default PostList;
