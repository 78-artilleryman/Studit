import { useEffect, useReducer } from 'react';
import { fetchPostDetail } from '../service/post-detail-service';
import { fetcherActionType, fetcherReducer, initialFetcherState } from '../reducer/fetcher-reducer';

export default function useFetcher(postId: string) {
  const [state, dispatch] = useReducer(fetcherReducer, initialFetcherState);

  useEffect(() => {
    console.log(postId);
    if (!postId) return;

    const fetchData = async () => {
      dispatch({ type: fetcherActionType.PENDING });
      try {
        const data = await fetchPostDetail(postId);

        dispatch({ type: fetcherActionType.SUCCESS, data });
      } catch (error) {
        dispatch({ type: fetcherActionType.ERROR });
      }
    };

    fetchData();
  }, [postId]);

  return state;
}
