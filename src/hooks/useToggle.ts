import { useState } from 'react';

export default function useToggle(initialState: boolean = false) {
  const [isToggle, setIsToggle] = useState(initialState);

  const handleOpenToggle = (event: any) => {
    event.preventDefault();
    setIsToggle(true);
  };

  const handleCloseToggle = () => setIsToggle(false);

  const handleToggle = () => setIsToggle(prevToggle => !prevToggle);

  return {
    isToggle,
    handleOpenToggle,
    handleCloseToggle,
    handleToggle,
  };
}
