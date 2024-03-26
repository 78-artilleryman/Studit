import React from 'react';
import SelectBoxList from './components/selectBoxList/SelectBoxList';
import PostForm from './components/postForm/PostForm';
import ActionButtons from './components/actionButtons/ActionButtons';

function Post() {
  return (
    <>
      <SelectBoxList />
      <PostForm />
      <ActionButtons />
    </>
  );
}

export default Post;
