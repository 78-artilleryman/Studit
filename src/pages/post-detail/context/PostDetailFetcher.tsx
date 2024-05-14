import React, { createContext, PropsWithChildren } from 'react';
import useFetcher from '../hooks/use-fetcher';
import { useParams } from 'react-router-dom';

export const PostDetailFetcherContext = createContext<any>(null);

export default function PostDetailFetcher(props: PropsWithChildren) {
  const { postId } = useParams();
  const fetcherState = useFetcher(postId!);

  if (fetcherState.isLoading) {
    return <p>로딩중...</p>;
  }

  if (!fetcherState.data) {
    return <p>없는 페이지에요</p>;
  }

  if (fetcherState.hasError) {
    return <p>에러 페이지</p>;
  }

  return <PostDetailFetcherContext.Provider value={fetcherState}>{props.children}</PostDetailFetcherContext.Provider>;
}
