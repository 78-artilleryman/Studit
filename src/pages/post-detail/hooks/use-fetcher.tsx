import { useEffect, useReducer } from 'react';
import { fetchPostDetail } from '../service/post-detail-service';
import { fetcherActionType, fetcherReducer, initialFetcherState } from '../reducer/fetcher-reducer';

export default function useFetcher(postId: string) {
  const [state, dispatch] = useReducer(fetcherReducer, initialFetcherState);

  useEffect(() => {
    if (!postId) return;

    const fetchData = async () => {
      dispatch({ type: fetcherActionType.PENDING });
      try {
        const unsubscribe = fetchPostDetail(
          postId,
          data => {
            // 데이터 처리
            dispatch({ type: fetcherActionType.SUCCESS, data });
          },
          error => {
            console.error('Error fetching post detail:', error);
            // 에러 처리
          },
        );
      } catch (error) {
        dispatch({ type: fetcherActionType.ERROR });
      }
    };

    fetchData();
  }, [postId]);

  return state;
}
