const validatePattern = {
  name: /^[가-힣]{2,6}$/,
  email: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
};

export const isValidateName = (nameValue: string) => validatePattern.name.test(nameValue);

export const isValidateEmail = (emailValue: string) => validatePattern.email.test(emailValue);

export const isValidatePassword = (passwordValue: string) => validatePattern.password.test(passwordValue);

export const isValidatePasswordConfirm = (existingPassword: string, passwordConfirm: string) =>
  existingPassword === passwordConfirm;
