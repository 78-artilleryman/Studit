type ValidateError = { message: string };
type ValidationType = 'email' | 'password';

abstract class ValidateUtils {
  validateSuccess() {
    return { result: true, message: '' };
  }

  validateFailed(error: ValidateError) {
    return { result: false, message: error.message };
  }
}

class Validate extends ValidateUtils {
  public validatePattern;

  constructor() {
    super();
    this.validatePattern = {
      name: /^[가-힣]{2,6}$/,
      email: /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-za-z0-9-]+/,
      password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    };
  }

  isEmpty(value: string) {
    return value.trim().length === 0;
  }

  isValid(type: ValidationType, value: string) {
    return this.validatePattern[type].test(value);
  }
}

export const validate = new Validate();

export const validateResult = {
  success: validate.validateSuccess,
  failed: validate.validateFailed,
};
