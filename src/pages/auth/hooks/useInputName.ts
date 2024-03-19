import { ChangeEvent, useState } from 'react';

type Validate = (value: string) => boolean;

function useInputName(validate: Validate) {
  const [inputName, setInputName] = useState('');
  const [isTouched, setIsTouched] = useState<boolean>(false);

  const handleChnageInputName = (event: ChangeEvent<HTMLInputElement>) => setInputName(event.target.value);
  const handleBlurInputName = () => setIsTouched(true);

  const validation = validate(inputName);
  const isValid = isTouched && validation;
  const hasError = isTouched && !isValid;

  return {
    hasError,
    inputName,
    handleChnageInputName,
    handleBlurInputName,
  };
}

export default useInputName;
