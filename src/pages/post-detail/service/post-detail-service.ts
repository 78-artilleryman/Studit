import { db } from '@config/firebaseApp';
import { arrayUnion, doc, onSnapshot, updateDoc } from 'firebase/firestore';

export const fetchPostDetail = (postId: string, onData: (data: any) => void, onError: (error: any) => void) => {
  const docRef = doc(db, 'posts', postId);
  const unsubscribe = onSnapshot(
    docRef,
    doc => {
      if (doc.exists()) {
        const postData = { ...doc.data(), id: doc.id };
        onData(postData);
      } else {
        onError(new Error('해당 포스트를 찾을 수 없습니다.'));
      }
    },
    error => {
      onError(error);
    },
  );

  // unsubscribe 함수 반환
  return unsubscribe;
};

export const updatePostItemViews = async (postViews: string[], userId: string | undefined, postId: string) => {
  try {
    const postRef = doc(db, 'posts', postId);

    if (userId && !postViews.includes(userId)) {
      await updateDoc(postRef, {
        postViews: arrayUnion(userId),
      });
    }
  } catch (e) {
    console.log(e);
  }
};
