import React, { useContext } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { PostDetailFetcherContext } from '@pages/post-detail/context/PostDetailFetcher';

export default function PostDetailContent() {
  const { data } = useContext(PostDetailFetcherContext);
  return (
    <MDEditor
      data-color-mode="light"
      value={data.postContent}
      preview="preview"
      hideToolbar={true}
      height={'1000px'}
      style={{ marginTop: '30px', padding: '30px' }}
    />
  );
}
