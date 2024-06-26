import { Link } from 'react-router-dom';
import * as S from './PopularPosts.style';
import { useEffect, useState } from 'react';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { Postdata } from '@pages/home/interface/Types';

export default function PopularPosts() {
  const [popularPost, setPopularPost] = useState<Postdata[]>();
  console.log(popularPost);

  useEffect(() => {
    const postsRef = collection(db, 'posts');
    const postsQuery = query(postsRef, orderBy('postViews', 'desc'), limit(5));
    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc?.data(),
        id: doc?.id,
      }));
      setPopularPost(data as Postdata[]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <S.PopularPosts>
      <S.PopularPostTitle>🔥 요새 핫한 스터디 Top5</S.PopularPostTitle>
      <S.PopularPostList>
        {popularPost?.map((postData, i) => (
          <S.PopularPostItem key={postData.id}>
            <Link to={`/post/${postData.id}`}>
              {i + 1 + '. '}
              {postData.postTitle}
            </Link>
          </S.PopularPostItem>
        ))}
      </S.PopularPostList>
      <S.More to="/">더 많은 스터디 보러갈래요.</S.More>
    </S.PopularPosts>
  );
}
