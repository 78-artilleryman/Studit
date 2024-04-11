import { validate, validateResult } from './validate-utils';

export const isValidateName = (nameValue: string) => {
  if (validate.isEmpty(nameValue)) return validateResult['failed']({ message: '이름을 입력해주세요. ' });
  const validateType = validate.validatePattern.name.test(nameValue) ? 'success' : 'failed';
  return validateResult[validateType]({ message: '올바른 이름의 형식이 아니에요' });
};
