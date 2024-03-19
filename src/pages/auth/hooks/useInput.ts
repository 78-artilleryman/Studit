import { ChangeEvent, useState } from 'react';

type Validate = (value: string) => boolean;

function useInput(validate: Validate) {
  const [inputState, setInputState] = useState({
    value: '',
    isTouched: false,
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) =>
    setInputState(prevState => ({ ...prevState, value: event.target.value }));
  const handleBlurInput = () => setInputState(prevState => ({ ...prevState, isTouched: true }));

  const validation = validate(inputState.value);
  const isValid = inputState.isTouched && validation;
  const hasError = inputState.isTouched && !isValid;

  return {
    inputState,
    hasError,
    handleChangeInput,
    handleBlurInput,
  };
}

export default useInput;
