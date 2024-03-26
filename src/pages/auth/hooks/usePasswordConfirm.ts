import { ChangeEvent, useState } from 'react';

type Validate = (existingPassword: string, passwordConfirm?: string) => boolean;

function usePasswordConfirm(validate: Validate) {
  const [passwordConfirmState, setPasswordConfirmState] = useState({ value: '', isTouched: false });

  const handlePasswordConfirmChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPasswordConfirmState(prevState => ({ ...prevState, value: event.target.value }));

  const handlePasswordConfirmBlur = () => setPasswordConfirmState(prevState => ({ ...prevState, isTouched: true }));

  const passwordConfirmValidation = validate.call(null, passwordConfirmState.value);
  const isValidPasswordConfirm = passwordConfirmState.isTouched && passwordConfirmValidation;
  const hasErrorPasswordConfirm = passwordConfirmState.isTouched && !isValidPasswordConfirm;

  return {
    passwordConfirmState,
    isValidPasswordConfirm,
    hasErrorPasswordConfirm,
    handlePasswordConfirmChange,
    handlePasswordConfirmBlur,
  };
}

export default usePasswordConfirm;
