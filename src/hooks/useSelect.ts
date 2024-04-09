import { useState, MouseEvent, useRef, useEffect, useCallback } from 'react';

function useSelect() {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const selectToggleHandler = () => setIsSelectOpen(prevSelect => !prevSelect);

  const selectedHandler = (event: MouseEvent) => {
    event.preventDefault();
    const target = event.target as HTMLLIElement | HTMLUListElement;
    if (target.nodeName === 'UL') return;

    setSelected(target.textContent!);
  };

  const handleClickOutside = useCallback(
    (evnet: MouseEvent) => {
      if (!ref.current) return;

      const inside = ref.current.contains(evnet.target as Node);
      if (!inside) setIsSelectOpen(false);
    },
    [setIsSelectOpen, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside as any);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any);
    };
  }, [handleClickOutside]);

  return {
    ref,
    isSelectOpen,
    selected,
    selectToggleHandler,
    selectedHandler,
  };
}

export default useSelect;
