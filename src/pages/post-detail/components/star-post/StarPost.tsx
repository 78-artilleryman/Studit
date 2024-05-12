import { Link } from 'react-router-dom';
import * as S from './StarPost.style';
import { useEffect, useState } from 'react';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@config/firebaseApp';
import { Postdata } from '@pages/home/interface/Types';

export default function StarPost() {
  const [starPost, setStarPost] = useState<Postdata[]>();

  useEffect(() => {
    const postsRef = collection(db, 'posts');
    const postsQuery = query(postsRef, orderBy('likeCount', 'desc'), limit(5));
    const unsubscribe = onSnapshot(postsQuery, snapshot => {
      const data = snapshot.docs.map(doc => ({
        ...doc?.data(),
        id: doc?.id,
      }));
      setStarPost(data as Postdata[]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <S.StarPosts>
      <S.StarPostTitle>⭐️ 별이 빛나는 스터디 Top5</S.StarPostTitle>
      <S.StarPostList>
        {starPost?.map((postData, i) => (
          <S.StarPostItem key={postData.id}>
            <Link to={`/post/${postData.id}`}>
              {i + 1 + '. '}
              {postData.postTitle}
            </Link>
          </S.StarPostItem>
        ))}
      </S.StarPostList>
      <S.More to="/">더 많은 스터디 보러갈래요.</S.More>
    </S.StarPosts>
  );
}
