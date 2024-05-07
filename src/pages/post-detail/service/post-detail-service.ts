import { db } from '@config/firebaseApp';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';

export const fetchPostDetail = async (postId: string) => {
  try {
    const document = await getDoc(doc(db, 'posts', postId));
    const documentData = document.data();
    const id = document.id;
    const documentWithId = { id, ...documentData };

    return documentWithId;
  } catch (error) {
    return {
      success: false,
      message: '알 수 없는 에러가 발생했어요',
    };
  }
};

export const updatePostItemViews = async (postViews: string[], userId: string | undefined, postId: string) => {
  try {
    const postRef = doc(db, 'posts', postId);
    console.log(postRef);
    if (userId && !postViews.includes(userId)) {
      await updateDoc(postRef, {
        postViews: arrayUnion(userId),
      });
    }
    console.log('Test');
  } catch (e) {
    console.log(e);
  }
};
