import { validate, validateResult } from './validate-utils';

export const isValidatePasswordConfirm = (existingPassword: string, passwordConfirm: string) => {
  if (validate.isEmpty(existingPassword) || validate.isEmpty(passwordConfirm) || existingPassword !== passwordConfirm)
    return validateResult['failed']({ message: '비밀번호가 일치하지 않아요.' });
  return validateResult['success']();
};

export const isValidatePassword = (passwordValue: string) => {
  if (validate.isEmpty(passwordValue)) return validateResult['failed']({ message: '비밀번호를 입력해주세요.' });
  const validateType = validate.validatePattern.password.test(passwordValue) ? 'success' : 'failed';
  return validateResult[validateType]({ message: '올바른 비밀번호 형식이 아니에요' });
};
