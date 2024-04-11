// import { emailCheck } from "@/services/business-sevice"
import { emailCheck } from '@pages/auth/service/auth';
import { validate, validateResult } from './validate-utils';

export const isValidateCheckEmail = async (emailValue: string): Promise<{ result: boolean; message: string }> => {
  try {
    const isValid = isValidateEmail(emailValue);
    if (!isValid.result) return isValid;
    const isExistingEmail = await emailCheck(emailValue);
    const validateResultType = !isExistingEmail ? 'success' : 'failed';
    return validateResult[validateResultType]({ message: '이미 사용중인 이메일이에요.' });
  } catch (error) {
    console.log(error);
    return {
      result: false,
      message: '알 수 없는 에러가 발생했어요. 잠시 후 다시 시도해주세요',
    };
  }
};

export const isValidateEmail = (emailValue: string) => {
  if (validate.isEmpty(emailValue)) {
    return validateResult['failed']({ message: '이메일을 입력해주세요' });
  }

  const isValid = validate.isValid('email', emailValue);
  const validateType = isValid ? 'success' : 'failed';
  return validateResult[validateType]({ message: '올바른 이메일 형식이 아니에요' });
};
