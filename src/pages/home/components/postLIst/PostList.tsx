import React from 'react';
import { data } from './mockdata';
import PostItem from '../postItem/PostItem';
import styled from 'styled-components';

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
      {data.map(data => (
        <PostItem key={data.id} Postdata={data}></PostItem>
      ))}
    </PostLayout>
  );
}

export default PostList;
