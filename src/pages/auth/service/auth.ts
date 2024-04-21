import { app, db } from '@config/firebaseApp';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';

interface EmailWithPassword {
  emailValue: string;
  passwordValue: string;
}

interface Register extends EmailWithPassword {
  namveValue: string;
}

export async function register({ emailValue, passwordValue, namveValue }: Register) {
  try {
    const authService = getAuth(app);
    const { user } = await createUserWithEmailAndPassword(authService, emailValue, passwordValue);
    await saveFirebaseEmail(emailValue);

    await updateProfile(user, { displayName: namveValue });
    return {
      result: true,
      message: '회원가입이 성공적으로 이루어졌어요.',
    };
  } catch (error) {
    return {
      result: false,
      message: '알 수 없는 이유로 회원가입에 실패했어요. 잠시후 다시 시도해주세요.',
    };
  }
}

export async function login({ emailValue, passwordValue }: EmailWithPassword) {
  try {
    const authService = getAuth(app);
    await signInWithEmailAndPassword(authService, emailValue, passwordValue);
    return {
      result: true,
      message: '로그인이 성공적으로 이루어졌어요.',
    };
  } catch (error) {
    return {
      result: false,
      messgae: '이메일과 비밀번호를 다시 확인해주세요.',
    };
  }
}

export async function saveFirebaseEmail(emailValue: string) {
  try {
    const emailChecking = await emailCheck(emailValue);
    if (emailChecking) return;

    const saveEmail = await addDoc(collection(db, 'auth-email'), { email: emailValue });
    return saveEmail;
  } catch (error) {
    throw error;
  }
}

export async function emailCheck(emailValue: string) {
  let isExistingEmail = false;

  const allEmails = await getDocs(collection(db, 'auth-email'));
  allEmails.forEach(doc => (isExistingEmail = doc.data().email === emailValue));

  return isExistingEmail;
}
