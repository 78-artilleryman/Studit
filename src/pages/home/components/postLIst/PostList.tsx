import { Postdata } from '@Pages/home/interface/Types';
import PostItem from '../postItem/PostItem';
import styled from 'styled-components';

const PostLayout = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
`;

function PostList({ postData }: { postData: Postdata[] }) {
  return (
    <PostLayout>
      {postData.map(post => (
        <PostItem key={post.id} Postdata={post}></PostItem>
      ))}
    </PostLayout>
  );
}

export default PostList;
