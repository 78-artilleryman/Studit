import { collection, query, where, orderBy, Query, DocumentData } from 'firebase/firestore';

export function buildFirestoreQuery(
  db: any,
  studyType: string,
  period: string,
  technologys: string[],
): Query<DocumentData, DocumentData> {
  let postsRef = collection(db, 'posts');
  let postsQuery: Query;

  if (studyType === '전체' && period === '전체' && technologys.length === 0) {
    postsQuery = query(postsRef, orderBy('createdAt', 'desc'));
  } else if (studyType === '전체' && technologys.length === 0) {
    postsQuery = query(postsRef, where('period', '==', period), orderBy('createdAt', 'desc'));
  } else if (period === '전체' && technologys.length === 0) {
    postsQuery = query(postsRef, where('studyType', '==', studyType), orderBy('createdAt', 'desc'));
  } else if (studyType === '전체' && period === '전체') {
    postsQuery = query(postsRef, where('technologys', 'array-contains-any', technologys), orderBy('createdAt', 'desc'));
  } else if (period === '전체') {
    postsQuery = query(
      postsRef,
      where('studyType', '==', studyType),
      where('technologys', 'array-contains-any', technologys),
      orderBy('createdAt', 'desc'),
    );
  } else if (studyType === '전체') {
    postsQuery = query(
      postsRef,
      where('period', '==', period),
      where('technologys', 'array-contains-any', technologys),
      orderBy('createdAt', 'desc'),
    );
  } else if (technologys.length === 0) {
    postsQuery = query(
      postsRef,
      where('period', '==', period),
      where('studyType', '==', studyType),
      orderBy('createdAt', 'desc'),
    );
  } else {
    postsQuery = query(
      postsRef,
      where('studyType', '==', studyType),
      where('period', '==', period),
      where('technologys', 'array-contains-any', technologys),
      orderBy('createdAt', 'desc'),
    );
  }

  return postsQuery;
}
