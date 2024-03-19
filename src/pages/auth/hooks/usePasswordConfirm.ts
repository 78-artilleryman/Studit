import { ChangeEvent, useState } from 'react';

type Validate = (existingPassword: string, passwordConfirm?: string) => boolean;

function usePasswordConfirm(validate: Validate) {
  const [passwordConfirmState, setPasswordConfirmState] = useState({ value: '', isTouched: false });

  const handleChangePasswordConfirm = (event: ChangeEvent<HTMLInputElement>) =>
    setPasswordConfirmState(prevState => ({ ...prevState, value: event.target.value }));

  const handleBlurPasswordConfirm = () => setPasswordConfirmState(prevState => ({ ...prevState, isTouched: true }));

  const passwordConfirmValidation = validate.call(null, passwordConfirmState.value);
  const isValidPasswordConfirm = passwordConfirmState.isTouched && passwordConfirmValidation;
  const hasErrorPasswordConfirm = passwordConfirmState.isTouched && !isValidPasswordConfirm;

  return {
    passwordConfirmState,
    hasErrorPasswordConfirm,
    handleChangePasswordConfirm,
    handleBlurPasswordConfirm,
  };
}

export default usePasswordConfirm;
