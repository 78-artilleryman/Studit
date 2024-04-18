import { db } from '@config/firebaseApp';
import { doc, getDoc } from 'firebase/firestore';

export const fetchPostDetail = async (postId: string) => {
  try {
    const document = await getDoc(doc(db, 'posts', postId));
    const documentData = document.data();
    return documentData;
  } catch (error) {
    return {
      success: false,
      message: '알 수 없는 에러가 발생했어요',
    };
  }
};
