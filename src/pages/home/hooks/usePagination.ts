import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { useEffect, useState, useCallback, RefObject, SetStateAction } from 'react';
import { Postdata } from '../interface/Types';

interface setPostDataType {
  (value: SetStateAction<Postdata[]>): void;
}

const usePagination = (
  postData: Postdata[],
  setPostData: setPostDataType,
  elementRef: RefObject<Element> | null,
  { threshold = 0.1, root = null, rootMargin = '0%' },
) => {
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [loadingMore, setLoadingMore] = useState(false); // 추가 요청시 로딩 상태
  const [key, setKey] = useState<any>(); // 마지막으로 불러온 스냅샷 상태
  const [noMore, setNoMore] = useState(false); // 추가로 요청할 데이터 없다는 flag

  const postsRef = collection(db, 'posts');
  // 첫번째 페이지 요청 함수
  const getFirstPage = useCallback(async () => {
    let postsRef = collection(db, 'posts');
    const postsQuery = query(postsRef, orderBy('createdAt', 'desc'), limit(12));
    try {
      setLoading(true);
      const docSnap = await getDocs(postsQuery);
      const data = docSnap.docs.map(doc => ({
        ...doc?.data(),
        id: doc?.id,
      }));
      setPostData(data as Postdata[]);
      setKey(docSnap.docs[docSnap.docs.length - 1]);

      return data;
    } catch (err) {
      console.log(err);
    }
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 추가 요청 함수
  const loadMore = useCallback(
    async (loadCount: number) => {
      try {
        setLoading(true);
        const postsQuery = query(postsRef, orderBy('createdAt', 'desc'), limit(loadCount), startAfter(key));
        const docSnap = await getDocs(postsQuery);
        const docsArray = docSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(docsArray);
        setPostData(prev => [...prev, ...docsArray] as Postdata[]);
        docsArray.length === 0 ? setNoMore(true) : setKey(docSnap.docs[docSnap.docs.length - 1]);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  const onIntersect = useCallback(
    async ([entry]: IntersectionObserverEntry[]) => {
      // 만약에 지정한 요소가 화면에 보이거나 현재 데이터를 더 불러오는 상황이 아닐경우,
      // 기존 요소의 주시를 해체하고 추가로 3개의 문서를 더 불러오도록 설정
      if (entry.isIntersecting && !loadingMore && key) {
        setLoadingMore(true);
        loadMore(8);
        setLoadingMore(false);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loadMore, loadingMore],
  );

  useEffect(() => {
    getFirstPage();
  }, [getFirstPage]);

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;
    let observer: any;
    if (!node || !hasIOSupport) return;

    if (elementRef?.current && !noMore) {
      const observerParams = { threshold, root, rootMargin };
      observer = new IntersectionObserver(onIntersect, observerParams);

      observer.observe(node);
    }

    return () => {
      setLoading(false);
      setLoadingMore(false);
      observer && observer.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef?.current, key]);

  return { loading, loadingMore, noMore };
};

export default usePagination;
