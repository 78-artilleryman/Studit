import { useState } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';

type Validate = (value: string) => Promise<{ result: boolean; message: string }> | { result: boolean; message: string };

function useInput(validate: Validate) {
  const [inputState, setInputState] = useState({
    value: '',
    isTouched: false,
    hasError: false,
    errorMessage: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputState(prevState => ({ ...prevState, value: event.target.value }));

  const handleInputBlur = async (event: FocusEvent<HTMLInputElement>) => {
    const validation = await validate(event.target.value);
    const hasError = !validation.result;
    const errorMessage = validation.message;

    setInputState(prevState => ({ ...prevState, hasError, errorMessage, isTouched: true }));
  };

  const isValid = inputState.isTouched && !inputState.hasError;

  return {
    inputState,
    isValid,
    handleInputChange,
    handleInputBlur,
  };
}

export default useInput;
