import React from 'react';
import { data } from './mockdata';
import PostItem from '../postItem/PostItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';

const PostLayout = styled.div`
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  gap: 20px;
  width: 1280px;
  margin: 0 auto;
`;
function PostList() {
  const postlist = useSelector((state: RootState) => state.post.postList);

  return (
    <PostLayout>
      {postlist.map(post => (
        <PostItem key={post.id} Postdata={post}></PostItem>
      ))}
    </PostLayout>
  );
}

export default PostList;
