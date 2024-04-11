import { useState } from 'react';
import type { ChangeEvent } from 'react';

type Validate = (existingPassword: string, passwordConfirm?: string) => { result: boolean; message: string };

function usePasswordConfirm(validate: Validate) {
  const [passwordConfirmState, setPasswordConfirmState] = useState({
    value: '',
    isTouched: false,
  });

  const handlePasswordConfirmChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPasswordConfirmState(prevState => ({ ...prevState, value: event.target.value }));

  const handlePasswordConfirmBlur = () => setPasswordConfirmState(prevState => ({ ...prevState, isTouched: true }));

  const passwordConfirmValidation = validate.call(null, passwordConfirmState.value);
  const isValidPasswordConfirm = passwordConfirmState.isTouched && passwordConfirmValidation.result;
  const hasErrorPasswordConfirm = passwordConfirmState.isTouched && !isValidPasswordConfirm;
  const errorMessage = passwordConfirmValidation.message;

  return {
    inputState: passwordConfirmState,
    isValid: isValidPasswordConfirm,
    hasError: hasErrorPasswordConfirm,
    errorMessage: errorMessage,
    handleInputChange: handlePasswordConfirmChange,
    handleInputBlur: handlePasswordConfirmBlur,
  };
}

export default usePasswordConfirm;
