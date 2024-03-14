import React from 'react';
import { data } from './mockdata';
import PostItem from '../postItem/PostItem';

function PostList() {
  return (
    <div>
      {data.map(data => (
        <PostItem data={data}></PostItem>
      ))}
    </div>
  );
}

export default PostList;
